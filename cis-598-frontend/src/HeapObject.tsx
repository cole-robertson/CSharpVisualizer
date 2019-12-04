import React from "react";
import "./App.css";
import { IHeapArray } from "./Interfaces";
import { ArcherElement } from "react-archer";

interface IProps {
  heapValues: IHeapArray;
  objIdx: string;
}

const HeapObject = (props: IProps) => {
  const { objIdx } = props;
  const heapValues = [...props.heapValues];
  const objectType = heapValues.splice(0, 1)[0];
  let heapObject;
  if (typeof objectType === "string") {
    switch (objectType) {
      case "ARRAY":
      case "LIST": {
        heapObject = (
          <div>
            {objectType}
            {heapValues.map((value, index) => {
              if (Array.isArray(value) && value[0] === "REF") {
                const referenceValue = value[1];
                return (
                  <div
                    className="layout-column"
                    key={`${objectType}-${value}-${index}`}
                  >
                    {index} :
                    <ArcherElement
                      id={`startingRef-${value}-${index}`}
                      relations={[
                        {
                          targetId: `heap-${referenceValue}`,
                          targetAnchor: "left",
                          sourceAnchor: "right"
                        }
                      ]}
                    />
                  </div>
                );
              }
              return (
                <div
                  className="layout-column"
                  key={`${objectType}-${value}-${index}`}
                >
                  {index}: {value}
                </div>
              );
            })}
          </div>
        );
        break;
      }
      case "DICT": {
        heapObject = (
          <div>
            {objectType}
            {heapValues.map(value => {
              if (Array.isArray(value)) {
                return (
                  <div
                    className="layout-columns"
                    key={`${objectType}-${value[0]}-${value[1]}`}
                  >
                    {value[0]}: {value[1]}
                  </div>
                );
              }
              return null;
            })}
          </div>
        );
        break;
      }
      case "FUNCTION": {
        heapObject = <div>{heapValues[0]}</div>;
        break;
      }
    }
  }

  return (
    <div className="layout-column">
      <ArcherElement
        style={{
          border: "2px solid black",
          marginLeft: "40px"
        }}
        id={`heap-${objIdx}`}
        key={`heap-${objIdx}`}
      >
        {heapObject}
      </ArcherElement>
    </div>
  );
};

export default HeapObject;
