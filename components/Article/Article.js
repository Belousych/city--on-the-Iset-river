import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

function Article({ post, content }) {
  return (
    <div className="max-w-5xl m-auto">
      <div className="text-sm breadcrumbs -mt-11 mb-11">
        <ul>
          <li>
            <Link href="/">
              <a className="link">На главную</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/">
              <a className="link">Все статьи</a>
            </Link>
          </li>

          <li>{post.title}</li>
        </ul>
      </div>

      <div className="max-w-sm mb-4 mx-auto">
        {post.images.data.length > 0 && (
          <div className="card bg-base-100 shadow-xl h-full">
            <figure className="h-2/5 w-full">
              <img
                src={post.images.data[0].attributes.url}
                alt={post.title}
                className="object-cover h-full w-full"
              />
            </figure>
          </div>
        )}
      </div>
      <div className="prose lg:prose-xl max-w-none">
        <h1 className="text-center">{post.title}</h1>

        <div className="" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}

Article.propTypes = {
  post: PropTypes.object,
  content: PropTypes.string,
};

export default Article;
