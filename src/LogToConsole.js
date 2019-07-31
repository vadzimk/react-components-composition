import React from 'react';


//Combining HOCs:
//to apply the new HOC we only change the function that creates the wrapped component in the App.js file
export function LogToConsole(FeatureComponent, label, logMount, logRender, logUnmount){

    return class extends React.Component{

        componentDidMount(){
            if(logMount){
                console.log(`${label}: mount`);
            }
        }

        componentWillUnmount(){
            if(logUnmount){
                console.log(`${label}: unmount`);
            }
        }

        render(){

            if(logRender){
                console.log(`${label}: render`);
            }

            return <FeatureComponent {...this.props}/>;
        }
    }
}