import { FC, useState } from "react";

import Container from "../../UI/Container/Container";
import Drawer from "../Drawer/Drawer";
import Logo from "../Header/Logo/Logo";
import Navigation from "../Header/Navigation/Navigation";
import Overlay from "../../UI/Overlay/Overlay";
import classes from "./Header.module.scss";

const Header: FC = () => {
  const [drawer, setDrawer] = useState(false);

  const showDrawerHandler = () => setDrawer((state) => !state);

  return (
    <Container>
      <header className={classes.header}>
        <Logo />
        <Navigation showDrawer={showDrawerHandler} />
        <Drawer display={drawer} showDrawer={showDrawerHandler} />
        {drawer && <Overlay showDrawer={showDrawerHandler} />}
      </header>
    </Container>
  );
};

export default Header;
