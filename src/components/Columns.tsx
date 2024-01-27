import { cx } from "@cloakui/styles";
import type { GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ReactNode, FC } from "react";

export type ColumnsProps = GenericParentComponent<CSSProperties, ReactNode>;

export const Columns: FC<ColumnsProps> = ({
  className,
  style,
  children,
  ...props
}) => (
  <div className={cx("grid", className)} style={style} {...props}>
    {children}
  </div>
);
