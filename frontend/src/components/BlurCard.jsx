import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputWizard } from "./InputWizard";

export const BlurCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Blur</CardTitle>
        <CardDescription>Blur settings.</CardDescription>
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

const BLUR_WIKI = [];
