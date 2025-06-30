import { listDataRouter } from "@cloakwp/block-data-routers";
import { TypographyList } from "@cloakui/react-primitives/TypographyList";
import { configurableBlockPreset } from "../configurableBlockPreset";
import { withStringToHtml } from "@cloakui/react-primitives/withStringToHtml";
export const list = configurableBlockPreset("core/list", {
    dataRouter: listDataRouter,
    component: withStringToHtml(TypographyList),
});
