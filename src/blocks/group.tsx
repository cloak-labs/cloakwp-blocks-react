import { Container } from "@cloakui/react-primitives/Container";
import { groupDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";

export const group = configurableBlockPreset("core/group", {
  dataRouter: groupDataRouter,
  component: Container,
});
