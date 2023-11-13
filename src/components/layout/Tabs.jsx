import tabs from "../Tabs/tabs.json";
import Tab from "../Tabs/Tab";
import "../hideScrollbar.css";
import { useLocation } from "react-router-dom";

const pathEnum = {
  "/": "home",
  "/study-materials": "study-materials",
  "/assignments": "assignments",
  "/study-materials/notes": "notes",
};

const formatPathName = (path) => {
  const words = path.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const formattedString = capitalizedWords.join(" ");
  return formattedString;
};

const Tabs = () => {
  const location = useLocation();
  return (
    <div
      className="flex gap-5 items-center scrollable-container ml-10"
      style={{ overflowX: "scroll" }}
    >
      <div className="flex">
        {pathEnum[location?.pathname] !== "home" && (
          <div className="text-red-500 cursor-pointer">
            <a href="/">&gt;home&gt;</a>
          </div>
        )}
        {location?.pathname
          ?.split("/")
          ?.slice(1,-1)
          ?.map((path) => {
            return (
              <div className="text-red-500 cursor-pointer">
                <a href={`/${path}`} style={{ whiteSpace: "nowrap" }}>
                  {formatPathName(path)}&gt;
                </a>
              </div>
            );
          })}
      </div>
      <div className="flex gap-20 items-center">
      {tabs[`${pathEnum[location?.pathname]}`]?.map((tab, idx) => (
        <a className="" key={idx} href={tab.link}>
          <Tab tab={tab} />
        </a>
      ))}
      </div>
    </div>
  );
};

export default Tabs;
