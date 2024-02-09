import { TypographyBlockquote } from "@cloakui/react-primitives";
import { blockquoteDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";
export const quote = configurableBlockPreset("core/quote", {
    dataRouter: blockquoteDataRouter,
    component: TypographyBlockquote,
});
