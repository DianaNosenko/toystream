import { SET_LANG, SET_LANG_SUCCESS, SET_LANG_FAILURE } from "../constants";

export const setLang = (lang) => ({
    type: SET_LANG,
    lang: lang,
  });
  
  export const setLangSuccess = (lang) => ({
    type: SET_LANG_SUCCESS,
    lang: lang,
  });
  
  export const setLangFailure = (e) => ({
    type: SET_LANG_FAILURE,
    lang: e,
  });