import LANDING_QUERY from "@/apollo/queries/song-landing/landing";
import dynamic from "next/dynamic";
import Head from "next/head";

// import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
// import Song from "@/components/Home/Song/Song";
// import Team from "@/components/Home/Team/Team";
import Layout from "@/components/Layouts/Layout";
import Query from "@/components/query";

import { addApolloState, initializeApollo } from "@/utils/apollo";

const Song = dynamic(() => import("@/components/Home/Song/Song"));
const Team = dynamic(() => import("@/components/Home/Team/Team"));
const About = dynamic(() => import("@/components/Home/About/About"));

export default function Home(props) {
  console.log("PROPS", props);
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Город на Исети - Песня к 300-летию Екатеринбурга</title>
        <meta property="og:title" content="Город на Исети - Песня к 300-летию Екатеринбурга" />
        <meta property="og:audio" content="https://iset.city/Ekaterinburg.mp3" />
        <meta property="og:locale" content="ru_RU" />

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
          content="Город на Исети, 300-летие Екатеринбурга, Екатеринбургу 300 лет, неофициальный гимн Екатеринбурга, Песня к 300-летию Екатеринбурга, здравствуй город на Исети, Песня про Екатеринбург, Ольга Белоусова, песня город на исети"
        ></meta>

        <meta property="og:url" content="https://iset.city" />
        <meta
          property="og:image"
          content="https://iset.city/_ipx/w_640,q_75/%2Fheader2.jpg?url=%2Fheader2.jpg&w=640&q=75"
        />
      </Head>
      <Query query={LANDING_QUERY}>
        {({ data }) => {
          return (
            <>
              <Hero
                title={data?.isetLanding?.data?.attributes?.title}
                subtitle={data?.isetLanding?.data?.attributes?.subtitle}
                background={data?.isetLanding?.data?.attributes?.background}
              />

              <About
                aboutTitle={data?.isetLanding?.data?.attributes?.aboutTitle}
                aboutText={data?.isetLanding?.data?.attributes?.aboutText}
                avatar={data?.isetLanding?.data?.attributes?.avatar}
                aboutPS={data?.isetLanding?.data?.attributes?.aboutPS}
              />
              <Song items={data?.songs?.data} />

              <Team />
            </>
          );
        }}
      </Query>
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: LANDING_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}
