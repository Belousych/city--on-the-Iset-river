import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

import { formatDate } from "@/utils/formatDate";

function Card({ title, images, description, id, ...rest }) {
  // console.log("PROPS", formatDate(new Date(rest.publishedAt)));

  const imgUri = images.data.length > 0 ? images.data[0].attributes.url : "/audio_en.jpg";
  return (
    <Link href={`/blog/${rest.slug}`} className="block">
      <a>
        <div className="card bg-base-100 shadow-xl h-full">
          <figure className="h-2/5 w-full">
            <img src={imgUri} alt={title} className="object-cover h-full w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-betwen">
              {formatDate(new Date(rest.publishedAt))}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

Card.propTypes = {
  Date: PropTypes.any,
  title: PropTypes.string,
  images: PropTypes.object,
  description: PropTypes.string,
  id: PropTypes.any,
};

export default Card;
