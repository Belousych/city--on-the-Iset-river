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
        <title>Здравствуй, город на Исети</title>
      </Head>

      <div className={cn("hero", "min-h-screen")}>
        <div className={styles.bg}>
          <Image layout="fill" src="/header2.jpg" priority />
        </div>
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
          <div className="flex-shrink-0">
            <Image
              src="/olly.jpg"
              width={600}
              height={600}
              className="max-w-sm rounded-lg shadow-2xl"
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

      <div className="container">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
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
            <h2 className="">Город на Исети</h2>
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
    </Layout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
