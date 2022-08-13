import {createStore} from "./redux";

const INITIAL_STATE = {
    value: 10
}

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                value: state.value - 1
            }
        }
        default:
            return state
    }
}

export const store = createStore(reducer)