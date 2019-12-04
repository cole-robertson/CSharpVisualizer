import React from "react";

interface IProps {
  stdout: string | undefined;
}

const StdoutView = (props: IProps) => {
  const { stdout } = props;
  return (
    <div className="layout-column">
      Stdout:
      {stdout &&
        stdout.split("\n").map(part => {
          return (
            <>
              <span>{part}</span>
            </>
          );
        })}
    </div>
  );
};

export default StdoutView;
