import React from 'react';
import './App.css';
import { IStackTrace, Dictionary } from './interfaces';
import { Button } from '@blueprintjs/core';
import { ArcherContainer, ArcherElement } from 'react-archer';


interface IProps {
    stackTraces: IStackTrace[]
    syntaxError?: string;
}
interface IState {
    globals: Dictionary<string>;
    heapVariables: Dictionary<string[]>;
    stepNumber: number;
}

export default class StackTraceView extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            globals: {},
            heapVariables: {},
            stepNumber: 0
        }
    }
    
    public render() {
        const exampleHeapTrace: IStackTrace[] = [
            {
                ordered_globals: [
                  "x"
                ], 
                stdout: "", 
                func_name: "<module>", 
                stack_to_render: [], 
                globals: {
                  "x": [
                    "REF", 
                    1
                  ]
                }, 
                heap: {
                  "1": [
                    "LIST", 
                    1, 
                    2, 
                    3
                  ]
                }, 
                line: 2, 
                event: "step_line"
              },
              {
                ordered_globals: [
                  "x", 
                  "y", 
                  "z"
                ], 
                stdout: "", 
                func_name: "<module>", 
                stack_to_render: [], 
                globals: {
                  "y": [
                    "REF", 
                    2
                  ], 
                  "x": [
                    "REF", 
                    1
                  ]
                }, 
                heap: {
                  "1": [
                    "LIST", 
                    1, 
                    2, 
                    3
                  ],
                  "2": [
                    "DICT", 
                    [
                      "carrot", 
                      "vegetable"
                    ], 
                    [
                      "mouse", 
                      "animal"
                    ], 
                    [
                      "rock", 
                      "mineral"
                    ]
                  ]
                }, 
                line: 3, 
                event: "return"
              }
        ]
        // const exampleHeapTrace: IStackTrace[] = [
        //     {
        //         ordered_globals: [], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {}, 
        //         heap: {}, 
        //         line: 1, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [
        //           "x"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "x": 5
        //         }, 
        //         heap: {}, 
        //         line: 2, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [
        //           "x", 
        //           "y"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "y": 10, 
        //           "x": 5
        //         }, 
        //         heap: {}, 
        //         line: 3, 
        //         event: "step_line"
        //       }, 
        //       {
        //         ordered_globals: [
        //           "x", 
        //           "y", 
        //           "z"
        //         ], 
        //         stdout: "", 
        //         func_name: "<module>", 
        //         stack_to_render: [], 
        //         globals: {
        //           "y": 10, 
        //           "x": 5, 
        //           "z": 15
        //         }, 
        //         heap: {}, 
        //         line: 3, 
        //         event: "return"
        //       }
        // ]
        const currentTrace: IStackTrace = exampleHeapTrace[this.state.stepNumber];
        let globals = currentTrace.globals;
        if(globals){

        }
        const heap = currentTrace.heap;
        const heapElements: Dictionary<JSX.Element> = {}
        if(heap){
            Object.keys(heap).forEach(objIdx => {
                const heapTrace = heap[objIdx];
                const objectType = heapTrace.splice(0, 1)[0];
                if(typeof objectType === "string"){
                    switch(objectType){
                        case "ARRAY" :
                        case "LIST" : {
                            heapElements[objIdx] = 
                                <div>
                                {objectType}
                                {heapTrace.map((value, index) => {
                                    return (<div className="layout-column">
                                        {index} :
                                        {value}
                                    </div>);
                                })}
                                </div>
                            break;
                        }
                        case "DICT" : {
                            heapElements[objIdx] = 
                                <div>
                                    {objectType}
                                    {heapTrace.map((value) => {
                                        if(Array.isArray(value)){
                                            return(
                                                <div className="layout-columns">
                                                    {value[0]} : 
                                                    {value[1]}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                break;
                        }
                    }
                }
            })    
        }
        return(
            <>
                <span>{this.props.syntaxError}</span>
                <ArcherContainer strokeColor="red">
                    <div className="layout-row">
                        <div className="layout-column">
                            Globals:
                            {globals && Object.keys(globals).map(varName => {
                                if(globals){
                                    const globalValue: string | number | (string | number)[] = globals[varName];
                                    if(typeof globalValue !== "string" && typeof globalValue !== "number"){
                                        const referenceValue = globalValue[1];
                                        return(
                                            <ArcherElement
                                                id={`starting-${globals[varName]}`}
                                                relations={[
                                                    {
                                                        targetId: `heap-${referenceValue}`,
                                                        targetAnchor: "left",
                                                        sourceAnchor: "right"
                                                    }
                                                ]}
                                                key={`starting-${globals[varName]}`}
                                            >
                                                <div>
                                                    {varName} : {referenceValue}
                                                </div>
                                            </ArcherElement>
                                        );
                                    }
                                }
                                
                                if(globals){
                                    return(
                                        <div key={`global-${globals[varName]}`}>
                                            {varName} : {globals[varName]}
                                        </div>
                                    )
                                }
                                return null;
                            })}
                        </div>
                        <div className="layout-column" style={{paddingLeft: "40px"}}>
                            Heap:
                            {heap && Object.keys(heap).map(varName => {
                                return(
                                    <ArcherElement
                                        style={{border: "2px solid black"}}
                                        id={`heap-${varName}`}
                                        key={`heap-${varName}`}
                                    >
                                        {heapElements[varName]}
                                    </ArcherElement>
                                )
                            })}
                        </div>
                    </div>
                </ArcherContainer>
                <Button 
                    disabled={this.state.stepNumber === 0}
                    text="<<First"
                    onClick={() => this.setState({stepNumber: 0})}
                />
                <Button 
                    disabled={this.state.stepNumber === 0}
                    text="<Previous"
                    onClick={() => this.setState({stepNumber: this.state.stepNumber - 1})}
                />
                <Button 
                    // {this.state.stepNumber === this.props.stackTraces.length - 1}
                    disabled={this.state.stepNumber === exampleHeapTrace.length - 1}
                    text="Next>"
                    onClick={() => this.setState({stepNumber: this.state.stepNumber + 1})}
                />
                <Button 
                    disabled={this.state.stepNumber === exampleHeapTrace.length - 1}
                    text="Last>>"
                    onClick={() => this.setState({stepNumber: exampleHeapTrace.length - 1})}
                />
            </>
        );
    }
}