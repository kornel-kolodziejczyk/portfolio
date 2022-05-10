import Link from "next/link";
import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut, useSession } from "next-auth/react";

import classes from "./Navigation.module.scss";

interface Props {
  showDrawer: () => void;
}

const Navigation: FC<Props> = ({ showDrawer }) => {
  const { data: session } = useSession();

  const logoutHandler = () => signOut();

  return (
    <nav className={classes.navigation}>
      <button onClick={showDrawer}>
        <GiHamburgerMenu />
      </button>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>

        {session ? (
          <>
            <li>
              <Link href="/inbox">Inbox</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <span onClick={logoutHandler}>Logout</span>
            </li>
          </>
        ) : (
          <li>
            <Link href="/auth">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
