import ReactDOM from "react-dom";
import React, { FC } from "react";

import classes from "./Overlay.module.scss";

interface Props {
  showDrawer: () => void;
}

const Overlay: FC<Props> = ({ showDrawer }) =>
  typeof window !== "undefined" ? ReactDOM.createPortal(<div className={classes.overlay} onClick={showDrawer}></div>, document.getElementById("overlay") as HTMLElement) : null;

export default Overlay;
