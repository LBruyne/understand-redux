function combineReducers(reducers: any) {
    const reducerKeys = reducers.keys
    return function (state: any = {}, action: any) {
        const nextState: any = {}

        reducerKeys.forEach((key: any) => {
            const reducer = reducers[key]
            nextState[key] = reducer(state[key], action)
        })

        return nextState
    }
}

export default combineReducers