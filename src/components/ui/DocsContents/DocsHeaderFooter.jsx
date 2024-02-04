import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import LeftNavigationButton from "../NavigationButton/LeftNavigationButton";
import RightNavigationButton from "../NavigationButton/RightNavigationButton";

export default function DocsHeaderFooter({
  icon,
  title,
  content,
  doubleCard,
  singleCard,
}) {
  console.log(doubleCard);

  let leftContent;
  let rightContent;
  if (doubleCard) {
    doubleCard.filter((item) =>
      item.leftTitle ? (leftContent = item) : (rightContent = item)
    );
  }
  console.log(leftContent);
  console.log(rightContent);
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

      {doubleCard && (
        // Previous Button
        <div className=" flex w-full">
          <div className="w-[50%]">
            <LeftNavigationButton
              operation={leftContent?.operation}
              title={leftContent?.leftTitle}
              path={leftContent?.path}></LeftNavigationButton>
          </div>

          {/* Next button */}
          <div className="w-[50%]">
            <RightNavigationButton
              operation={rightContent?.operation}
              title={rightContent?.rightTitle}
              path={rightContent?.path}></RightNavigationButton>
          </div>
        </div>
      )}

      {/* Single only one */}
      {singleCard?.position === "right" && (
        <RightNavigationButton
          operation={singleCard?.operation}
          title={singleCard?.title}
          path={singleCard?.path}></RightNavigationButton>
      ) } 
      {singleCard?.position === "left" &&<LeftNavigationButton
        operation={singleCard?.operation}
        title={singleCard?.title}
        path={singleCard?.path}></LeftNavigationButton>}
        
      
      <div className=" py-4 border-b"></div>
      <div className="py-4 text-gray-500">Last modified 13d ago</div>
    </div>
  );
}
