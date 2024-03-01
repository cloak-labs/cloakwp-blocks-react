import { cx } from "@cloakui/styles";
import type { GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ReactNode, FC } from "react";
import React from "react";

export type ColumnProps = GenericParentComponent<CSSProperties, ReactNode> & {
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
      {children}
    </div>
  )
);
