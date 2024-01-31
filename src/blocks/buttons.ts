import { buttonsDataRouter } from "@cloakwp/block-data-routers";
import { ButtonsContainer } from "../components/ButtonsContainer.js";
import { configurableBlockPreset } from "../configurableBlockPreset.js";

export const buttons = configurableBlockPreset("core/buttons", {
  dataRouter: buttonsDataRouter,
  component: ButtonsContainer,
});
