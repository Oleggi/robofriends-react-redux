import { SET_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING, 
        REQUEST_ROBOTS_SUCCESS, 
        REQUEST_ROBOTS_FAILED } 
        from "./constants";

let initialSearchFieldState = {
    searchField: ""
};

export const searchFieldReducer = (state=initialSearchFieldState, action={}) => {
    switch (action.type) {
        case SET_SEARCH_FIELD:
            return {
                ...state, 
                searchField: action.payload
            };
            default: 
            return state;
    };
};

let initialRobotsDataState = {
    robots: [],
    isPending: false,
    errorMesssage: ""
};

export const requestRobotsReducer = (state=initialRobotsDataState, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true
            };
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload, isPending: false
            };
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                errorMessage: action.payload
            }
            default:
                return state;
    }
};