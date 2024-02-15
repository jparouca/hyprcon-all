import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export function SliderCard({ title, defaultValue, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="font-medium">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Slider defaultValue={[defaultValue]} max={10} step={1} />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
