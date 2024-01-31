import { columnDataRouter } from "@cloakwp/block-data-routers";
import { Column } from "../components/Column";
import { configurableBlockPreset } from "../configurableBlockPreset";

export const column = configurableBlockPreset("core/column", {
  dataRouter: columnDataRouter,
  component: Column,
});
