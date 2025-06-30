import type { WPBlocksConfigReact, WPSingleBlockConfigWithVariantsReact, WPSingleBlockConfigWithoutVariantsReact } from "@cloakwp/react";
import type { DeepPartial } from "ts-essentials";
export declare const configurableBlockPreset: <TConfig extends Record<string, unknown> = WPSingleBlockConfigWithoutVariantsReact | WPSingleBlockConfigWithVariantsReact>(blockName: string, blockConfig: TConfig) => (userOverrides?: DeepPartial<TConfig & {
    meta?: Record<string, any>;
}>) => WPBlocksConfigReact;
