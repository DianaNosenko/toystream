const initial = {
    lang: 'en'
}

const langReducer = (state = initial, action) => {
    switch (action.type) {
        case 'SWITCH_LANGUAGE':
            return {
                ...state,
                lang: action.lang
            }
            default: return state;
    }
}