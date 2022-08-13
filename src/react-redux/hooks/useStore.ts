import {useReduxContext} from "./useSelector";

export const useStore = () => {
    const storeContext = useReduxContext()
    return storeContext
}