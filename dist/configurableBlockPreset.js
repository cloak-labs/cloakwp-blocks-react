import { deepMerge } from "cloakwp/cms";
export const configurableBlockPreset = (blockName, blockConfig) => (userOverrides) => ({
    [blockName]: deepMerge(blockConfig, userOverrides),
});
