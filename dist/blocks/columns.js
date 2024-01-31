import { columnsDataRouter } from "@cloakwp/block-data-routers";
import { Columns } from "../components/Columns.js";
import { configurableBlockPreset } from "../configurableBlockPreset.js";
export const columns = configurableBlockPreset("core/columns", {
    dataRouter: columnsDataRouter,
    component: Columns,
});
