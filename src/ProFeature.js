import React from 'react';



//Higher order component is functional component that accepts a component and returns a new component that wraps around it to provide additional features.

//ProFeature accepts a component that should be presented to the user only when the value of the prop named pro is true, acting as a simple authorization feature. To display the component, the render method uses the component received as the function argument and passes on all of its props, exept the named pro.
export function ProFeature(  props  /*FeatureComponent*/) {

    //to use render props it shouldn't return a function! so the inner function definitioin was commented out:
    // return function (props) {


        if (props.pro) {

            //the parent component provides a function for the render prop, when it applies the component
            return props.render("PRO FEATURE");

            ////This is the initial HOC (FeatureComponent should be the parameter to the ProFeature function):
            // let {pro, ...childProps} = props;
            // return <FeatureComponent {...childProps}/>
        } else {
            return (
                <h5 className="bg-warning text-white text-center">
                    This is a pro feature
                </h5>
            );
        }
    // }
}