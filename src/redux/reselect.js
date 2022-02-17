import {createSelector} from "reselect";

const getUserState = (state)=>state.userReducer;

const makeSelector = createSelector( getUserState, (userReducer)=>userReducer.users);

export {makeSelector};


const getSecondState = (state)=>state.secondReducer;

const secondMakeSelector = createSelector(getSecondState, (secondReducer)=>secondReducer.user);

export {secondMakeSelector};
