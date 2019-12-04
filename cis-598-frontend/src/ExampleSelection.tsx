import React from "react";
import "./App.css";
import { IStackTrace } from "./Interfaces";
import { Button, ButtonGroup, H4 } from "@blueprintjs/core";
import {
  basicNesting,
  dataStructures,
  functionCalls,
  printStdout,
  simpleInts,
  heapStructures
} from "./Examples";

interface IProps {
  resetVisualization: () => void;
  setCode: (code: string) => void;
  setStackTraces: (stackTraces: IStackTrace[]) => void;
}

const ExampleSelection = (props: IProps) => {
  const { resetVisualization, setCode, setStackTraces } = props;

  const setVisualizerValues = (
    stackTraceObject: { trace: object[]; code: string } | string
  ) => {
    const traceObject = getTraceFromExampleObject(stackTraceObject);
    setCode(traceObject.code || "");
    setStackTraces(traceObject.trace || traceObject);
  };

  return (
    <div className="layout-column">
      <H4>Examples:</H4>
      <ButtonGroup>
        <Button
          text="Function Call"
          onClick={() => {
            resetVisualization();
            setVisualizerValues(functionCalls);
          }}
        />
        {/* <Button
          text="Print Stdout"
          // onClick={() => setVisualizerValues(printStdout)}
        />
        <Button
          text="Basic object nesting"
          // onClick={() => setVisualizerValues(basicNesting)}
        />
        <Button
          text="Data structures"
          // onClick={() => setVisualizerValues(dataStructures)}
        /> */}
        <Button
          text="Heap Structures"
          onClick={() => {
            resetVisualization();
            setVisualizerValues(heapStructures);
          }}
        />
        {/* <Button
          text="Simple ints"
          // onClick={() => setVisualizerValues(simpleInts)}
        /> */}
        <Button text="Reset" onClick={resetVisualization} />
      </ButtonGroup>
    </div>
  );
};

const getTraceFromExampleObject = (
  stackTraceObject: { trace: object[]; code: string } | string
) => {
  let jsonTrace;
  if (typeof stackTraceObject === "string") {
    jsonTrace = stackTraceObject;
  } else {
    jsonTrace = JSON.stringify(stackTraceObject);
  }

  const trace = JSON.parse(jsonTrace);
  return trace;
};

export default ExampleSelection;
