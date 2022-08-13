import {createContext} from "react";

const ReactReduxContext = createContext({})

if (process.env.NODE_ENV !== 'production') {
    ReactReduxContext.displayName = 'ReactRedux'
}

export default ReactReduxContext