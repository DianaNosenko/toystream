import { SET_ACTIVE } from "../constants";

const initialState = {
    active: false
}

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE:
            return {
                ...state,
                active: action.isActive
            };
            default:
                return state;
    }
}

export default buttonReducer;