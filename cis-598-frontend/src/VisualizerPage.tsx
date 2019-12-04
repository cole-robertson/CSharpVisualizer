import React, { useState } from "react";
import "./App.css";
import AceEditor, { IMarker } from "react-ace";
import { Button, Intent } from "@blueprintjs/core";

import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { postCodeToAPI } from "./CallAPI";
import { IStackTrace } from "./Interfaces";
import StackTraceView from "./StackTraceView";
import ExampleSelection from "./ExampleSelection";

const VisualizerPage = () => {
  const [code, setCode] = useState<string>("");
  const [stackTraces, setStackTraces] = useState<IStackTrace[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [markers, setMarkers] = useState<IMarker[]>([]);

  const resetVisualization = () => {
    setCode("");
    setStackTraces([]);
    setLoading(false);
    setMarkers([]);
  };
  try {
    return (
      <div className="layout-column">
        <ExampleSelection
          resetVisualization={resetVisualization}
          setCode={setCode}
          setStackTraces={setStackTraces}
        />
        <div className="layout-row">
          <div className="editor">
            <AceEditor
              enableLiveAutocompletion={true}
              enableBasicAutocompletion={true}
              placeholder="Placeholder Text"
              mode="csharp"
              theme="monokai"
              name="csharpEditor"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              onChange={code => setCode(code)}
              setOptions={{
                showLineNumbers: true,
                tabSize: 2
              }}
              value={code}
              markers={markers}
            />
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <StackTraceView stackTraces={stackTraces} setMarkers={setMarkers} />
          )}
        </div>
        <Button
          className="submit-button"
          intent={Intent.PRIMARY}
          minimal={true}
          onClick={async () => {
            setLoading(true);
            const stackTracesFromAPI = await postCodeToAPI(code);
            setStackTraces(stackTracesFromAPI);
            setLoading(false);
          }}
          text="Submit"
        />
      </div>
    );
  } catch (e) {
    console.trace();
    console.log(e);
    return null;
  }
};

export default VisualizerPage;
