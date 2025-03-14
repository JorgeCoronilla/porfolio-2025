'use client';
import Header from '@/features/ui/Header';
import styles from './page.module.css';
import { useState } from 'react';
import LightModeIcon from '@/features/ui/icons/LightModeIcon';
import DarkModeIcon from '@/features/ui/icons/DarkModeIcon';
import { FaXTwitter } from "react-icons/fa6";

import { FaReact, FaVuejs, FaNodeJs, FaJs, FaHtml5, FaSass, FaCss3 } from 'react-icons/fa';
import { FaUniversalAccess, FaFont } from 'react-icons/fa6';
import { RiFontSize } from 'react-icons/ri';
import { BiFontSize } from 'react-icons/bi';
import { RxFontSize } from 'react-icons/rx';
import { SlMagnifierAdd } from 'react-icons/sl';
import { SlMagnifierRemove } from 'react-icons/sl';
import { BsFiletypeSql } from 'react-icons/bs';
import { PiFileSqlFill } from 'react-icons/pi';
import { RiNextjsFill } from 'react-icons/ri';
import { BiSolidMicrophone } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { DiGithubAlt } from 'react-icons/di';
import { BiLogoGmail } from 'react-icons/bi';
import { FaLinkedinIn } from "react-icons/fa6";

import { SiTypescript, SiCss3 } from 'react-icons/si';
export default function Home() {
  const [viewHero, setViewHero] = useState(false);

  return (
    <div className={styles.page}>
      <Header viewHero={viewHero} setViewHero={setViewHero} />
      <main className={styles.main}>
        <section className={styles.section1} id="home">
          {viewHero && (
            <div className={styles.hero}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1>Hero</h1>
              <p>Hero</p>
              <br></br>
              <br></br>
              <FaLinkedinIn />
              <DiGithubAlt />
              <FaXTwitter />
              <BiLogoGmail />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

              <LightModeIcon className={styles.icon} />
              <DarkModeIcon className={styles.icon} />
              <FaReact />
              <SiTypescript />
              <SiCss3 />
              <RiNextjsFill />
              <BiSolidMicrophone />
       
              <FaVuejs />
              <FaNodeJs />
              <FaJs />
              <FaHtml5 />
              <FaCss3 />
              <FaSass />

              <FaJs />
              <FaUniversalAccess />
              <RiFontSize />
              <BiFontSize />
              <RxFontSize />

              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          )}
        </section>
        <section className={styles.section2} id="work"></section>
        <section className={styles.section1} id="projects"></section>
        <section className={styles.section2} id="about"></section>
        <section className={styles.section1} id="contact"></section>
      </main>
    </div>
  );
}
