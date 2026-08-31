import { buttonsDataRouter } from "@cloakwp/block-data-routers";
import { ButtonsContainer } from "../components/ButtonsContainer";
import { configurableBlockPreset } from "../configurableBlockPreset";
import { innerBlocksChildren } from "../nestedBlocks";
export const buttons = configurableBlockPreset("core/buttons", {
    dataRouter: buttonsDataRouter,
    component: ButtonsContainer,
    nestedBlocks: [innerBlocksChildren],
});
