export const configurableBlockPreset = (blockName, blockConfig) => (userOverrides) => ({
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
