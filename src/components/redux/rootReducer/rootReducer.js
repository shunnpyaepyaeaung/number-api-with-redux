import numberReducer from '../number/numberReducer';
import {combineReducers} from 'redux';
import loadingReducer from '../loading/loadingReducer';
var combine = {
    number: numberReducer,
    loading: loadingReducer
}

export default combineReducers(combine)