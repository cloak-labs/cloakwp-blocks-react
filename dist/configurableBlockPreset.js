"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurableBlockPreset = void 0;
const configurableBlockPreset = (blockName, blockConfig) => (userOverrides) => ({
    [blockName]: {
        ...blockConfig,
        ...userOverrides,
    },
});
exports.configurableBlockPreset = configurableBlockPreset;
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
