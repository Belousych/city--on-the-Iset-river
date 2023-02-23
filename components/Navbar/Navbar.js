import { MusicNoteIcon, UsersIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

import Social from "@/components/Social/Social";

const Navbar = () => {
  const { route } = useRouter();
  const isMain = route === "/";

  return (
    <div className="drawer fixed w-full z-40">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar shadow-lg bg-neutral text-neutral-content  z-40 w-full text-white">
          <div className="flex-1 px-2 mx-2">
            {/* <span className="text-lg font-bold">daisyUI</span> */}
            <Social />

            <a
              href="https://planeta.ru/campaigns/iset-city"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 mx-2"
            >
              <svg
                _ngcontent-xrv-c12=""
                className="header_logo-img ng-star-inserted"
                height="30"
                viewBox="0 0 116 30"
                width="116"
              >
                <g _ngcontent-xrv-c12="" fill="#00B2E2">
                  <path
                    _ngcontent-xrv-c12=""
                    d="M25.942 4.39c5.859 5.859 5.859 15.346 0 21.204-5.858 5.859-15.345 5.859-21.204 0-5.858-5.858-5.858-15.345 0-21.204 5.859-5.843 15.361-5.843 21.204 0zm-1.413 1.414C19.455.73 11.225.73 6.152 5.804c-5.073 5.073-5.073 13.303 0 18.377 5.073 5.073 13.303 5.073 18.377 0 5.073-5.074 5.073-13.304 0-18.377z"
                  ></path>
                  <path
                    _ngcontent-xrv-c12=""
                    d="M28.236 5.097a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm68.403 9.173a3 3 0 0 0-3 3c0 1.649 1.351 3 3 3a3 3 0 0 0 3-3c0-1.65-1.351-3-3-3zM21.702 8.631a8.987 8.987 0 0 1 0 12.722 8.986 8.986 0 0 1-12.723 0 8.987 8.987 0 0 1 0-12.722c3.518-3.503 9.22-3.503 12.723 0z"
                  ></path>
                </g>
                <path
                  _ngcontent-xrv-c12=""
                  d="M39.796 11.882c1.712 0 2.136 1.539 2.136 3.047 0 1.414-.613 2.733-2.199 2.733-1.602 0-2.058-1.743-2.058-2.874-.015-1.508.534-2.906 2.121-2.906zM37.66 9.966h-2.403v13.288h2.481v-5.042l.047.016c.299.518.911 1.46 2.655 1.46 2.827 0 4.021-2.465 4.021-5.057 0-3.283-1.869-4.916-3.974-4.916-1.681 0-2.356.879-2.827 1.617h-.032V9.966zm8.01-3.314h2.482v12.801H45.67zm6.361 6.393c.063-.55.283-1.32 1.54-1.32.628 0 1.633.047 1.633 1.115 0 .456-.392.739-1.445.833-2.387.188-4.429 1.099-4.429 3.282 0 1.964 1.445 2.765 2.874 2.765 1.697 0 2.498-.801 3.063-1.382.047.534.094.675.236 1.131h2.685v-.393c-.298-.11-.549-.346-.549-1.461v-5.136c0-2.34-2.435-2.749-3.77-2.749-1.932 0-3.942.409-4.225 3.315h2.387zm3.173 1.79v1.21c0 1.146-1.131 1.869-2.214 1.869-.487 0-1.163-.267-1.163-1.147 0-1.021.754-1.272 1.697-1.429 1.005-.142 1.429-.314 1.68-.503zm4.068-4.869v9.487h2.482v-5.419c0-1.445.848-2.199 1.963-2.199 1.587 0 1.618 1.178 1.618 1.869v5.765h2.482v-6.566c0-2.073-1.43-3.173-3.283-3.173-1.791 0-2.513 1.068-2.859 1.634h-.031V9.966h-2.372zm16.053 6.707c-.189.675-.896 1.036-1.602 1.036-2.011 0-2.168-1.602-2.168-2.324h6.44v-.927c0-3.267-1.775-4.728-4.445-4.728-4.147 0-4.555 3.644-4.555 4.791 0 3.895 2.057 5.183 4.728 5.183 1.617 0 3.502-.754 4.162-3.031h-2.56zm-3.77-2.906c.141-1.241.77-1.995 1.963-1.995.801 0 1.775.471 1.917 1.995h-3.88zm8.01-6.33v2.545h-1.272v1.775h1.272v5.764c0 1.241.393 2.042 2.875 2.042.392 0 .848-.016 1.162-.047v-1.869a3.864 3.864 0 0 1-.518.031c-1.005 0-1.037-.204-1.037-.754v-5.167h1.555V9.966h-1.555V7.437h-2.482zm7.304 5.608c.063-.55.283-1.32 1.539-1.32.629 0 1.634.047 1.634 1.115 0 .456-.393.739-1.445.833-2.372.188-4.429 1.099-4.429 3.282 0 1.964 1.445 2.765 2.874 2.765 1.696 0 2.497-.801 3.063-1.382.047.534.094.675.235 1.131h2.686v-.393c-.298-.11-.55-.346-.55-1.461v-5.136c0-2.34-2.434-2.749-3.769-2.749-1.932 0-3.943.409-4.225 3.315h2.387zm3.173 1.79v1.21c0 1.146-1.131 1.869-2.215 1.869-.487 0-1.162-.267-1.162-1.147 0-1.021.754-1.272 1.696-1.429 1.005-.142 1.43-.314 1.681-.503zm10.728-4.869v9.487h2.481V14.49c0-1.053.377-2.247 2.309-2.247.236 0 .487.016.723.048V9.762a4.976 4.976 0 0 0-.487-.032c-1.524 0-2.073.927-2.592 1.885h-.031V9.966h-2.403zm6.361 0v6.236c0 2.418 1.335 3.486 3.204 3.486 1.319 0 2.325-.581 2.89-1.586h.032v1.335h2.387V9.95h-2.482v5.466c0 1.697-1.115 2.168-1.916 2.168-.77 0-1.618-.299-1.618-1.744V9.966h-2.497z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex-none hidden px-2 mx-2 lg:flex">
            <div className="flex items-stretch">
              {isMain ? (
                <>
                  <a className="btn btn-ghost btn-sm rounded-btn" href="#about" data-href="#about">
                    О проекте
                  </a>
                  <a className="btn btn-ghost btn-sm rounded-btn" href="#song" data-href="#song">
                    <MusicNoteIcon className="h-5 w-5 mr-1" />
                    Песня
                  </a>
                  <a className="btn btn-ghost btn-sm rounded-btn" href="#team" data-href="#team">
                    <UsersIcon className="h-5 w-5 mr-1" />
                    Мы
                  </a>
                </>
              ) : (
                <>
                  <Link href="/#about" scroll={false}>
                    <a className="btn btn-ghost btn-sm rounded-btn">О проекте</a>
                  </Link>
                  <Link href="/#song" scroll={false}>
                    <a className="btn btn-ghost btn-sm rounded-btn">
                      <MusicNoteIcon className="h-5 w-5 mr-1" />
                      Песня
                    </a>
                  </Link>
                  <Link href="/#team" scroll={false}>
                    <a className="btn btn-ghost btn-sm rounded-btn">
                      <UsersIcon className="h-5 w-5 mr-1" />
                      Мы
                    </a>
                  </Link>
                </>
              )}

              <Link href="/blog">
                <a className="btn btn-ghost btn-sm rounded-btn">Новости</a>
              </Link>
            </div>
          </div>
          <div className="flex-none">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side min-h-screen">
        <label htmlFor="my-drawer-3" className="drawer-overlay z-10"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
          {isMain ? (
            <>
              <li>
                <a className="" href="#about" data-href="#about">
                  О проекте
                </a>
              </li>
              <li>
                <a className="" href="#song" data-href="#song">
                  <MusicNoteIcon className="h-5 w-5 mr-1 pointer-events-none" />
                  Песня
                </a>
              </li>
              <li>
                <a className="" href="#team" data-href="#team">
                  <UsersIcon className="h-5 w-5 mr-1 pointer-events-none" />
                  Мы
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/#about" scroll={false}>
                  <a className="">О проекте</a>
                </Link>
              </li>
              <li>
                <Link href="/#song" scroll={false}>
                  <a className="">
                    <MusicNoteIcon className="h-5 w-5 mr-1 pointer-events-none" />
                    Песня
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#team" scroll={false}>
                  <a className="">
                    <UsersIcon className="h-5 w-5 mr-1 pointer-events-none" />
                    Мы
                  </a>
                </Link>
              </li>
            </>
          )}

          <li>
            <Link href="/blog">
              <a className="">Новости</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
