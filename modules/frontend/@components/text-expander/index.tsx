import { excerpt } from "@/helpers/utils";
import React, { useState } from "react";

interface propsType {
  collapsedNumWords?: any;
  text?: any;
  expanded?: any;
  expandButtonText?: any;
  collapseButtonText?: any;
}
const TextExpander = ({
  collapsedNumWords = 240,
  text,
  expanded = false,
  expandButtonText = "Show More",
  collapseButtonText = "Show less",
}: propsType) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const collapseText = excerpt(text, collapsedNumWords);
  const displayedText = isExpanded ? text : collapseText;
  return (
    <div>
      <span className="text-white">{displayedText}</span>
      <button
        className="text-hover"
        onClick={() => setIsExpanded((exp: any) => !exp)}
      >
        <span className="inline-block pl-1 text-secondary">
          {isExpanded ? collapseButtonText : expandButtonText}
        </span>
      </button>
    </div>
  );
};

export default TextExpander;
