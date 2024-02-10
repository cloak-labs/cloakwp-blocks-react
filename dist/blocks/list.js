import { listDataRouter } from "@cloakwp/block-data-routers";
import { TypographyList } from "@cloakui/react-primitives/TypographyList";
import { configurableBlockPreset } from "../configurableBlockPreset";
export const list = configurableBlockPreset("core/list", {
    dataRouter: listDataRouter,
    component: TypographyList,
});
