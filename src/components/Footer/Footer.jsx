import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:braycefepa@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Location : Yaounde</p>
          </div>
          <ul className={css.menu}>
            <li>Contacts : +237 693267462 / +237 676994001</li>
            <li>Email : braycefepa@gmail.com</li>
            <li>Reference : Arielle Kitio Tsamo</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
