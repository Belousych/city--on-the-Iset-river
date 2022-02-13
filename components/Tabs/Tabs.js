import { Tab } from "@headlessui/react";
import cn from "classnames";

import styles from "./tabs.module.css";

const Tabs = () => {
  return (
    <div className={styles.wrap}>
      <Tab.Group>
        <Tab.List className="tabs">
          <Tab
            className={({ selected }) =>
              cn("tab tab-lifted", {
                "tab-active": selected,
              })
            }
          >
            Русский
          </Tab>
          <Tab
            className={({ selected }) =>
              cn("tab tab-lifted", {
                "tab-active": selected,
              })
            }
          >
            English
          </Tab>
          <Tab
            className={({ selected }) =>
              cn("tab tab-lifted", {
                "tab-active": selected,
              })
            }
          >
            Français
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <div className={styles.panel}>111</div>
          </Tab.Panel>

          <Tab.Panel>
            <div className={styles.panel}>222</div>
          </Tab.Panel>

          <Tab.Panel>
            <div className={styles.panel}>333</div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
