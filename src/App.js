import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Message} from "./Message";
import {ActionButton} from "./ActionButton";
import {ThemeSelector} from "./ThemeSelector";
import {GeneralList} from "./GeneralList";
import {SortedList} from "./SortedList";
import {ProFeature} from "./ProFeature";
import {ProController} from "./ProController";
import {LogToConsole} from "./LogToConsole";
import {ProModeContext} from "./ProModeContext";
import {ProModeToggle} from "./ProModeToggle";

//HOCs are used to create new components by invoking the function like this:
const ProList = ProFeature(SortedList);
//const ProListStateful = ProController(SortedList);

//*** Combined HOC: ****
//const ProListStateful = ProController(LogToConsole(SortedList, "Sorted", true, true, true));

export default class App extends React.Component {

    constructor(props){
        super(props);
            this.state = {
                counter: 0,
                names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
                cities: ["London", "New York", "Paris", "Milan", "Boston"],
                proMode: false,
                proContextData: {
                    proMode: false,
                    toggleProMode: this.toggleProMode
                },
                superProContextData: {
                    proMode: false,
                    toggleProMode: this.toggleSuperMode
                }

        }
    }



    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };


    toggleProMode = () => {
        // this.setState({
        //     proMode: !this.state.proMode
        // })


        //for nested state properties use the setState function that accepts a function argument
        this.setState(
            (state) => state.proContextData.proMode = !state.proContextData.proMode
        );
    };

    toggleSuperMode = () => {
        this.setState(
            (state) => state.superProContextData.proMode = !state.superProContextData.proMode
        );
    };


    render() {
        return (
            <>
                {/*<div className="m-2 text-center">*/}
                {/*/!** ThemeSelector acts as a container for the content of the App **!/*/}
                {/*<ThemeSelector>*/}
                {/*<Message*/}
                {/*theme="primary"*/}
                {/*message={`Counter: ${this.state.counter}`}/>*/}
                {/*<ActionButton*/}
                {/*theme="secondary"*/}
                {/*text="Increment"*/}
                {/*callback={this.incrementCounter}/>*/}
                {/*</ThemeSelector>*/}
                {/*</div>*/}

                {/********************* Context **********************/}
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-6 text-center p-2">
                            <ProModeContext.Provider value={this.state.proContextData}>
                                <ProModeToggle label="Pro mode!"/>
                            </ProModeContext.Provider>
                        </div>
                        <div className="col-6 text-center p-2">
                            <ProModeContext.Provider value={this.state.superProContextData}>
                                <ProModeToggle label="Super Pro mode!"/>
                            </ProModeContext.Provider>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <ProModeContext.Provider value={this.state.proContextData}>
                                <SortedList list={this.state.names}/>
                            </ProModeContext.Provider>
                        </div>
                        <div className="col-6">
                            <ProModeContext.Provider value={this.state.superProContextData}>
                                <SortedList list={this.state.cities}/>
                            </ProModeContext.Provider>
                        </div>
                    </div>

                </div>

                {/************** Specialized component *******/}
                {/*<div className="container-fluid">*/}
                {/*<div className="row">*/}
                {/*<div className="col-6">*/}
                {/*<GeneralList list={this.state.names} theme="primary"/>*/}
                {/*</div>*/}
                {/*<div className="col-6">*/}

                {/*/!*Inside ProModeContext.Provider components can access state data directly by using the ProModeContext.Consumer element. In this code it means that App component's state property is available directly in the ActionButton component without being threaded through the SortedList.js component*/}

                {/*The value property is used to override the defaults defined in ProModeContext.js file*!/*/}
                {/*<ProModeContext.Provider value={this.state.proContextData}>*/}
                {/*<SortedList list={this.state.names}*/}
                {/*// proMode={this.state.proMode}*/}
                {/*/>*/}
                {/*</ProModeContext.Provider>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/********** Higher order components (functional) **********/}
                {/*<div className="container-fluid">*/}
                {/*<div className="row">*/}
                {/*<div className="col-12 text-center p-2">*/}
                {/*<div className="form-check">*/}
                {/*<input*/}
                {/*type="checkbox"*/}
                {/*className="form-check-input"*/}
                {/*value={this.state.proMode}*/}
                {/*onChange={this.toggleProMode}*/}
                {/*/>*/}
                {/*<label className="form-check-label">Pro Mode</label>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*<div className="col-3">*/}
                {/*<GeneralList*/}
                {/*list={this.state.names}*/}
                {/*theme="primary"*/}
                {/*/>*/}
                {/*</div>*/}
                {/*<div className="col-3">*/}
                {/*<ProList*/}
                {/*list={this.state.names}*/}
                {/*pro={this.state.proMode}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*<div className="col-3">*/}
                {/*<ProList*/}
                {/*list={this.state.cities}*/}
                {/*pro={this.state.proMode}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/*** Higher order class-based stateful component ***/}
                {/*<div className="container-fluid">*/}
                {/*<div className="row">*/}
                {/*<div className="col-6">*/}
                {/*<ProListStateful list={this.state.names}/>*/}
                {/*</div>*/}
                {/*<div className="col-6">*/}
                {/*<ProListStateful list={this.state.cities}/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

                {/***** Using Render prop ****/}
                {/*<div className="container-fluid">*/}
                {/*<div className="row">*/}
                {/*<div className="col-6">*/}
                {/*<ProFeature*/}
                {/*pro={this.state.proMode}*/}
                {/*render={(text)=>*/}
                {/*<>*/}
                {/*<h4 className="text-center">{text}</h4>*/}
                {/*<SortedList list={this.state.names}*/}
                {/*/>*/}
                {/*</>*/}
                {/*}/>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </>
        );
    }
}
