import React from "react";
import { cx } from "@cloakui/styles";
import { type ReactGenericParentComponentWithCx } from "@cloakui/react-primitives";

export type ColumnsProps = ReactGenericParentComponentWithCx;

export const Columns: React.FC<ColumnsProps> = ({
  className,
  children,
  ...props
}) => (
  <div className={cx("grid", className)} {...props}>
    {children}
  </div>
);
