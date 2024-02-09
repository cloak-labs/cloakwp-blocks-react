import type {
  WPBlocksConfigReact,
  WPSingleBlockConfigWithVariantsReact,
  WPSingleBlockConfigWithoutVariantsReact,
} from "@cloakwp/react";

export const configurableBlockPreset =
  <
    TConfig =
      | WPSingleBlockConfigWithoutVariantsReact
      | WPSingleBlockConfigWithVariantsReact
  >(
    blockName: string,
    blockConfig: TConfig
  ) =>
  (userOverrides?: Partial<TConfig>): WPBlocksConfigReact => ({
    [blockName]: {
      ...blockConfig,
      ...userOverrides,
    },
  });
