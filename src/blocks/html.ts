import { htmlDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";
import { DynamicHtmlParser } from "@cloakui/react-primitives/DynamicHtmlParser";
import { withContainer } from "@cloakui/react-primitives/withContainer";

export const html = configurableBlockPreset("core/html", {
  dataRouter: htmlDataRouter,
  component: withContainer(DynamicHtmlParser),
});
