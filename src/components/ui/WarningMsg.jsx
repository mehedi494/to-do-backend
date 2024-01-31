import React from "react";

import { PiWarningCircleThin } from "react-icons/pi";
export default function WarningMsg({ title }) {
  return (
    <div>
      {/* <img
        alt="warn"
        loading="lazy"
        width="16"
        title={title}
        height="16"
        decoding="async"
        data-nimg="1"
        src={wrningImg}
        style={{ color: "transparent" }}
      /> */}
    
      <PiWarningCircleThin 
        title={title}
        className="relative w-[24px] h-[24px] rotate-180"
       /*  style={{ color: "transparent" }} */
      />
        <p className="hidden group-hover:block">{title}</p>
    </div>
  );
}
