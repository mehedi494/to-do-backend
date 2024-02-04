import React from "react";
import { Outlet } from "react-router-dom";
import DocsHeader from "../ui/DocsHeader/DocsHeader";
import DocsSideBar from "../ui/DocsSideBar/DocsSideBar";

export default function DocumentsLayout({ children }) {
  return (
    <div>
      <DocsHeader></DocsHeader>
      <div className="flex">
        <DocsSideBar></DocsSideBar>

        <div className="w-full  bg-white font-poppins">
          <Outlet>{children}</Outlet>
        </div>
        <div className="bg-white   w-80"></div>
      </div>
    </div>
  );
}
