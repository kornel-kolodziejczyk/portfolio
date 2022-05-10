import { FC, ReactNode } from "react";

import classes from "./Container.module.scss";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => <div className={classes.container}>{children}</div>;

export default Container;
