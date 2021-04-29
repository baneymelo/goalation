import { USER_TYPES } from "../types";

const { LOGIN, REGISTER, LOGOUT } = USER_TYPES;

const UserReducer = (user, action) => {

    const { type, payload } = action;

    switch (type) {
        case LOGIN:
            return payload;
    
        case REGISTER:
            return { 
                ...user, 
                email: payload.email,
                fullname: payload.fullname,
                user_type: payload.user_type
            };
    
        case LOGOUT:
            return payload;
    
        default:
            return user;
    }
}

export default UserReducer;