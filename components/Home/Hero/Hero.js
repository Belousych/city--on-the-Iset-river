import { ArrowDownIcon } from "@heroicons/react/solid";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "@/styles/Home.module.css";

const Hero = ({ title, subtitle, background }) => {
  const bgUri = background?.data?.attributes?.url;
  return (
    <div className="hero h-screen relative">
      <div
        className={cn(styles.bg)}
        style={{
          backgroundImage: bgUri && `url(${bgUri})`,
        }}
      ></div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold max-w-[390]">
            {title}
            {/* Здравствуй, <br /> город на Исети! */}
          </h1>
          <p className="mb-5">{subtitle}</p>
          <a className="btn btn-primary" href="#about" data-href="#about">
            <ArrowDownIcon className="h-5 w-5 pointer-events-none" />
          </a>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  background: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
};

export default Hero;
