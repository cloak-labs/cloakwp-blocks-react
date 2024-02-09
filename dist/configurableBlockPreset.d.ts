import type { WPBlocksConfigReact, WPSingleBlockConfigWithVariantsReact, WPSingleBlockConfigWithoutVariantsReact } from "@cloakwp/react";
export declare const configurableBlockPreset: <TConfig = WPSingleBlockConfigWithoutVariantsReact | WPSingleBlockConfigWithVariantsReact>(blockName: string, blockConfig: TConfig) => (userOverrides?: Partial<TConfig>) => WPBlocksConfigReact;
