import React from "react";
import FirstIntroSection from "./FirstIntroSection";
import SecondSection from "./SecondSection";
import SeventhSection from "./SeventhSection";
import ThirdSection from "./ThirdSection";

export default function HomeMain() {
  return <div>
    <FirstIntroSection></FirstIntroSection>
    <SecondSection></SecondSection>
    <ThirdSection></ThirdSection>
    {/* <FourthSection></FourthSection>
    <FifthSection></FifthSection> 
     <SixthSection></SixthSection> */}
     <SeventhSection></SeventhSection>
    
  </div>;
}
