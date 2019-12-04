import React, { useEffect } from "react";
import { IStackTrace } from "./Interfaces";
import { IMarker } from "react-ace";

interface IProps {
  setMarkers: (markers: IMarker[]) => void;
  syntaxErrorTrace: IStackTrace;
}

const SyntaxErrorView = (props: IProps) => {
  const { setMarkers, syntaxErrorTrace } = props;

  useEffect(() => {
    /* Set Ace "Markers" for highlighting syntax error line */
    const marker: IMarker = {
      startCol: 0,
      endCol: 1000,
      startRow: syntaxErrorTrace.line || 1,
      endRow: syntaxErrorTrace.line || 1,
      className: "highlight-red",
      type: "text",
      inFront: true
    };
    setMarkers([marker]);

    /* Cleanup. Reset markers if component unmounts */
    return () => {
      setMarkers([]);
    };
  }, [setMarkers, syntaxErrorTrace]);

  const syntaxError: string | undefined = syntaxErrorTrace.exception_msg;

  return <div className="error-text">{syntaxError}</div>;
};

export default SyntaxErrorView;
