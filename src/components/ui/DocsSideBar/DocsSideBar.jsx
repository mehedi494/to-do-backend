import { Link } from "react-router-dom";
import Accordion from "../Accordion";
import { menus } from "../utils/menuBarList";

export default function DocsSideBar({ children }) {
  const menuItem = menus;

  return (
    <div className="bg-white   ">
      <div className=" w-80 overflow-y-scroll h-screen  pt-4 pl-6 pr-4 font-poppins text-[#8a8b8f] text-sm">
        {/* Sidebar content goes here */}
        <ul>
          {menuItem.map((item, index) => {
            return item.path ? (
              item.title && item.path && !item.accordian ? (
                /* Single menu without accordion */
                <Link to={item?.path}>
                  <div className="flex items-center w-full  hover:bg-gray-200  p-1 rounded mb-2 gap-x-4 ">
                    <span className="text-lg">{item.icon}</span>
                    <li className="" key={index}>
                      {item.title}
                    </li>
                  </div>
                </Link>
              ) : (
                <Accordion
                  key={index}
                  // title={accitem.title}
                  contents={item}></Accordion>
              )
            ) : (
              /* Section title here only */
              item.sectionTitle && (
                <li key={index} className="font-semibold mt-4 mb-2">
                  {item.sectionTitle}
                </li>
              )
            );
          })}
        </ul>
      </div>

      {children}
    </div>
  );
}
