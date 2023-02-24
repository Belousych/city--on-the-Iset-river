import { Tab } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";

import { createMarkup } from "@/utils/utils";

function Song({ items, songTexts }) {
  const [mount, setMount] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    setMount(true);
  }, []);

  const handleChange = (e) => {
    setSelectedIndex(e.target.value);
  };

  if (!items || items.length === 0) {
    return null;
  }
  return (
    <div className="py-10 overflow-hidden overflow-x-auto md:overflow-visible" id="song">
      <div className="form-control w-full max-w-xs mx-auto 3xl:hidden">
        <label className="label">
          <span className="label-text">Выберите язык</span>
        </label>
        <select className="select select-primary w-full max-w-xs" onChange={handleChange}>
          {items.map((item, index) => (
            <option value={index} key={item.id}>
              {item?.attributes?.Lang}
            </option>
          ))}
        </select>
      </div>

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div className="mx-auto pb-10 text-center">
          <Tab.List
            as="ul"
            className="menu bg-base-100 menu-vertical lg:menu-horizontal shadow-xl rounded-box flex-wrap"
          >
            {items.map((item) => (
              <Tab key={item.id} as={Fragment}>
                {({ selected }) => (
                  <li className="hidden 3xl:block">
                    <button className={selected ? "active" : ""} type="button">
                      {item?.attributes?.Lang}
                    </button>
                  </li>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          {items.map((item, index) => (
            <Tab.Panel key={item.id}>
              <div className="text-center mb-5">
                <h2 className="lg:text-5xl text-3xl font-bold mx-auto">
                  {item?.attributes?.Header}
                </h2>
              </div>
              <div className="flex flex-wrap relative">
                <div className="grow md:w-3/6 max-w-full">
                  {item?.attributes?.videoUrl && (
                    <div className="card-body sticky top-10 max-w-3xl ml-auto">
                      {mount && (
                        <iframe
                          loading="lazy"
                          className="w-full aspect-video rounded-lg shadow-lg h-auto"
                          width="560"
                          height="315"
                          src={item?.attributes?.videoUrl}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      )}
                    </div>
                  )}

                  {!item?.attributes?.videoUrl &&
                    item?.attributes?.audioFile?.data?.attributes?.url && (
                      <div className="card-body  sticky top-10 ml-auto">
                        <div className="card w-96 bg-base-100 shadow-xl ml-auto max-w-full">
                          <figure className="px-10 pt-10">
                            <img src="/audio_en.jpg" alt="City" className="rounded-xl" />
                          </figure>
                          <div className="card-body items-center text-center">
                            <figure>
                              <figcaption></figcaption>
                              <audio
                                controls
                                src={item?.attributes?.audioFile?.data?.attributes?.url}
                              >
                                Your browser does not support the
                                <code>audio</code> element.
                              </audio>
                            </figure>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
                <div className="flex-auto md:w-3/6">
                  <div
                    className="prose card-body block whitespace-pre"
                    dangerouslySetInnerHTML={createMarkup(
                      songTexts[index] || item?.attributes?.Text
                    )}
                  ></div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

Song.propTypes = {
  items: PropTypes.array,
  songTexts: PropTypes.array,
};

export default Song;
