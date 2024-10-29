import { deepMerge } from "@kaelan/deep-merge-ts";
export const configurableBlockPreset = (blockName, blockConfig) => (userOverrides) => ({
    [blockName]: deepMerge(blockConfig, userOverrides),
});
