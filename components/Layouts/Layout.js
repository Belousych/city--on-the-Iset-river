import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect } from "react";

import Navbar from "@/components/Navbar/Navbar";

import anchorScroller from "@/utils/anchorScroller";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
  useEffect(() => {
    const scroller = (e) => {
      const href = e.target?.dataset?.href;
      if (href) {
        e.preventDefault();
        anchorScroller(href, 0.5, 65);
        return false;
      }
    };
    document.addEventListener("click", scroller);

    return () => {
      document.removeEventListener("click", scroller);
    };
  }, []);
  return (
    <div className={styles.container} data-theme="cupcake">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />

        <div className="">{children}</div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
