import React from 'react';

// Context is the mechanism by which the state data is distributed.
//     Contexts can be defined anywhere in the application.
//is used as a default object

export const ProModeContext = React.createContext(
    {
        proMode: false,
        toggleProMode: ()=>{}
    }
);