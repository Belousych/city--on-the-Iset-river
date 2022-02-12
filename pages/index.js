import Head from "next/head";

import Layout from "@/components/Layouts/Layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Здравствуй, город на Исети</title>
      </Head>
      <div className={styles.hello}>
        <div className={styles.helloInner}>
          <div className="container">
            <div className={styles.text}>
              <h1 className={styles.h1} data-name="Здравствуй, город на Исети">
                Здравствуй, город на Исети
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
