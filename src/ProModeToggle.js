import React from "react";
import {ProModeContext} from "./ProModeContext";

export class ProModeToggle extends React.Component {
    static contextType = ProModeContext; // contextType property is a simplified Context API, it is available throughout the component as this.context

    render() {

        return (
            // //receives context state directly form the App component
            // <ProModeContext.Consumer>
            //     {
            //         (contextData)=>(
            //             <div className="form-check">
            //                 <input type="checkbox"
            //                        className="form-check-input"
            //                        value={contextData.proMode}
            //                        onChange={contextData.toggleProMode}
            //                 />
            //                 <label className="form-check-label">
            //                     {this.props.label}
            //                     </label>
            //             </div>
            //         )
            //     }
            // </ProModeContext.Consumer>

            //simplified context API:
            <div className="form-check">
                <input type="checkbox" className="form-check-input"
                       value={this.context.proMode}
                       onChange={this.context.toggleProMode}
                />
                <label className="form-check-label">{this.props.label}</label>
            </div>
        );
    }
}