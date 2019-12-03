import React from 'react';
import './App.css';
import AceEditor, { IMarker } from 'react-ace';
import { Button, Intent} from "@blueprintjs/core";

import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { postCodeToAPI } from './CallAPI';
import { IStackTrace } from './Interfaces';
import StackTraceView from './StackTraceView';

interface IProps{}

interface IState{
    code: string;
    stackTraces: IStackTrace[]
}

export default class VisualizerPage extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            code: "",
            stackTraces: []
        }
    }

    public render(){
        const markers: IMarker[] = [];
        let syntaxError: string | undefined; 
        if(this.state.stackTraces.length === 1 && this.state.stackTraces[0].exception_msg){
            const syntaxErrorTrace = this.state.stackTraces[0];
            syntaxError = syntaxErrorTrace.exception_msg;
            const marker: IMarker = {
                startCol: 0,
                endCol: 1,
                startRow: syntaxErrorTrace.line || 1,
                endRow: syntaxErrorTrace.line || 1,
                className: "high`light-red",
                type: "text",
                inFront: true
            };
            markers.push(marker);
        }
        return(
            <>
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
                    onChange={(code) => this.setState({code})}
                    setOptions={{   
                        showLineNumbers: true,
                        tabSize: 2,
                        }}
                    value={this.state.code}
                    markers={markers}
                />
                 <StackTraceView
                    stackTraces={this.state.stackTraces}
                    syntaxError={syntaxError}
                />
                <Button 
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={this.postCodeToStackTrace}
                    text="Submit"
                />
            </>
        )
    }

    private postCodeToStackTrace = async() => {
        const { code } = this.state;
        const stackTraces: IStackTrace[] = await postCodeToAPI(code);
        this.setState({stackTraces})
    }
}