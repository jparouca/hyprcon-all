import { Greet } from "../../wailsjs/go/main/App";
import { Button } from "./ui/button";

export const ServerCard = () => {
  function debugHyprctl() {
    const debugCommand =
      'hyprctl notify -1 10000 "rgb(ff1ea3)" "Hello everyone!"';
    exec(debugCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(error.message);
        return;
      }
    });
  }

  function doGreeting(name) {
    Greet(name).then((result) => {
      console.log(result);
    });
  }
  return <Button onClick={doGreeting("joao")}>Server card</Button>;
};
