import { SET_LANG, SET_LANG_SUCCESS, SET_LANG_FAILURE } from "../constants";
import { SET_ACTIVE } from "../constants";
import { SET_ACTIVE_SLIDE } from "../constants";

// language reducer actions
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

  // button reducer actions
  export const setActive = (isActive) => ({
    type: SET_ACTIVE,
    isActive: isActive
  });

  // slider reducer actions
  export const setActiveSlide = (slideIndex) => ({
    type: SET_ACTIVE_SLIDE,
    slideIndex: slideIndex
  });
