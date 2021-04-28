import { AUTH_TYPES } from "../types";

const { AUTH, UNAUTH } = AUTH_TYPES;

const AuthReducer = (auth, action) => {

    const { type, payload } = action;

    switch (type) {
        case AUTH:
            return payload;
    
        case UNAUTH:
            return { logged: payload };
    
        default:
            return auth;
    }
}

export default AuthReducer;