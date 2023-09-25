import {DELETE_USER, FETCH_USER_SUCCESS, LOGIN_SUCCESS} from "./action";


const initialState = {
    users: [],
    userlogined: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, userlogined: action.payload };
        case FETCH_USER_SUCCESS:
            return { ...state, users: action.payload };
        case DELETE_USER:
            return { ...state, users: action.payload};
        default:
            return state;
    }
};
export default rootReducer;