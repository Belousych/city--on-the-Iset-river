import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="hero py-10 bg-base-200" id="about">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="flex-shrink-0 img-author">
          <Image
            src="/olly.jpg"
            width={350}
            height={350}
            className="max-w-sm rounded-full shadow-2xl"
            alt="Автор Песни - Ольга Белоусова"
          />
        </div>
        <div className="prose">
          <h2 className="mb-5 text-2xl font-bold">Дорогие друзья!</h2>
          <p className="mb-5">
            К 300-летию Екатеринбурга мы решили перевести и исполнить на разных языках песню о нашем
            любимом городе, где живут представители больше 100 национальностей. Уже готовы
            английская, французская и китайская версии. В нашей команде - переводчики, исполнители,
            актёры, танцоры, и просто креативные жители Екатеринбурга. Если есть идеи и вы влюблены
            в этот город, присоединяйтесь к нам!
          </p>
          <p className="text-right">
            <i>С уважением, Ольга Белоусова</i>
          </p>
        </div>
      </div>
    </div>
  );
}
