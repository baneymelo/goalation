import { AUTH_TYPES } from "../types";

const { AUTH, UNAUTH } = AUTH_TYPES;

const AuthReducer = (auth, action) => {

    const { type, payload } = action;

    switch (type) {
        case AUTH:
            return { isLogged: payload.logged, isLoading: false, session: payload.session };
    
        case UNAUTH:
            return { isLogged: payload, isLoading: true, session: {} };
    
        default:
            return auth;
    }
}

export default AuthReducer;