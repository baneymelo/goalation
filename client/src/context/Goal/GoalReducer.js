import { GOAL_TYPES } from "../types";

const { SAVE, LOAD, EDIT } = GOAL_TYPES;

const GoalReducer = (goal, action) => {

    const { type, payload } = action;

    switch (type) {
        case SAVE:
            return goal.push(payload);
    
        case LOAD:
            return payload;
    
        case EDIT:
            return payload;
    
        default:
            return goal;
    }
}

export default GoalReducer;