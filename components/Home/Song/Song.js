// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

export default function Song() {
  return (
    <div className="py-10" id="song">
      {/* <Splide options={{
        type: 'fade',
        rewind: true
      }}>
        <SplideSlide> */}
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
      {/* </SplideSlide>
        <SplideSlide>
          <div className="text-center mb-5">
            <h2 className=" text-5xl font-bold mx-auto">Ma chère ville sur l’Isset</h2>
          </div>
          <div className="flex flex-wrap relative">
            <div className="grow min-w-fit md:w-3/5">
              <div className="card-body sticky top-10">
                <iframe
                  className="w-full aspect-video rounded-lg shadow-lg h-auto"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/XMh36eZf4HA"
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
                  Les bâtiments vitrés <br />
                  Qui rivalisent de quantité d’étages,
                  <br />
                  La neige sur le pavé
                  <br />
                  Qui tombe des pommiers déjà fleuris.
                  <br />
                  J’aurais dû remarquer
                  <br />
                  Qu’on a avancé tellement en âge,
                  <br />
                  Au bout de ces années
                  <br />
                  On a tellement grandi.
                </p>

                <p>
                  <i>Refrain: </i>
                </p>
                <p>
                  Ma chère ville sur l’Isset Qui pour moi est une vedette, Loin de toi je rêve de
                  tes belles lumières, C’est une ville sur l’Isset Où j’ai eu la chance parfaite De
                  passer ma vie entière !
                </p>

                <p>
                  Il y a tellement de villes Qui sont pour moi lointaines et étrangères, Tellement
                  de capitales Qui m’oublient et qui sont oubliées. Il est pourtant facile De
                  reconnaître le visage si cher Et je retrouve les dalles De cet ancien pavé.
                </p>

                <p>
                  <i>Refrain: </i>
                </p>

                <p>
                  C’est là où je voudrais Me ballader sur les boulevards déserts, Où je peux
                  rencontrer Les mêmes visages que je reconnais, C’est là qu’on peut trouver Ceux
                  pour qui Sverdlovsk est toujours cher Et Ekaterinbourg est également aimé.
                </p>

                <p>
                  <i>Refrain: </i>
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide> */}
    </div>
  );
}
