import Head from "next/head";
import Image from "next/image";

import About from "@/components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import Song from "@/components/Home/Song/Song";
import Layout from "@/components/Layouts/Layout";

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

      <div className="container py-10" id="team">
        <div className="text-center mb-5">
          <h2 className=" text-5xl font-bold mx-auto">Наша команда</h2>
        </div>

        <div className="flex flex-wrap justify-center py-10  gap-10 text-center">
          <div className="flex flex-col w-56">
            <div className="avatar mx-auto mb-2">
              <div className="mask mask-hexagon">
                <Image
                  src="/team_1.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-top"
                  alt="Ольга Белоусова"
                />
              </div>
            </div>
            <div className="prose">
              <p>
                <strong>Ольга Белоусова</strong> <br /> <i>слова</i>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-56">
            <div className="avatar mx-auto mb-2">
              <div className="mask mask-hexagon">
                <Image
                  src="/team_2.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-top"
                />
              </div>
            </div>
            <div className="prose">
              <p>
                <strong>Катя Ред</strong> <br /> <i>исполнение на английском языке</i>
              </p>
            </div>
          </div>

          <div className="flex flex-col w-56">
            <div className="avatar mx-auto mb-2">
              <div className="mask mask-hexagon">
                <Image
                  src="/team_3.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-top"
                />
              </div>
            </div>
            <div className="prose">
              <p>
                <strong>Мария Плотникова</strong> <br /> <i>перевод на французский язык</i>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-56">
            <div className="avatar mx-auto mb-2">
              <div className="mask mask-hexagon">
                <Image
                  src="/team_4.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-top"
                />
              </div>
            </div>
            <div className="prose">
              <p>
                <strong>Михаил Мостов</strong> <br />{" "}
                <i>исполнение на русском и французском языке</i>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-56">
            <div className="avatar mx-auto mb-2">
              <div className="mask mask-hexagon">
                <Image
                  src="/team_5.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-top"
                />
              </div>
            </div>
            <div className="prose">
              <p>
                <strong>Иван Осенков</strong> <br />{" "}
                <i>перевод на английский язык, исполнение на английском языке</i>
              </p>
            </div>
          </div>

          <div className="flex flex-col w-56">
            <div className="avatar mx-auto mb-2">
              <div className="mask mask-hexagon">
                <Image
                  src="/team_6.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-top"
                />
              </div>
            </div>
            <div className="prose">
              <p>
                <strong>Виктор Солдатов</strong> <br /> <i>музыка</i>
              </p>
            </div>
          </div>

          <div className="flex flex-col w-56">
            <div className="avatar mx-auto mb-2">
              <div className="mask mask-hexagon">
                <Image
                  src="/team_7.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-top"
                />
              </div>
            </div>
            <div className="prose">
              <p>
                <strong>Ли Илунь</strong> <br />{" "}
                <i>перевод на китайский язык, исполнение на китайском языке</i>
              </p>
            </div>
          </div>
        </div>

        <Image src="/line.svg" width={960} height={100} className="mx-auto" />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
