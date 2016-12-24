import { combineReducers } from 'redux';

// Import custom reducers

const delMe = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const combinedReducer = combineReducers({
    delMe
});

export default combinedReducer;