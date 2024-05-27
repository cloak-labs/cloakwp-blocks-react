import { cx } from "@cloakui/styles";
import type { GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ReactNode } from "react";
import React from "react";

export type ColumnProps = GenericParentComponent<
  CSSProperties,
  React.ReactNode | (() => React.ReactNode)
> & {
  span: number;
};

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ span, className, style, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cx("flex flex-col", `col-span-${span}`, className)}
      style={style}
      {...props}
    >
      {typeof children == "function" ? children() : children}
    </div>
  )
);
