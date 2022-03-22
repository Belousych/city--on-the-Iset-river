import React from "react";

import Fb from "@/components/Icons/Fb";
import Insta from "@/components/Icons/Insta";
import Vk from "@/components/Icons/Vk";
import Whatsapp from "@/components/Icons/Whatsapp";

export default function Social() {
  return (
    <div>
      <ul className="flex text-4xl gap-4 text-white dark:text-black">
        {/* <li>
          <a href="https://www.facebook.com/olga.beshtau" target="_blank" rel="noopener noreferrer">
            <Fb />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/olli_beshtau/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta />
          </a>
        </li> */}
        <li>
          <a href="https://vk.com/olga_beshtau" target="_blank" rel="noopener noreferrer">
            <Vk />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=79122778514&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%20!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
}
