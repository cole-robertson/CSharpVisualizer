import React from "react";
import "../App.css";
import { IVariable, Dictionary } from "../Interfaces";
import Variable from "./Variable";

interface IProps {
  funcName?: string;
  variables: Dictionary<IVariable>;
}

const VariableList = (props: IProps) => {
  const { funcName, variables } = props;
  return (
    <div className="layout-column">
      {Object.keys(variables).map(varName => {
        const varValue: IVariable = variables[varName];
        return (
          <Variable
            funcName={funcName}
            key={varName}
            varName={varName}
            varValue={varValue}
          />
        );
      })}
    </div>
  );
};

export default VariableList;
