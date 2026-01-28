import React from "react";
import { BrandMission } from "./BrandMission";
import { BrandPhilosophy } from "./BrandPhilosophy";
import { ScrollRevealAnimation } from "../../helper/scrollRevealAnimation";

export const About = () => {
  return (
    <div>
      <BrandMission />
      <ScrollRevealAnimation>
        <BrandPhilosophy />
      </ScrollRevealAnimation>
    </div>
  );
};
