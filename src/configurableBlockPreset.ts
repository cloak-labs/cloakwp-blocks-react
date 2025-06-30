import type {
  WPBlocksConfigReact,
  WPSingleBlockConfigWithVariantsReact,
  WPSingleBlockConfigWithoutVariantsReact,
} from "@cloakwp/react";
import { deepMerge } from "@kaelan/deep-merge-ts";
import type { DeepPartial } from "ts-essentials";

export const configurableBlockPreset =
  <
    TConfig extends Record<string, unknown> =
      | WPSingleBlockConfigWithoutVariantsReact
      | WPSingleBlockConfigWithVariantsReact
  >(
    blockName: string,
    blockConfig: TConfig
  ) =>
  (
    userOverrides?: DeepPartial<TConfig & { meta?: Record<string, any> }>
  ): WPBlocksConfigReact => ({
    [blockName]: deepMerge(blockConfig, userOverrides),
  });
