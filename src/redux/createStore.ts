import isPlainObject from "./utils/isPlainObject";
import actionTypes from "./utils/actionTypes";

const createStore = (reducer: any, preloadState?: any, enhancer?: any) => {
    // 不传preloadState，只传enhancer
    if (typeof preloadState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadState
        preloadState = undefined
    }

    // enhancer必须为function，就是重写createStore的方法
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.')
        }
        return enhancer(createStore)(reducer, preloadState)
    }

    let currentState = preloadState
    let currentListeners: any[] = []
    let isDispatching = false

    const getState = () => currentState

    const dispatch = (action: any) => {
        // action必须为对象 PlainObject
        if(!isPlainObject(action)) {
            throw new Error('Action must be plain object.')
        }

        // 防止多次dispatch请求同时改状态
        if (isDispatching) {
            throw new Error('Reducers may not dispatch actions.')
        }

        try {
            isDispatching = true
            currentState = reducer(currentState, action) // Use reducer to update the state
        } finally {
            isDispatching = false
        }

        currentListeners.forEach((listener) => {
            listener() // For each listener, notify it
        })

        // 返回action
        return action
    }

    const subscribe = (listener: any) => {
        // listener必须为function，可执行
        if (typeof listener !== 'function') {
            throw new Error('Expected listener to be a function.')
        }

        currentListeners.push(listener) // Add listener into an array

        // 返回一个unsubscribe的方法
        return function unsubscribe() {
            currentListeners = currentListeners.filter(thisListener => thisListener !== listener);
        }
    }

    // initialize
    dispatch({
        type: actionTypes.INIT
    })

    return {
        dispatch,
        subscribe,
        getState,
    }
}

export default createStore