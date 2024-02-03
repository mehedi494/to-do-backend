import React from "react";

import DocsHeaderFooter from "../../components/ui/DocsContents/DocsHeaderFooter";

export default function Foundation() {
  const double = [
    {
      leftTitle: "Welcome",
      operation: "PREVIOUS",
      path: "/docs",
    },
    {
      rightTitle: "current challanges",
      operation: "NEXT",
      path: "/docs",
    },
  ];
  const content = (
    <div className="p-8">
      <p className=" ">
        The genesis of Gelios Blockchain emerged from a profound understanding
        of the growing need for the diversification of the Bitcoin network.{" "}
      </p>
      <div className="border py-4"></div>
      <p>
        The genesis of Gelios Blockchain emerged from a profound understanding
        of the growing need for the diversification of the Bitcoin network.
      </p>
    </div>
  );

  return (
    <DocsHeaderFooter
      icon={`🍒`}
      title={`Foundation`}
      content={content}
      double={double}></DocsHeaderFooter>
  );
}
