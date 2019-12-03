import React from "react";
import "./App.css";
import { IVariable } from "./Interfaces";
import { ArcherElement } from "react-archer";

interface IProps {
  funcName?: string;
  varName: string;
  varValue: IVariable;
}

const Variable = (props: IProps) => {
  const { funcName, varName, varValue } = props;
  if (Array.isArray(varValue)) {
    const referenceValue = varValue ? varValue[1] : null;
    return (
      <ArcherElement
        id={`starting-${varValue}`}
        relations={[
          {
            targetId: `heap-${referenceValue}`,
            targetAnchor: "left",
            sourceAnchor: "right"
          }
        ]}
        key={`starting-${varValue}`}
      >
        <div>{`${varName} : *`}</div>
      </ArcherElement>
    );
  } else {
    return (
      <div key={`${funcName || "global"}-${varValue}`}>
        {varName} : {varValue}
      </div>
    );
  }
};

export default Variable;
