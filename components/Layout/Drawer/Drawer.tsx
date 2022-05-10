import Link from "next/link";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { FC } from "react";
import { MdClose } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import classes from "./Drawer.module.scss";

interface Props {
  display: boolean;
  showDrawer: () => void;
}

const Drawer: FC<Props> = ({ display, showDrawer }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const logoutHandler = () => signOut();

  return typeof window !== "undefined"
    ? ReactDOM.createPortal(
        <CSSTransition
          in={display}
          timeout={200}
          classNames={{ enter: classes.slideEnter, enterActive: classes.slideEnterActive, exit: classes.slideExit, exitActive: classes.slideExitActive }}
          mountOnEnter
          unmountOnExit
        >
          <nav className={classes.drawer}>
            <button onClick={showDrawer}>
              <MdClose size={20} />
            </button>

            <ul onClick={showDrawer}>
              <li>
                <Link href="/">
                  <a className={router.pathname == "/" ? classes.active : ""}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className={router.pathname == "/projects" ? classes.active : ""}>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={router.pathname == "/contact" ? classes.active : ""}>Contact</a>
                </Link>
              </li>

              {session ? (
                <>
                  <li>
                    <Link href="/inbox">Inbox</Link>
                  </li>
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>

                  <li onClick={logoutHandler}>
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
        </CSSTransition>,
        document.getElementById("drawer") as HTMLElement
      )
    : null;
};

export default Drawer;
