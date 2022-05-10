import Link from "next/link";
import { FC } from "react";

import classes from "./Logo.module.scss";

const Logo: FC = () => (
  <Link href="/">
    <a>
      <div className={classes.logo}>PORTFOLIO</div>
    </a>
  </Link>
);

export default Logo;
