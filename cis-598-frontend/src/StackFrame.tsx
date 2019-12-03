import React from "react";
import "./App.css";
import { IStackFrame } from "./Interfaces";

interface IProps {
  stackFrame: IStackFrame;
}

const StackFrame = (props: IProps) => {
  const { stackFrame } = props;
  return <div className="border-black">{stackFrame.func_name}</div>;
};

export default StackFrame;
