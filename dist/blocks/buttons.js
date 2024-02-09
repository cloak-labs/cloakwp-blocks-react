import { buttonsDataRouter } from "@cloakwp/block-data-routers";
import { ButtonsContainer } from "../components/ButtonsContainer";
import { configurableBlockPreset } from "../configurableBlockPreset";
export const buttons = configurableBlockPreset("core/buttons", {
    dataRouter: buttonsDataRouter,
    component: ButtonsContainer,
});
