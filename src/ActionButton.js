import React from 'react';
import {ProModeContext} from "./ProModeContext";

export class ActionButton extends React.Component {

    state={
      clickCount: 0,
    };


    handleClick=()=>{
        this.setState({clickCount: this.state.clickCount + 1});
        this.props.callback()
    };

    getClasses = (proMode) => {
        console.log("PRops: " + this.props.proMode);
        let col = proMode ? this.props.theme : "danger";
        return `btn btn-${col} m-2`;
    };

    render() {

        return (

            //Context consumer:
            <ProModeContext.Consumer>
                { (contextData)=> //contextData - can be any name - is a context object with state properties
                { if (this.state.clickCount>1)
                        throw new Error("Click Counter Error");
                   return (
                    <button
                        // className={`btn btn-${this.props.theme} m-2`}
                        className={this.getClasses(contextData.proMode)}
                        disabled={!contextData.proMode}
                        onClick={this.handleClick}
                    >
                        {this.props.text}
                    </button>)
                }}
            </ProModeContext.Consumer>
        //
        // {/*<button*/}
        // {/*// className={`btn btn-${this.props.theme} m-2`}*/}
        // {/*className={this.getClasses(this.props.proMode)}*/}
        // {/*disabled={!this.props.proMode}*/}
        // {/*onClick={this.props.callback}*/}
        // {/*>*/}
        // {/*{this.props.text}*/}
        // {/*</button>*/}
        );
    }


}
