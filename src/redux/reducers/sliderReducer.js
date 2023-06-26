import { SET_ACTIVE_SLIDE } from "../constants";

const initialState = {
    activeSlide: 0
}

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_SLIDE:
            return {
                ...state,
                activeSlide: action.slideIndex
            };
            default:
                return state;
    }
}

export default sliderReducer;