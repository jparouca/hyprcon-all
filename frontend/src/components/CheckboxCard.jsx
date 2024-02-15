import { Checkbox } from "@/components/ui/checkbox";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export function CheckboxCard({ title, description, defaultValue }) {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <form>
          <div>
            <CheckboxWithText title={title} description={description} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export function CheckboxWithText({ title, description }) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
