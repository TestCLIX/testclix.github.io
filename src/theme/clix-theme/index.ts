import type { StarlightPlugin } from "@astrojs/starlight/types";

export default function starlightClixThemePlugin(): StarlightPlugin {
  return {
    name: "clix-theme",
    hooks: {
      "config:setup"({ config, updateConfig }) {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true
            ? {}
            : config.expressiveCode;

        updateConfig({
          components: {
            ThemeSelect: "./src/theme/clix-theme/components/ThemeSelect.astro",
            LanguageSelect:
              "./src/theme/clix-theme/components/LanguageSelect.astro",
            MarkdownContent:
              "./src/theme/clix-theme/components/MarkdownContent.astro",
          },
          customCss: [
            ...(config.customCss ?? []),
            "./src/theme/clix-theme/styles/layers.css",
            "./src/theme/clix-theme/styles/theme.css",
            "./src/theme/clix-theme/styles/base.css",
            ...(config.markdown?.headingLinks === false
              ? []
              : ["./src/theme/clix-theme/styles/anchors.css"]),
          ],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  themes: ["vitesse-dark", "vitesse-light"],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    borderColor: "var(--sl-clix-ui-border-color)",
                    borderRadius: "0.5rem",
                    ...userExpressiveCodeConfig.styleOverrides,
                    frames: {
                      editorActiveTabIndicatorTopColor: "unset",
                      editorActiveTabIndicatorBottomColor:
                        "var(--sl-color-gray-3)",
                      editorTabBarBorderBottomColor:
                        "var(--sl-clix-ui-border-color)",
                      frameBoxShadowCssValue: "unset",
                      ...userExpressiveCodeConfig.styleOverrides?.frames,
                    },
                    textMarkers: {
                      backgroundOpacity: "40%",
                      markBackground: "var(--sl-clix-ec-marker-bg-color)",
                      markBorderColor: "var(--sl-clix-ec-marker-border-color)",
                      ...userExpressiveCodeConfig.styleOverrides?.textMarkers,
                    },
                  },
                },
        });
      },
    },
  };
}
