import { columnDataRouter } from "@cloakwp/block-data-routers";
import { Column } from "../components/Column.js";
import { configurableBlockPreset } from "../configurableBlockPreset.js";
export const column = configurableBlockPreset("core/column", {
    dataRouter: columnDataRouter,
    component: Column,
});
