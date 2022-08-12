// applyMiddleware 将一系列中间件应用于store中的dispatch方法上，重写了dispatch
import compose from "./compose";

export default function applyMiddleware(...middlewares: any[]) {
    // 返回重写createStore的方法
    return (oldCreateStore: any) => {
        // 返回新的createStore
        return (reducer: any, preloadState: any) => {
            const store = oldCreateStore(reducer, preloadState)
            let dispatch = () => {
                throw new Error(
                    'Dispatching while constructing your middleware is not allowed. ' +
                    'Other middleware would not be applied to this dispatch.'
                )
            }

            // 给每个中间件传入需要的参数，但不传入store
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action: any) => store.dispatch(action)
            }

            // 给每个中间件传入参数
            const chain = middlewares.map(middleware => middleware(middlewareAPI))
            dispatch = compose<typeof dispatch>(...chain)(store.dispatch)

            return {
                ...store,
                dispatch
            }
        }
    }
}
