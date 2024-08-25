let initialState = {
    count: 0,
    id:"",
    password:"",
};


function reducer(state = initialState, action){
    console.log("액션은 뭘까?",action);
    if(action.type == "INCREMENT") {
        return { ...state, 
            count: state.count + action.payload.num 
        };
    }
    if(action.type == "LOGIN") {
        return { 
            ...state, 
            id:action.payload.id, 
            password:action.payload.password
        };
    }
    if("DECREMENT") {
        return { ...state, count: state.count -1 };
    }

    return {...state};
};



export default reducer
