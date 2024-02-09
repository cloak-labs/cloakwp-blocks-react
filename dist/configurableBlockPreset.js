export const configurableBlockPreset = (blockName, blockConfig) => (userOverrides) => ({
    [blockName]: {
        ...blockConfig,
        ...userOverrides,
    },
});
