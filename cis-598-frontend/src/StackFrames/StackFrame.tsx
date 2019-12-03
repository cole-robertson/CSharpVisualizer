import React from "react";
import "../App.css";
import { IStackFrame } from "../Interfaces";
import VariableList from "../Variables/VariableList";

interface IProps {
  stackFrame: IStackFrame;
}

const StackFrame = (props: IProps) => {
  const { stackFrame } = props;
  return (
    <div className="border-black">
      {stackFrame.func_name}
      <VariableList
        funcName={stackFrame.func_name}
        variables={stackFrame.encoded_locals}
      />
    </div>
  );
};

export default StackFrame;
