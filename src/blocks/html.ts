import { Html } from "@cloakui/react-primitives/Html";
import { htmlDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";

export const html = configurableBlockPreset("core/html", {
  dataRouter: htmlDataRouter,
  component: Html,
});
