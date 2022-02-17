import {createStore, combineReducers} from "redux"


//action type

const ADD_USER = "ADD USERS";
const ADD_USER_DETAIL = "ADD USER DETAIL"




export const  userActionCreator = (users)=>{
    return {type: ADD_USER, user:users};
}


export const secondActionCreator = (user)=>{
    return {type:ADD_USER_DETAIL,user:user}
};

// the code below here is the reducer

const stateDefault = {
    users:[]
};

const userReducer = (state=stateDefault, action)=>{

    switch(action.type){
        case ADD_USER:
            return {...state,users:action.user};
        default:
            return state;
    }
};

const secondDefaultState = {
    user:[]
}

const secondReducer =(state=secondDefaultState, action)=>{
    switch(action.type){
        case ADD_USER_DETAIL:
            return {...state,user:action.user};
        default:
            return state
    }
}


// the code below here is for the combine reducer
const combineReducer = combineReducers({
    userReducer: userReducer,
    secondReducer: secondReducer
});

// the code below here is for the state

 


export default createStore(combineReducer);