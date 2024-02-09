import { listItemDataRouter } from "@cloakwp/block-data-routers";
import { TypographyListItem } from "@cloakui/react-primitives";
import { configurableBlockPreset } from "../configurableBlockPreset";
export const listItem = configurableBlockPreset("core/list-item", {
    dataRouter: listItemDataRouter,
    component: TypographyListItem,
});
