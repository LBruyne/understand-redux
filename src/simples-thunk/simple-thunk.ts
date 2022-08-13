const simpleThunk = ({dispatch, getState}: any) => (next: any) => (action: any) => {
    if(typeof action === 'function') {
        return action(dispatch, getState)
    }
    console.log('action is not a function')
    return next(action)
}

export default simpleThunk