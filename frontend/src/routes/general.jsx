import { ScrollArea } from "@/components/ScrollArea";
import { WIKI_GENERAL } from "../lib/constants";
import { SliderCard } from "../components/SliderCard";
import { CheckboxCard } from "../components/CheckboxCard";
import { ColorPicker } from "../components/ColorPicker";

export const General = () => {
  return (
    <>
      <ScrollArea className="flex flex-col p-5">
        <h1 className="text-black">General</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {WIKI_GENERAL.map((field, index) => (
            <div key={index} className="mb-4">
              {field.input == "slider" && (
                <div className="max-w-xs max-h-x">
                  <SliderCard
                    title={field.name}
                    description={field.description}
                    defaultValue={field.default}
                  />
                </div>
              )}
              {field.input == "checkbox" && (
                <div className="max-w-xs">
                  <CheckboxCard
                    title={field.name}
                    description={field.description}
                    defaultValue={field.default}
                  />
                </div>
              )}

              <div className="max-w-xs">
                {field.input == "colorpicker" && (
                  <ColorPicker
                    title={field.name}
                    description={field.description}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
};
