import React from "react";
import "./App.css";
import VisualizerPage from "./VisualizerPage";

interface IState {}

export default class App extends React.Component<{}, IState> {
  render() {
    return (
      <div className="App">
        <VisualizerPage />
      </div>
    );
  }
}
