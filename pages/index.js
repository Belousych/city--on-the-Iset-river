import Head from "next/head";


import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import Song from "@/components/Home/Song/Song";
import Layout from "@/components/Layouts/Layout";
import Team from "@/components/Home/Team/Team";

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Город на Исети - Песня к 300-летию Екатеринбурга</title>
        <meta property="og:title" content="Город на Исети - Песня к 300-летию Екатеринбурга" />
        {/* <meta property="og:audio" content={SEO.mp3Free} />} */}

        <meta property="og:type" content="website" />

        <meta
          name="description"
          content="Музыкальный проект к 300-летию Екатеринбурга, направленный на создание привлекательного образа города, и укрепление межнационального согласия"
        />

        <meta
          property="og:description"
          content={
            "Музыкальный проект к 300-летию Екатеринбурга, направленный на создание привлекательного образа города, и укрепление межнационального согласия"
          }
        />

        <meta
          name="Keywords"
          content="Город на Исети 300-летие Екатеринбурга Екатеринбургу 300 лет неофициальный гимн Екатеринбурга Песня к 300-летию Екатеринбурга здравствуй город на Исети Песня про Екатеринбург Ольга Белоусова"
        ></meta>

        <meta property="og:url" content="https://iset.city" />
        <meta
          property="og:image"
          content="https://iset.city/_ipx/w_640,q_75/%2Fheader2.jpg?url=%2Fheader2.jpg&w=640&q=75"
        />
      </Head>

      <Hero />

      <About />
      <Song />

          <Team />
      
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
