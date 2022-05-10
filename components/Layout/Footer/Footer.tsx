import { FC } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import Container from "../../UI/Container/Container";
import classes from "./Footer.module.scss";

const Footer: FC = () => (
  <footer className={classes.footer}>
    <Container>
      <div className={classes.content}>
        <div className={classes.copyright}>
          Copyright © 2022 <span>Kornel Kołodziejczyk</span>
        </div>
        <div className={classes.contact}>
          <div className={classes.email}>
            <FaEnvelope></FaEnvelope>
            <a href="mailto:kolodziejczyk.contact@gmail.com">kolodziejczyk.contact@gmail.com</a>
          </div>
          <div className={classes.phone}>
            <FaPhone></FaPhone>
            <a href="tel:511049450">511 049 450</a>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
