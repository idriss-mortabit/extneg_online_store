import {SEARCH_TERM_TO_FILTER} from "../actions";

export const  searchFilterReducer = (state = '', action) => {
    switch (action.type) {
        case SEARCH_TERM_TO_FILTER:
            // console.log("the reducer is here working!!!", action.searchTerm)
            // if(state.includes(action.searchTerm)) return state;
            state = action.searchTerm;
            return state
        default:
            return state;
    }
};

