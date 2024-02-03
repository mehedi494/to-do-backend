import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import NavigationButton from "../NavigationButton/NavigationButton";

export default function DocsHeaderFooter({icon, title, content, double, single }) {
  let leftContent;
  let rightContent;
  if (double) {
    double.map((item) =>
      item.leftTitle
        ? (leftContent = item.leftItem)
        : (rightContent = item.rightContent)
    );
  }
  console.log(leftContent);
  return (
    <div className="p-4 py-6">
      <div className="flex items-center gap-x-4 text-[#262930]  ">
        <div className="w-6 text-2xl ">{icon}</div>
        <h1 className="text-4xl w-full font-bold "> {title}</h1>
        <span className="w-6 text-2xl cursor-pointer">
          <BsThreeDotsVertical />
        </span>
      </div>

      {/* ontents Here goes  */}

      {content}

      {/*  ****** */}
      {double && (
        <div>
          {/* Previous Button */}
          <NavigationButton
            operation={leftContent?.operation}
            title={rightContent?.rightTitle}
            path={rightContent?.path}></NavigationButton>
        </div>
      ) && (
        // Next Button
        <NavigationButton
          operation={rightContent?.operation}
          title={rightContent?.title}
          path={rightContent?.path}></NavigationButton>
      )}
      {/* Single only one */}
      {single && (
        <NavigationButton
          operation={single?.operation}
          title={single?.title}
          path={single?.path}></NavigationButton>
      )}
    </div>
  );
}
