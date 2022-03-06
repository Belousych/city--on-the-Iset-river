import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <div className="py-10" id="team">
      <div className="md:container md:mx-auto">
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
                  className="rounded-full object-center object-contain"
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
                  src="/team_6.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-center object-contain"
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
                  src="/team_4.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-center object-contain"
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
                  src="/team_2.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-center object-contain"
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
                  className="rounded-full object-center object-contain"
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
                  src="/team_5.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-center object-contain"
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
                  src="/team_7.jpg"
                  width={200}
                  height={200}
                  className="rounded-full object-center object-contain"
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

          <div className="flex flex-col w-56">
            <a href="https://vk.com/ekaterinboogie" target="_blank" rel="noopener noreferrer">
              <div className="avatar mx-auto mb-">
                <div className="mask mask-hexagon bg-black">
                  <Image
                    src="/Ekaterinbugi.png"
                    width={200}
                    height={200}
                    className="rounded-full object-center object-contain"
                  />
                </div>
              </div>
              <div className="prose">
                <p>
                  <strong>Буги-вуги в Екатеринбурге</strong> <br /> <i>хореография</i>
                </p>
              </div>
            </a>
          </div>

          <div className="flex flex-col w-56">
            <a href="https://vk.com/ttdance_ekb" target="_blank" rel="noopener noreferrer">
              <div className="avatar mx-auto mb-">
                <div className="mask mask-hexagon bg-black">
                  <Image
                    src="/terra.png"
                    width={200}
                    height={200}
                    className="rounded-full object-center object-contain"
                  />
                </div>
              </div>
              <div className="prose">
                <p>
                  <strong>Территория танца</strong> <br /> 
                  {/* <i>хореография</i> */}
                </p>
              </div>
            </a>
          </div>

          <div className="flex flex-col w-56">
            <a href="https://dd66.ru/novyj-start" target="_blank" rel="noopener noreferrer">
              <div className="avatar mx-auto mb-2">
                <div className="mask mask-hexagon">
                  <Image
                    src="/newstart.jpg"
                    width={200}
                    height={200}
                    className="rounded-full object-center object-contain"
                  />
                </div>
              </div>
              <div className="prose">
                <p>
                  <strong>
                    Театральная студия <br /> Новый старт
                  </strong>{" "}
                  <br /> {/* <i>перевод на китайский язык, исполнение на китайском языке</i> */}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mx-auto text-center">
          <Image src="/line.svg" width={960} height={100} className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
