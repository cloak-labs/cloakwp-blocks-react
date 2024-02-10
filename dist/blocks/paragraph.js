import { TypographyP } from "@cloakui/react-primitives/TypographyP";
import { typographyDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";
export const paragraph = configurableBlockPreset("core/paragraph", {
    dataRouter: typographyDataRouter,
    component: TypographyP,
});
