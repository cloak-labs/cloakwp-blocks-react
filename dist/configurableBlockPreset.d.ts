import { BlocksConfig, SingleBlockConfigWithVariants, SingleBlockConfigWithoutVariants } from "../../../../cloakwp/core";
export declare const configurableBlockPreset: <TConfig = SingleBlockConfigWithoutVariants | SingleBlockConfigWithVariants>(blockName: string, blockConfig: TConfig) => (userOverrides?: Partial<TConfig>) => BlocksConfig;
