import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
    </motion.div>

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
      style={{
        backgroundImage: `url(${images.info})`,
        backgroundSize: "cover",
      }}
    >
      <div className="app__header-badge">
        <div className="cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Wang Yuan Chen</h1>
            <p className="p-text">熱愛探索無限可能性的軟體工程師</p>
            <p className="p-text">
              我的熱情在於將創意轉化為實用的產品和解決方案
            </p>
            <p className="p-text">
              歡迎來到我的個人網站，一起探索無盡的技術世界吧！
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
