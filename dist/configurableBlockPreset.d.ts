import type { DeepPartial } from "ts-essentials";
export declare const configurableBlockPreset: <TConfig = any>(blockName: string, blockConfig: TConfig) => (userOverrides?: DeepPartial<TConfig>) => BlocksConfig<TComponent, TBlockData>;
