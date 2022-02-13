import { ArrowDownIcon } from "@heroicons/react/solid";
import cn from "classnames";
import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/Layouts/Layout";
import Tabs from "@/components/Tabs/Tabs";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Здравствуй, город на Исети</title>
      </Head>

      <div className={cn("hero", "min-h-screen", styles.bg)}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Здравствуй, <br /> город на Исети!
            </h1>
            <p className="mb-5">Песня к 300-летию Екатеринбурга</p>
            <button className="btn btn-primary">
              <ArrowDownIcon className=" h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <Image
            src="/olly.jpg"
            width={600}
            height={600}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <Tabs />
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
