import React from "react";
import "./App.css";
import { ButtonGroup, Button } from "@blueprintjs/core";

interface IProps {
  className?: string;
  onFirst: () => void;
  onLast: () => void;
  onNext: () => void;
  onPrevious: () => void;
  stepNumber: number;
  totalSteps: number;
}

const NavigationBar = (props: IProps) => {
  const {
    className,
    onFirst,
    onLast,
    onNext,
    onPrevious,
    stepNumber,
    totalSteps
  } = props;

  const onFirstStep = stepNumber === 0;
  const onLastStep = stepNumber === totalSteps - 1;
  return (
    <div className={className}>
      <ButtonGroup>
        <Button disabled={onFirstStep} text="<<First" onClick={onFirst} />
        <Button disabled={onFirstStep} text="<Previous" onClick={onPrevious} />
        <Button disabled={onLastStep} text="Next>" onClick={onNext} />
        <Button disabled={onLastStep} text="Last>>" onClick={onLast} />
      </ButtonGroup>
      <br />
      <p>
        Step {stepNumber + 1} of {totalSteps}
      </p>
    </div>
  );
};

export default NavigationBar;
