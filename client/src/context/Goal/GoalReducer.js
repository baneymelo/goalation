import { GOAL_TYPES } from "../types";

const { SAVE, LOAD } = GOAL_TYPES;

const GoalReducer = (goal, action) => {

    const { type, payload } = action;

    switch (type) {
        case SAVE:
            return [...goal, payload ];
    
        case LOAD:
            return payload;
    
        default:
            return goal;
    }
}

export default GoalReducer;