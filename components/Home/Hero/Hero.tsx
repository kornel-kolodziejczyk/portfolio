import Image from "next/image";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "../../UI/Container/Container";
import classes from "./Hero.module.scss";

const Hero: FC = () => (
  <div className={classes.hero}>
    <Container>
      <div className={classes.content}>
        <div className={classes.author}>
          <h1>I am Kornel</h1>
          <p>FULLSTACK DEVELOPER</p>
        </div>
        <div className={classes.about}>
          <p>A passionate Full Stack Web Developer having an experience of building Web applications with React, NextJS and Node.</p>
          <div className={classes.socials}>
            <a target="_blank" href="https://www.linkedin.com/in/kornel-ko%C5%82odziejczyk-166282212" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/kornel-kolodziejczyk" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.image}>
          <Image src="/images/site/hero.jpg" alt="An image showing Kornel" width={200} height={200} />
        </div>
      </div>
    </Container>
  </div>
);

export default Hero;
