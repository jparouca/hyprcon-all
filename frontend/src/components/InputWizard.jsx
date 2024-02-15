import { HexColorInput, HexColorPicker } from "react-colorful";
import { CheckboxCard, CheckboxWithText } from "./CheckboxCard";
import { Slider } from "./ui/slider";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { useState } from "react";
import { Button } from "./ui/button";
export const InputWizard = ({
  inputType,
  title,
  description,
  defaultValue,
}) => {
  const [color, setColor] = useState("#aabbcc");
  const [sliderValue, setSliderValue] = useState(1);
  const [colorInput, setColorInput] = useState("#aabbcc");

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleColorChange = (value) => {
    setColor(value);
    setColorInput(value); // Update colorInput state when color changes
  };

  const handleColorInputChange = (value) => {
    setColorInput(value);
    setColor(value); // Update color state when colorInput changes
  };

  return (
    <div className="max-w-xs">
      {inputType == "slider" && (
        <div className="flex gap-2">
          <Slider
            defaultValue={[defaultValue]}
            max={10}
            step={1}
            onValueChange={handleSliderChange}
          />
          <span>{sliderValue}</span>
        </div>
      )}
      {inputType == "checkbox" && (
        <CheckboxWithText title={title} description={description} />
      )}
      <div className="max-w-xs">
        {inputType == "colorpicker" && (
          <Popover>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="text"
                placeholder="#000000"
                value={colorInput}
                onChange={handleColorInputChange}
                className="w-full"
              ></Input>
              <PopoverTrigger>
                <Button type="submit">Colors</Button>
              </PopoverTrigger>
            </div>
            <PopoverContent>
              <div className="flex justify-center">
                <HexColorPicker color={color} onChange={handleColorChange} />
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};
