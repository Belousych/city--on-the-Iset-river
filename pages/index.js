import { ArrowDownIcon } from "@heroicons/react/solid";
import cn from "classnames";
import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/Layouts/Layout";

import styles from "../styles/Home.module.css";

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
          content="Город на Исети 300-летие Екатеринбурга Екатеринбургу 300 лет неофициальный гимн Екатеринбурга Песня к 300-летию Екатеринбурга здравствуй город на Исети Песня про Екатеринбург"
        ></meta>

        <meta property="og:url" content="https://city-on-the-iset-river.netlify.app" />
        <meta
          property="og:image"
          content="https://city-on-the-iset-river.netlify.app/_ipx/w_640,q_75/%2Fheader2.jpg?url=%2Fheader2.jpg&w=640&q=75"
        />
      </Head>

      <div className={cn("hero", "min-h-screen")}>
        <div className={styles.bg}>
          <Image layout="fill" src="/header2.jpg" priority alt="Екатеринбург" />
        </div>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Здравствуй, <br /> город на Исети!
            </h1>
            <p className="mb-5">Песня к 300-летию Екатеринбурга</p>
            <a className="btn btn-primary" href="#about">
              <ArrowDownIcon className=" h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200" id="about">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="flex-shrink-0">
            <Image
              src="/olly.jpg"
              width={600}
              height={600}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Автор Песни - Ольга Белоусова"
            />
          </div>
          <div className="prose">
            <h2 className="mb-5 text-5xl font-bold">Меня зовут Ольга Белоусова.</h2>
            <p className="mb-5">
              Я - одна из тех жителей Екатеринбурга, которые безумно влюблены в свой город. И
              однажды решила признаться ему в этом. Так появилась песня «Город на Исети». Музыку к
              ней написал екатеринбургский музыкант Виктор Солдатов, а исполнил её московский актёр
              и певец Михаил Мостов. К 300-летию Екатеринбурга возникла идея перевести песню на
              разные языки, чтобы об одном из самых красивых городов России могли спеть даже те, кто
              не знает русского языка. Идея вызвала отклик. Уже готовы английская, французская и
              китайская версии, на очереди - ещё несколько. Наша команда растёт - в ней появляются
              новые переводчики, исполнители, танцоры. Будем рады, если к ней присоединитесь и вы.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      <div className="py-10" id="song">
        <div className="text-center mb-5">
          <h2 className=" text-5xl font-bold mx-auto">Город на Исети</h2>
        </div>
        <div className="flex flex-wrap relative">
          <div className="grow min-w-fit md:w-3/5">
            <div className="card-body sticky top-10">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg h-auto"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zKYeqLKLXVU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex-auto md:w-2/5">
            <div className="prose card-body">
              <p>
                Высотки смотрят вверх, <br />
                Меряясь друг с другом этажами, <br />
                И яблоневый снег <br />
                Кружится над гранитной мостовой. <br />
                И непонятно мне, <br />
                Как же не заметили мы сами, <br />
                Как за двадцать лет
                <br />
                Выросли с тобой!
              </p>

              <p>
                <i>Припев: </i>
              </p>
              <p>
                Здравствуй, город на Исети! <br />
                Я в твои попался сети, <br />
                И в дороге снятся знакомые огни.
                <br />
                Этот город на Исети -<br />
                Здесь посчастливилось мне встретить
                <br />
                Самоцветные глаза твои!
              </p>

              <p>
                Так много их, столиц, <br />
                Которые тебя ещё не знают, <br />
                И столько городов, <br />
                Что, может быть, давно уже не ждут. <br />
                Но среди тысяч лиц <br />
                Одно в улыбке заставляет таять, <br />
                И к набережной вновь <br />
                На встречу я иду.
              </p>

              <p>
                <i>Припев. </i>
              </p>

              <p>
                Не потому ли тут <br />
                Мечтать и танцевать, как в детстве, просто, <br />
                Что рядом есть глаза – <br />
                Глаза твои родные, а вокруг <br />
                Все те, кто повзрослел, <br />
                Те, кто вырос вместе со Свердловском, <br />И те, с кем подрастёт Екатеринбург!
              </p>

              <p>
                <i>Припев.</i>
              </p>
            </div>
          </div>
        </div>
        {/* <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg h-auto"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zKYeqLKLXVU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="">
          <div className="py-6 prose">
            <p>
              Высотки смотрят вверх, <br />
              Меряясь друг с другом этажами, <br />
              И яблоневый снег <br />
              Кружится над гранитной мостовой. <br />
              И непонятно мне, <br />
              Как же не заметили мы сами, <br />
              Как за двадцать лет
              <br />
              Выросли с тобой!
            </p>

            <p>
              <i>Припев: </i>
            </p>
            <p>
              Здравствуй, город на Исети! <br />
              Я в твои попался сети, <br />
              И в дороге снятся знакомые огни.
              <br />
              Этот город на Исети -<br />
              Здесь посчастливилось мне встретить
              <br />
              Самоцветные глаза твои!
            </p>

            <p>
              Так много их, столиц, <br />
              Которые тебя ещё не знают, <br />
              И столько городов, <br />
              Что, может быть, давно уже не ждут. <br />
              Но среди тысяч лиц <br />
              Одно в улыбке заставляет таять, <br />
              И к набережной вновь <br />
              На встречу я иду.
            </p>

            <p>
              <i>Припев. </i>
            </p>

            <p>
              Не потому ли тут <br />
              Мечтать и танцевать, как в детстве, просто, <br />
              Что рядом есть глаза – <br />
              Глаза твои родные, а вокруг <br />
              Все те, кто повзрослел, <br />
              Те, кто вырос вместе со Свердловском, <br />И те, с кем подрастёт Екатеринбург!
            </p>

            <p>
              <i>Припев.</i>
            </p>
          </div>
        </div> */}
      </div>

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
