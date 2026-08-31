import React from "react";
import { cx } from "@cloakui/styles";
import { type ReactGenericParentComponentWithCx } from "@cloakui/react-primitives";

export type ColumnsProps = ReactGenericParentComponentWithCx;

export const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cx("grid", className)} {...props}>
      {children}
    </div>
  ),
);

Columns.displayName = "Columns";
