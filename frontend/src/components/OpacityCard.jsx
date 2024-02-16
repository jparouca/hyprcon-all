import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputWizard } from "./InputWizard";

export const OpacityCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Opacity</CardTitle>
        <CardDescription>Opacity settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {OPACITY_WIKI.map((field, index) => (
            <Card className="m-1">
              <CardHeader>
                <CardTitle>{field.name}</CardTitle>
                <CardDescription>{field.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <InputWizard
                  inputType={field.input}
                  title={field.name}
                  description={field.description}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const OPACITY_WIKI = [
  {
    section: "decoration",
    name: "active_opacity",
    description: "opacity of active windows. [0.0 - 1.0]",
    type: "float",
    default: "1.0",
    input: "slider",
  },
  {
    section: "decoration",
    name: "inactive_opacity",
    description: "opacity of inactive windows. [0.0 - 1.0]",
    type: "float",
    default: "1.0",
    input: "slider",
  },
  {
    section: "decoration",
    name: "fullscreen_opacity",
    description: "opacity of fullscreen windows. [0.0 - 1.0]",
    type: "float",
    default: "1.0",
    input: "slider",
  },
];
