import { CodeBlock } from "@cloakui/react-primitives";
import { configurableBlockPreset } from "../configurableBlockPreset.js";
import { codeDataRouter } from "../data-routers/codeDataRouter.js";

export const code = configurableBlockPreset("core/code", {
  dataRouter: codeDataRouter({ showLineNumbers: true }),
  component: CodeBlock,
});
