import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputWizard } from "./InputWizard";

export const ShadowCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Shadow</CardTitle>
        <CardDescription>Shadow settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SHADOW_WIKI.map((field, index) => (
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

const SHADOW_WIKI = [
  {
    section: "decoration",
    name: "drop_shadow",
    description: "enable drop shadows on windows",
    type: "bool",
    default: "true",
    input: "checkbox",
  },
  {
    section: "decoration",
    name: "shadow_range",
    description: "Shadow range (“size”) in layout px",
    type: "int",
    default: "4",
    input: "textbox",
  },
  {
    section: "decoration",
    name: "shadow_render_power",
    description:
      "in what power to render the falloff (more power, the faster the falloff) [1 - 4]",
    type: "int",
    default: "3",
    input: "textbox",
  },
  {
    section: "decoration",
    name: "shadow_ignore_window",
    description:
      "if true, the shadow will not be rendered behind the window itself, only around it.",
    type: "bool",
    default: "true",
    input: "checkbox",
  },
  {
    section: "decoration",
    name: "col.shadow",
    description: "shadow’s color. Alpha dictates shadow’s opacity.",
    type: "color",
    default: "0xee1a1a1a",
    input: "colorpicker",
  },
  {
    section: "decoration",
    name: "col.shadow_inactive",
    description:
      "inactive shadow color. (if not set, will fall back to col.shadow)",
    type: "color",
    default: "unset",
    input: "colorpicker",
  },
  {
    section: "decoration",
    name: "shadow_offset",
    description: "shadow’s rendering offset.",
    type: "vec2",
    default: "[0, 0]",
    input: "textbox",
  },
  {
    section: "decoration",
    name: "shadow_scale",
    description: "shadow’s scale. [0.0 - 1.0]",
    type: "float",
    default: "1.0",
    input: "slider",
  },
];
