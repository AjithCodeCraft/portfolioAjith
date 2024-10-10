// GlobalHighlight.js
"use client";
import { HeroHighlight } from "@/components/HeroHighlight";

const GlobalHighlight = ({ children }) => {
  return (
    <HeroHighlight className="your-custom-class">
      {children}
    </HeroHighlight>
  );
};

export default GlobalHighlight;
