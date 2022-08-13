import React from 'react';
import {store} from "./count";
import {useSelector} from "./react-redux";

// The sample code copied from redux.js.org
const App = () => {

    const {value} = useSelector((rootState: any) => rootState)

    const handleDecrement = () => {
        store.dispatch({
            type: 'DECREMENT'
        })
    }

    const handleIncrement = () => {
        store.dispatch({
            type: 'INCREMENT'
        })
    }

    return (
        <div>
            <p>
                Clicked: <span id="value">{value}</span> times
            </p>
            <button id="increment" onClick={handleIncrement}>+</button>
            <button id="decrement" onClick={handleDecrement}>-</button>
            {/*<button id="incrementIfOdd">Increment if odd</button>*/}
            {/*<button id="incrementAsync">Increment async</button>*/}
        </div>
    )
}

export default App
// mapStateToProps 将状态加入组建属性
// mapDispatchToProps 将dispatch加入
// export default connect(mapStateToProps, mapDispatchToProps)(App);