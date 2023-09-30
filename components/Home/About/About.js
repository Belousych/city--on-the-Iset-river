import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

function About({ avatar, aboutTitle, aboutText, aboutPS }) {
  const bgUri = avatar?.data?.attributes?.url || "/olly.jpg";
  return (
    <div className="hero py-10" id="about">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="flex-shrink-0 img-author">
          <Image
            src={bgUri}
            width={350}
            height={350}
            className="max-w-sm rounded-full shadow-2xl"
            alt="Автор Песни - Ольга Белоусова"
          />
        </div>
        <div className="prose">
          <h2 className="mb-5 text-5xl font-bold font-sverdlovsk">{aboutTitle}</h2>
          <p className="mb-5">{aboutText}</p>
          <p className="text-right">
            <i>{aboutPS}</i>
          </p>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  aboutTitle: PropTypes.string,
  aboutText: PropTypes.string,
  aboutPS: PropTypes.string,
  avatar: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
};

export default About;
