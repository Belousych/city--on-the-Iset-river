import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

function Team({ items }) {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <div className="py-10" id="team">
      <div className="md:container md:mx-auto">
        <div className="text-center mb-5">
          <h2 className="lg:text-5xl text-3xl font-bold mx-auto">Наша команда</h2>
        </div>

        <div className="flex flex-wrap justify-center py-10  gap-10 text-center">
          {items.map((item) => (
            <div className="flex flex-col w-56" key={item.id}>
              {item?.attributes?.link ? (
                <a
                  href={item?.attributes?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-2 "
                >
                  <div className="avatar mx-auto hover-opacity-100">
                    <div className="mask mask-hexagon bg-primary absolute w-[104%] h-[104%] top-[-2%] left-[-2%] opacity-30"></div>
                    <div className="mask mask-hexagon bg-primary">
                      <Image
                        src={item?.attributes?.avatar?.data?.attributes?.url}
                        width={200}
                        height={200}
                        className="rounded-full object-center object-contain"
                        alt={item?.attributes?.Name}
                      />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="avatar mx-auto mb-2">
                  <div className="mask mask-hexagon bg-primary">
                    <Image
                      src={item?.attributes?.avatar?.data?.attributes?.url}
                      width={200}
                      height={200}
                      className="rounded-full object-center object-contain"
                      alt={item?.attributes?.Name}
                    />
                  </div>
                </div>
              )}

              <div className="prose">
                <p>
                  <strong>{item?.attributes?.Name}</strong> <br /> <i>{item?.attributes?.role}</i>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto text-center">
          <Image src="/line.svg" width={960} height={100} className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

Team.propTypes = {
  items: PropTypes.array,
};

export default Team;
