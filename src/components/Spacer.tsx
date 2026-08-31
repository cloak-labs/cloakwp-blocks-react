import React from "react";
import { cx } from "@cloakui/styles";
import { type ReactStylePropsWithCx } from "@cloakui/react-primitives";

export type SpacerProps = ReactStylePropsWithCx;

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, style, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden
      className={cx("shrink-0", className)}
      style={style}
      {...props}
    />
  )
);

Spacer.displayName = "Spacer";
