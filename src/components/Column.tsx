import React from "react";
import { cx } from "@cloakui/styles";
import { type ReactGenericParentComponentWithCx } from "@cloakui/react-primitives";

export type ColumnProps = ReactGenericParentComponentWithCx<
  React.ReactNode | (() => React.ReactNode)
> & {
  span: number;
  totalSiblings: number;
};

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ span, totalSiblings, className, style, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cx(
        "flex flex-col col-span-full",
        totalSiblings == 2 && `md:col-span-${span}`,
        totalSiblings >= 3 && `sm:col-span-${span}`,
        className
      )}
      style={style}
      {...props}
    >
      {typeof children == "function" ? children() : children}
    </div>
  )
);

Column.displayName = "Column";
