import { USER_TYPES } from "../types";

const { LOGIN, REGISTER, LOGOUT } = USER_TYPES;

const UserReducer = (user, action) => {

    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return payload;
    
        case REGISTER:
            return payload;
    
        case LOGOUT:
            return payload;
    
        default:
            return user;
    }
}

export default UserReducer;