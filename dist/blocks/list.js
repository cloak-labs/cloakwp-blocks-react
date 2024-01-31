import { listDataRouter } from "@cloakwp/block-data-routers";
import { TypographyList } from "@cloakui/react-primitives";
import { configurableBlockPreset } from "../configurableBlockPreset.js";
export const list = configurableBlockPreset("core/list", {
    dataRouter: listDataRouter,
    component: TypographyList,
});
