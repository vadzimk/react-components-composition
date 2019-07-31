import React from 'react';
import {GeneralList} from "./GeneralList";
import {ActionButton} from "./ActionButton";

import {ProModeContext} from "./ProModeContext";
import {ErrorBoundry} from "./ErrorBoundry";

export class SortedList extends React.Component {

    state = {
        sort: false
    };


    getList = () => {
        return this.state.sort ? [...this.props.list].sort() : this.props.list;
    };

    toggleSort = () => {
        this.setState({
            sort: !this.state.sort
        })
    };


    render() {


        return (

            <div>
                <ErrorBoundry>
                    <GeneralList
                        list={this.getList()}
                        theme="info"
                    />
                    <div className="text-center m-2">
                        <ActionButton
                            theme="primary"
                            text="Sort"
                            proMode={this.props.proMode}
                            callback={this.toggleSort}
                        />
                    </div>
                </ErrorBoundry>
            </div>
        );
    }
}