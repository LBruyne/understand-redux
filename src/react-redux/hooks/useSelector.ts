import ReactReduxContext from "../Context";
import {useContext} from "react";

export const useReduxContext = () => {
    return useContext(ReactReduxContext)
}

export const useSelector = (selector: any) => {
    // 从context中获取store
    const storeContext = useReduxContext() as any
    return selector(storeContext.getState())
}