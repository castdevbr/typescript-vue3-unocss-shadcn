import { IconsOptions, presetIcons } from "@unocss/preset-icons";
import { presetWind3, PresetWind3Options } from "@unocss/preset-wind3";
import { defineConfig } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { PresetAnimationsOptions } from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

const presetIconsOptions: IconsOptions = {
  autoInstall: true,
  prefix: "i-",
  extraProperties: {
    display: "inline-block",
    "vertical-align": "middle",
    width: "2em",
    height: "2em",
  },
};
const presetAnimationsOptions: PresetAnimationsOptions = {};
const presetWind3Options: PresetWind3Options = {
  variablePrefix: "un-",
};

// const themeOptions: PresetShadcnThemeOptions = {};
// const controlOptions: PresetShadcnControlOptions = {};

export default defineConfig({
  presets: [
    presetWind3(presetWind3Options),
    presetAnimations(presetAnimationsOptions),
    presetIcons(presetIconsOptions),
    presetShadcn(/* themeOptions, controlOptions */),
    //   {
    //     color: "red",
    //     // With default setting for SolidUI, you need to set the darkSelector option.
    //     darkSelector: '[data-kb-theme="dark"]',
    //   },
    //   {
    //     // If you are using reka ui.
    //     componentLibrary: "reka",
    //   }
    // ),
  ],
  // By default, `.ts` and `.js` files are NOT extracted.
  // If you want to extract them, use the following configuration.
  // It's necessary to add the following configuration if you use shadcn-vue or shadcn-svelte.
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|[jt]s|html)($|\?)/,
        // include js/ts files
        "(components|src)/**/*.{js,ts}",
      ],
    },
  },
  theme: {
    spacing: {
      "4": "1rem",
    },
  },
});
