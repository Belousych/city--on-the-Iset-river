// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

export default function Song() {
  return (
    <div className="py-10" id="song">
      <Tab.Group>
        <div className="mx-auto pb-10 text-center">
          <Tab.List
            as="ul"
            className="menu bg-base-100 menu-vertical lg:menu-horizontal shadow-xl rounded-box"
          >
            <Tab as={Fragment}>
              {({ selected }) => (
                <li>
                  <button className={selected ? "active" : ""}>Русский</button>
                </li>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <li>
                  <button className={selected ? "active" : ""}>Французский</button>
                </li>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <li>
                  <button className={selected ? "active" : ""}>Английский</button>
                </li>
              )}
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <div className="text-center mb-5">
              <h2 className=" text-5xl font-bold mx-auto">Город на Исети</h2>
            </div>
            <div className="flex flex-wrap relative">
              <div className="grow min-w-fit md:w-3/5">
                <div className="card-body sticky top-10">
                  <iframe
                    loading="lazy"
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
                <div className="prose card-body block">
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
                    <br />
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
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center mb-5">
              <h2 className=" text-5xl font-bold mx-auto">Ma chère ville sur l’Isset</h2>
            </div>
            <div className="flex flex-wrap relative">
              <div className="grow min-w-fit md:w-3/5">
                <div className="card-body sticky top-10">
                  <iframe
                    loading="lazy"
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
                <div className="prose card-body block">
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
                    <br />
                    Ma chère ville sur l’Isset Qui pour moi est une vedette, Loin de toi je rêve de
                    tes belles lumières, C’est une ville sur l’Isset Où j’ai eu la chance parfaite
                    De passer ma vie entière !
                  </p>

                  <p>
                    Il y a tellement de villes Qui sont pour moi lointaines et étrangères, Tellement
                    de capitales Qui m’oublient et qui sont oubliées. Il est pourtant facile De
                    reconnaître le visage si cher Et je retrouve les dalles De cet ancien pavé.
                  </p>

                  <p>
                    <i>Refrain. </i>
                  </p>

                  <p>
                    C’est là où je voudrais Me ballader sur les boulevards déserts, Où je peux
                    rencontrer Les mêmes visages que je reconnais, C’est là qu’on peut trouver Ceux
                    pour qui Sverdlovsk est toujours cher Et Ekaterinbourg est également aimé.
                  </p>

                  <p>
                    <i>Refrain. </i>
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="text-center mb-5">
              <h2 className=" text-5xl font-bold mx-auto">This is Iset river city</h2>
            </div>
            <div className="flex flex-wrap relative">
              <div className="grow min-w-fit md:w-3/5">
                <div className="card-body sticky top-10">
                  <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                      <img src="/audio_en.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Listen!</h2>
                      {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                      <figure>
                        <figcaption></figcaption>
                        <audio controls src="/Gorod_EN.mp3">
                          Your browser does not support the
                          <code>audio</code> element.
                        </audio>
                      </figure>
                      {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-auto md:w-2/5">
                <div className="prose card-body block">
                  <p>
                    I see the high-rise blocks, <br />
                    They’re looking up, competing by their feet <br />
                    And apple blossom snow <br />
                    Is flying, dancing over granite street. <br />
                    I cannot realize <br />
                    We’ve been together over twenty years <br />
                    So time is flying by <br />
                    And we became grown-ups.
                  </p>

                  <p>
                    <i>Refrain</i>
                    <br />
                    This is Iset river city, <br />
                    I have fallen for your beauty <br />
                    I’m coming back to see your sparkling lights <br />
                    This is Iset river city <br />
                    I feel so pleased to meet you <br />
                    And look into your semi-precious eyes
                  </p>

                  <p>
                    And all-around the world <br />
                    Big capitals don’t know your image yet <br />
                    And many little towns <br />
                    That probably don’t even further wait. <br />
                    I look into your face <br />
                    Because it’s only one that makes me smile <br />
                    I love your warm embrace <br />
                    And quay with special vibe.
                  </p>

                  <p>
                    <i>Refrain</i>
                  </p>

                  <p>
                    I want to dream and dance <br />
                    With you, like if I’m still a little girl <br />
                    To catch your precious glance <br />
                    Your eyes are radiating all along <br />
                    My friends to be around <br />
                    Who came of age together with Sverdlovsk <br />
                    And those who’s growing up with Yekaterinburg!
                  </p>
                  <p>
                    <i>Refrain</i>
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
