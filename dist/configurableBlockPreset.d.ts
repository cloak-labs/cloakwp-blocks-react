import type { WPBlocksConfigReact, WPSingleBlockConfigWithVariantsReact, WPSingleBlockConfigWithoutVariantsReact } from "@cloakwp/react";
import type { DeepPartial } from "ts-essentials";
export declare const configurableBlockPreset: <TConfig = WPSingleBlockConfigWithoutVariantsReact | WPSingleBlockConfigWithVariantsReact>(blockName: string, blockConfig: TConfig) => (userOverrides?: DeepPartial<TConfig>) => WPBlocksConfigReact;
