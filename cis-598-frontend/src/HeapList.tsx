import React from "react";
import "./App.css";
import { IHeapTrace, IHeapArray } from "./Interfaces";
import HeapObject from "./HeapObject";

interface IProps {
  heapTraces: IHeapTrace;
}

const HeapList = (props: IProps) => {
  const { heapTraces } = props;

  return (
    <div className="layout-column">
      {Object.keys(heapTraces).map(objIdx => {
        const heapValues: IHeapArray = heapTraces[objIdx];
        return (
          <HeapObject heapValues={heapValues} objIdx={objIdx} key={objIdx} />
        );
      })}
    </div>
  );
};

export default HeapList;
