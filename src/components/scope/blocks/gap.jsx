import React from "react";
import { BaseBlock } from "../ScopeBaseBlock.jsx";

const GapBlock = ({ gapsize, children }) => {
  const sizeValue = gapsize ? `${gapsize}rem` : "0rem";

  const gapStyle = {
    height: sizeValue,
    minHeight: sizeValue,
    maxHeight: sizeValue,
    display: gapsize ? "block" : "none", 
    flex: "none",
  };

  return (
    <BaseBlock 
      className="w-full bg-transparent border-none overflow-hidden" 
      state="idle"
    >
      <div style={gapStyle}></div>
      {children}
    </BaseBlock>
  );
};

export default GapBlock;