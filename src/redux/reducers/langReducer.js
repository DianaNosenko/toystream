import {SET_LANG, SET_LANG_SUCCESS, SET_LANG_FAILURE} from '../constants';

const initialState = {
    lang: 'en', 
    loading: false,
    err: null, 
  };
  

  const langReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LANG:
        return {
          ...state,
          lang: action.lang,
          loading: true, 
          err: null, 
        };
      case SET_LANG_SUCCESS:
        return {
          ...state,
          lang: action.lang, 
          loading: false, 
          err: null, 
        };
      case SET_LANG_FAILURE:
        return {
          ...state,
          loading: false, 
          err: action.lang, 
        };
      default:
        return state;
    }
  };
  
  export default langReducer;