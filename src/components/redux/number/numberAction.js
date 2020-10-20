import Axios from "axios";
import { endLoading, startLoading } from "../loading/loadingAction";

export const GET = 'GET';
export const ERROR = 'ERROR';

export function getData(numbervalue){
    return async(dispatch) =>{
        try{
            dispatch(startLoading())
            const response = await Axios(`http://numbersapi.com/${numbervalue}/math`) ;
            dispatch({
                type: GET,
                payload: response.data
            })
            dispatch(endLoading())
        }
        catch(error){
            dispatch({
                type: ERROR,
            })
            dispatch(endLoading())
        }
    }
}