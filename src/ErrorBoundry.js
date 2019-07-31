import React from 'react';

export class ErrorBoundry extends React.Component {

    state = {

        errorThrown: false,
    };

    //componentDidCatch method receives the error object thrown by the problem component and an additional information object that provides the component's stack trace, which can be useful for logging.
    //when an error is recieved by the  component React will envoke the componentDidCatch method and after the render method
    componentDidCatch = (error, info)=>{
        this.setState(
            {
                errorThrown: true,
            }
        );
    };




    render() {

        return (
            <>
                {this.state.errorThrown &&
                    <h3 className="bg-danger text-white text-center m-2 p-2">
                        Error Detected
                    </h3>
                }
                {this.props.children}
            </>
        );
    }
}