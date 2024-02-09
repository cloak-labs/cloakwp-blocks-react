import { columnsDataRouter } from "@cloakwp/block-data-routers";
import { Columns } from "../components/Columns";
import { configurableBlockPreset } from "../configurableBlockPreset";
export const columns = configurableBlockPreset("core/columns", {
    dataRouter: columnsDataRouter,
    component: Columns,
});
