import React, { useState } from "react";
import "./App.css";
import {
  IStackTrace,
  Dictionary,
  IStackFrame,
  IVariable,
  IHeapTrace
} from "./Interfaces";
import { ArcherContainer } from "react-archer";
import VariableList from "./Variables/VariableList";
import StackFrameList from "./StackFrames/StackFrameList";
import NavigationBar from "./NavigationBar";
import StdoutView from "./StdoutView";
import { IMarker } from "react-ace";
import SyntaxErrorView from "./SyntaxErrorView";
import HeapList from "./HeapList";

interface IProps {
  setMarkers: (markers: IMarker[]) => void;
  stackTraces: IStackTrace[];
}

const StackTraceView = (props: IProps) => {
  /* Setup Hook state variable. Similar to a class constructor */
  const [stepNumber, setStepNumber] = useState<number>(0);

  /* Destructure props */
  let { setMarkers, stackTraces } = props;

  if (stackTraces.length === 0) {
    return null;
  } else if (stackTraces.length === 1 && stackTraces[0].exception_msg) {
    return (
      <SyntaxErrorView
        setMarkers={setMarkers}
        syntaxErrorTrace={stackTraces[0]}
      />
    );
  }

  const currentTrace: IStackTrace = stackTraces[stepNumber];
  if (currentTrace == null) {
    return null;
  }
  const stackToRender: IStackFrame[] | undefined = currentTrace.stack_to_render;
  let currentGlobals: Dictionary<IVariable> | undefined = currentTrace.globals;
  const heap: IHeapTrace | undefined = currentTrace.heap;

  return (
    <div className="layout-column">
      <ArcherContainer strokeColor="red">
        <div className="layout-row">
          <div className="layout-column">
            Stack:
            {currentGlobals && <VariableList variables={currentGlobals} />}
            {stackToRender && <StackFrameList stackFrames={stackToRender} />}
          </div>
          <div className="layout-column" style={{ paddingLeft: "40px" }}>
            Heap:
            <div className="layout-row">
              {heap && <HeapList heapTraces={heap} />}
            </div>
          </div>
        </div>
      </ArcherContainer>
      <StdoutView stdout={currentTrace.stdout} />
      <NavigationBar
        className="margin-bottom"
        onFirst={() => setStepNumber(0)}
        onLast={() => setStepNumber(stackTraces.length - 1)}
        onNext={() => setStepNumber(stepNumber + 1)}
        onPrevious={() => setStepNumber(stepNumber - 1)}
        stepNumber={stepNumber}
        totalSteps={stackTraces.length}
      />
    </div>
  );
};

export default StackTraceView;
