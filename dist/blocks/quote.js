import { TypographyBlockquote } from "@cloakui/react-primitives/TypographyBlockquote";
import { blockquoteDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";
import { innerBlocksChildren } from "../nestedBlocks";
export const quote = configurableBlockPreset("core/quote", {
    dataRouter: blockquoteDataRouter,
    component: TypographyBlockquote,
    nestedBlocks: [innerBlocksChildren],
});
