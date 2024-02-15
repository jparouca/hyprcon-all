import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputWizard } from "./InputWizard";

export const BorderCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Border</CardTitle>
        <CardDescription>Border settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {BORDER_WIKI.map((field, index) => (
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

const BORDER_WIKI = [
  {
    section: "general",
    name: "border_size",
    description: "size of the border around windows",
    type: "int",
    default: "1",
    input: "slider",
  },
  {
    section: "general",
    name: "no_border_on_floating",
    description: "disable borders for floating windows",
    type: "bool",
    default: "false",
    input: "checkbox",
  },
  {
    section: "general",
    name: "inactive_border",
    description: "border color for inactive windows",
    type: "gradient",
    default: "0xffffffff",
    input: "colorpicker",
  },
  {
    section: "general",
    name: "active_border",
    description: "border color for the active window",
    type: "gradient",
    default: "0xff444444",
    input: "colorpicker",
  },
  {
    section: "general",
    name: "nogroup_border",
    description:
      "inactive border color for window that cannot be added to a group (see denywindowfromgroup dispatcher)",
    type: "gradient",
    default: "0xffffaaff",
    input: "colorpicker",
  },
];
