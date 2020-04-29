const initialState = {
    counter: 0
}

const reducer = (state = initialState, action)=>{
    if( action.type === "INCREMENT"){
        return {
            counter: state.counter + 1
        }
    }
    if( action.type === "DECREMENT"){
        return {
            counter: state.counter - 1
        }
    }
    if( action.type === "ADDED"){
        return {
            counter: state.counter + action.value 
        }
    }
    if( action.type === "SUBTRACTED"){
        return {
            counter: state.counter - action.value 
        }
    }
    return state;
}

export default reducer;