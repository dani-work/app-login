import { types } from "../types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login: return true;
        case types.logout: return false;
        default: return false;
    }
}