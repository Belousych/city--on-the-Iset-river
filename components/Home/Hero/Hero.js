import { ArrowDownIcon } from "@heroicons/react/solid";

import styles from "@/styles/Home.module.css";

const Hero = () => {
  return (
    <div className="hero h-screen relative">
      <div className={styles.bg}>
        {/* <Image layout="fill" src="/header2.jpg" priority alt="Екатеринбург" /> */}
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Здравствуй, <br /> город на Исети!
          </h1>
          <p className="mb-5">Песня к 300-летию Екатеринбурга</p>
          <a className="btn btn-primary" href="#about" data-href="#about">
            <ArrowDownIcon className="h-5 w-5 pointer-events-none" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
