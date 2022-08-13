import {useReduxContext} from "./useSelector";

export const useDispatch = () => {
    const storeContext = useReduxContext() as any
    return storeContext.dispatch
}