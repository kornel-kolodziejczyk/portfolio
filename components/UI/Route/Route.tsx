import Link from "next/link";
import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { useRouter } from "next/dist/client/router";

import Container from "../Container/Container";
import classes from "./Route.module.scss";

const Route = () => {
  const router = useRouter();
  const pathname = router.asPath.split("/");

  return (
    <div className={classes.route}>
      <Container>
        <h1>{pathname[pathname.length - 1]}</h1>
        <nav>
          <ul>
            {pathname.map((element, index) =>
              index === 0 ? (
                <li key={index}>
                  <Link href="/">Home</Link>
                  <MdOutlineChevronRight />
                </li>
              ) : index === pathname.length - 1 ? (
                <li key={index}>{element}</li>
              ) : (
                <li key={index}>
                  <Link href={`/${element}`}>{element}</Link>
                  <MdOutlineChevronRight />
                </li>
              )
            )}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Route;
