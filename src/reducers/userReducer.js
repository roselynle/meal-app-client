const initialState = {
    loggedIn: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return { ...state, loggedIn: true };
        case "LOG_OUT":
            return { ...state, loggedIn: false };
        case "SET_ERROR":
            return {
                ...state,
                err: action.payload,
                loggedIn: false,
            };
        default:
            return state;
    }
};

export default userReducer;
