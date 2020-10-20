import { GET,ERROR } from './numberAction';

export default function numberReducer(state={},action){
    switch(action.type){
        case GET:
            return {data:action.payload}
        case ERROR:
            return {error: 'There is not result found!! You must type a number'}
        default:
            return state
    }
}

