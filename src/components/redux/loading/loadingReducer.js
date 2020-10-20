import { END_LOADING, START_LOADING } from "./loadingAction";

export default function loadingReducer(state=false,action){
    switch(action.type){
        case START_LOADING:
            return true
        case END_LOADING:
            return false
        default:
            return state
    }
}