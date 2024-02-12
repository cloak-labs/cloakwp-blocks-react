import type {
  WPBlocksConfigReact,
  WPSingleBlockConfigWithVariantsReact,
  WPSingleBlockConfigWithoutVariantsReact,
} from "@cloakwp/react";
import { deepMerge } from "cloakwp/cms";
import type { DeepPartial } from "ts-essentials";

export const configurableBlockPreset =
  <
    TConfig =
      | WPSingleBlockConfigWithoutVariantsReact
      | WPSingleBlockConfigWithVariantsReact
  >(
    blockName: string,
    blockConfig: TConfig
  ) =>
  (userOverrides?: DeepPartial<TConfig>): WPBlocksConfigReact => ({
    [blockName]: deepMerge(blockConfig, userOverrides),
  });
