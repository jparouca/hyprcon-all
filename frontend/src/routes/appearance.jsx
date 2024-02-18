import { ScrollArea } from "@/components/ScrollArea";
import { BorderCard } from "../components/BorderCard";
import { ShadowCard } from "../components/ShadowCard";
import { DimCard } from "../components/DimCard";
import { OpacityCard } from "../components/OpacityCard";
import { Button } from "../components/ui/button";
import { ServerCard } from "../components/ServerCard";

export const Appearance = () => {
  return (
    <>
      <ScrollArea className="flex flex-col p-5">
        <h1 className="text-black text-xl">Appearance</h1>
        <ServerCard />
        <div className="mb-4">
          <BorderCard />
        </div>
        <div className="mb-4">
          <ShadowCard />
        </div>
        <div className="mb-4">
          <DimCard />
        </div>
        <div className="mb-4">
          <OpacityCard />
        </div>
        <div className="mb-4">
          <OpacityCard />
        </div>
      </ScrollArea>
    </>
  );
};

export const APPEARANCE = [
  {
    section: "decoration",
    name: "rounding",
    description: "rounded corners’ radius (in layout px)",
    type: "int",
    default: "0",
    input: "textbox",
  },
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
  {
    section: "decoration",
    name: "screen_shader",
    description:
      "a path to a custom shader to be applied at the end of rendering. See examples/screenShader.frag for an example.",
    type: "str",
    default: "[[Empty]]",
    input: "textbox",
  },
  {
    section: "decoration:blur",
    name: "enabled",
    description: "enable kawase window background blur",
    type: "bool",
    default: "true",
    input: "checkbox",
  },
  {
    section: "decoration:blur",
    name: "size",
    description: "blur size (distance)",
    type: "int",
    default: "8",
    input: "textbox",
  },
  {
    section: "decoration:blur",
    name: "passes",
    description: "the amount of passes to perform",
    type: "int",
    default: "1",
    input: "textbox",
  },
  {
    section: "decoration:blur",
    name: "ignore_opacity",
    description: "make the blur layer ignore the opacity of the window",
    type: "bool",
    default: "false",
    input: "checkbox",
  },
  {
    section: "decoration:blur",
    name: "new_optimizations",
    description:
      "whether to enable further optimizations to the blur. Recommended to leave on, as it will massively improve performance.",
    type: "bool",
    default: "true",
    input: "checkbox",
  },
  {
    section: "decoration:blur",
    name: "xray",
    description:
      "if enabled, floating windows will ignore tiled windows in their blur. Only available if blur_new_optimizations is true. Will reduce overhead on floating blur significantly.",
    type: "bool",
    default: "false",
    input: "checkbox",
  },
  {
    section: "decoration:blur",
    name: "noise",
    description: "how much noise to apply. [0.0 - 1.0]",
    type: "float",
    default: "0.0117",
    input: "slider",
  },
  {
    section: "decoration:blur",
    name: "contrast",
    description: "contrast modulation for blur. [0.0 - 2.0]",
    type: "float",
    default: "0.8916",
    input: "slider",
  },
  {
    section: "decoration:blur",
    name: "brightness",
    description: "brightness modulation for blur. [0.0 - 2.0]",
    type: "float",
    default: "0.8172",
    input: "slider",
  },
  {
    section: "decoration:blur",
    name: "vibrancy",
    description: "Increase saturation of blurred colors. [0.0 - 1.0]",
    type: "float",
    default: "0.1696",
    input: "slider",
  },
  {
    section: "decoration:blur",
    name: "vibrancy_darkness",
    description:
      "How strong the effect of vibrancy is on dark areas. [0.0 - 1.0]",
    type: "float",
    default: "0.0",
    input: "slider",
  },
  {
    section: "decoration:blur",
    name: "special",
    description:
      "whether to blur behind the special workspace (note: expensive)",
    type: "bool",
    default: "false",
    input: "checkbox",
  },
  {
    section: "decoration:blur",
    name: "popups",
    description: "whether to blur popups (e.g. right-click menus)",
    type: "bool",
    default: "false",
    input: "checkbox",
  },
  {
    section: "decoration:blur",
    name: "popups_ignorealpha",
    description:
      "works like ignorealpha in layer rules. If pixel opacity is below set value, will not blur. [0.0 - 1.0]",
    type: "float",
    default: "[[Empty]]",
    input: "slider",
  },
];
