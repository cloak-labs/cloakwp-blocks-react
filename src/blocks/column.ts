import { columnDataRouter } from "@cloakwp/block-data-routers";
import { Column } from "../components/Column";
import { configurableBlockPreset } from "../configurableBlockPreset";
import { innerBlocksChildren } from "../nestedBlocks";

export const column = configurableBlockPreset("core/column", {
  dataRouter: columnDataRouter,
  component: Column,
  nestedBlocks: [innerBlocksChildren],
  meta: {
    container: {
      // Columns subdivide the inherited measure; they do not establish one.
      strategy: "none",
    },
  },
});
