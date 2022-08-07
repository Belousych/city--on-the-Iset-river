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

              {/* <Link href="/blog">
                <a className="btn btn-ghost btn-sm rounded-btn">Блог</a>
              </Link> */}
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
