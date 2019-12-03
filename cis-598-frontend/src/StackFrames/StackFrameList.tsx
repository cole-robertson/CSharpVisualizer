import React from "react";
import "../App.css";
import { IStackFrame } from "../Interfaces";
import StackFrame from "./StackFrame";

interface IProps {
  stackFrames: IStackFrame[];
}

const StackFrameList = (props: IProps) => {
  const { stackFrames } = props;
  return (
    <div className="layout-column">
      {stackFrames.map(stackFrame => {
        return <StackFrame stackFrame={stackFrame} />;
      })}
    </div>
  );
};

export default StackFrameList;
