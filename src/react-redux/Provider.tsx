import ReactReduxContext from "./Context";
import {useEffect, useState} from "react";

export default function Provider({store, defaultContext, children}: any) {

    const [contextValue, setContextValue] = useState(store)

    useEffect(() => {
        const removeListen = store.subscribe(() => {
            setContextValue({...store })
        })

        return () => removeListen()
    }, [contextValue])

    // 从参数中获取context，如果没有则获取空context
    const Context = defaultContext || ReactReduxContext

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}