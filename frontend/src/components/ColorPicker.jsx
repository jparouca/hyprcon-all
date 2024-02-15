import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ColorPicker = ({ title, description }) => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div className="text-black">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Popover>
                  <PopoverTrigger>
                    <div className=" border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50">
                      <span>Colors</span>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="flex justify-center">
                      <HexColorPicker color={color} onChange={setColor} />
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
