import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputWizard } from "./InputWizard";

export const DimCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Dim</CardTitle>
        <CardDescription>Dim settings.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {DIM_WIKI.map((field, index) => (
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

const DIM_WIKI = [
  {
    section: "decoration",
    name: "dim_inactive",
    description: "enables dimming of inactive windows",
    type: "bool",
    default: "false",
    input: "checkbox",
  },
  {
    section: "decoration",
    name: "dim_strength",
    description: "how much inactive windows should be dimmed [0.0 - 1.0]",
    type: "float",
    default: "0.5",
    input: "slider",
  },
  {
    section: "decoration",
    name: "dim_special",
    description:
      "how much to dim the rest of the screen by when a special workspace is open. [0.0 - 1.0]",
    type: "float",
    default: "0.2",
    input: "slider",
  },
  {
    section: "decoration",
    name: "dim_around",
    description:
      "how much the dimaround window rule should dim by. [0.0 - 1.0]",
    type: "float",
    default: "0.4",
    input: "slider",
  },
];
