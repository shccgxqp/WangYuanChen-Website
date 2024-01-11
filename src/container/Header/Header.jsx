import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

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
      style={{ backgroundImage: `url(${images.info})`, backgroundSize: 'cover' }}
    >
      <div className="app__header-badge">
        <div className="cmp app__flex">
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Wang Yuan Chen</h1>
            <p className="p-text">探索無限的可能，分想無限的樂趣</p>
          </div>

        </div>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');

