import React from 'react';
import {ProFeature} from "./ProFeature";



//HOC function returns a class based stateful component that presents a checkbox and uses the ProFeature HOC to control visibility of the wrapped component
export function ProController(FeatureComponent){
    const ProtectedFeature = ProFeature(FeatureComponent);


    return class extends React.Component{
        state={
            proMode: false,
        };

        toggleProMode=()=>{
            this.setState({
                proMode: !this.state.proMode,
            })
        };

        render(){


            return(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center p-2">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    value={this.state.proMode}
                                    onChange={this.toggleProMode}
                                />
                                <label className="form-check-label">Pro mode</label>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ProtectedFeature
                                {...this.props}
                                pro={this.state.proMode}
                            />
                        </div>
                    </div>
                </div>
            );
        }

    }
}