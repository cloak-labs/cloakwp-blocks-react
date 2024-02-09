import { typographyDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6, } from "@cloakui/react-primitives";
export const heading = configurableBlockPreset("core/heading", {
    variantsRouter: (block) => `h${block.attrs.level}`,
    variants: {
        h1: {
            dataRouter: typographyDataRouter,
            component: TypographyH1,
        },
        h2: {
            dataRouter: typographyDataRouter,
            component: TypographyH2,
        },
        h3: {
            dataRouter: typographyDataRouter,
            component: TypographyH3,
        },
        h4: {
            dataRouter: typographyDataRouter,
            component: TypographyH4,
        },
        h5: {
            dataRouter: typographyDataRouter,
            component: TypographyH5,
        },
        h6: {
            dataRouter: typographyDataRouter,
            component: TypographyH6,
        },
    },
});
