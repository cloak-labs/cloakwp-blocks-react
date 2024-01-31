import { buttonDataRouter } from "@cloakwp/block-data-routers";
import { Button, Link } from "@cloakui/react-primitives";
import { configurableBlockPreset } from "../configurableBlockPreset.js";

export const button = configurableBlockPreset("core/button", {
  variantsRouter: (block) => (block.attrs.url ? "link" : "default"),
  variants: {
    default: {
      dataRouter: buttonDataRouter,
      component: Button,
    },
    link: {
      dataRouter: buttonDataRouter,
      component: ({ href, children, ...rest }) => (
        <Button asChild {...rest}>
          <Link href={href}>{children}</Link>
        </Button>
      ),
    },
  },
});
