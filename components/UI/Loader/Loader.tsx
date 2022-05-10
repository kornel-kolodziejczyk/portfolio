import Spinner from "react-spinners/SyncLoader";
import { FC } from "react";

import classes from "./Loader.module.scss";

const Loader: FC = () => (
  <div className={classes.loader}>
    <Spinner loading={true} />
  </div>
);

export default Loader;
