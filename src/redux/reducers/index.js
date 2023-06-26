import { combineReducers } from 'redux';
import langReducer from './langReducer';
import buttonReducer from './buttonReducer';
import sliderReducer from './sliderReducer';

const reducer = combineReducers({
    langReducer,
    buttonReducer,
    sliderReducer

});

export default reducer;