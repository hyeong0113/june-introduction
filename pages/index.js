import Head from 'next/head';
import Image from 'next/image';
import Topbar from '../components/topBar';
import styles from '../styles/Home.module.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const Subox = ({ num }) => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div
        className="adc"
        styles = {{
          marginBottom: 100
        }}
      >
        <h1>Box {num} </h1>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to June's Work!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Topbar />
        <Container maxWidth="sm">
          <h1>
            Hi, I'm June
          </h1>
          <div className>
            <Subox num={1} />
            <Subox num={2} />
            <Subox num={3} />
          </div>
        </Container>

      </main>

      {/* <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}
