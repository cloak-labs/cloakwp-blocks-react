import {
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

// import {
//   BlocksConfig,
//   SingleBlockConfigWithVariants,
//   SingleBlockConfigWithoutVariants,
// } from "../../../../cloakwp/core";

// export const configurableBlockPreset =
//   <TConfig = SingleBlockConfigWithoutVariants | SingleBlockConfigWithVariants>(
//     blockName: string,
//     blockConfig: TConfig
//   ) =>
//   (userOverrides?: Partial<TConfig>): BlocksConfig => ({
//     [blockName]: {
//       ...blockConfig,
//       ...userOverrides,
//     },
//   });
