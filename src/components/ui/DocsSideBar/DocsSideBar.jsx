import React from "react";

export default function DocsSideBar({ children }) {
  return (
    <div>
      <div className="bg-gray-800 h-screen w-64 text-white p-4">
        {/* Sidebar content goes here */}
        <p>Sidebar Content</p>
      </div>

      {children}
    </div>
  );
}
