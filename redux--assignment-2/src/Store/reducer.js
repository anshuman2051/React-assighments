import * as actionTypes from './actions';
const initialState = {
    persons: []
}
const reducer =(state = initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_PERSON:
            const tempPerson = {
                    id : Math.random(),
                    name: 'max',
                    age: Math.floor(Math.random()*40),   
            };
            return {
                ...state,
                persons: state.persons.concat(tempPerson)
            }; 
        case actionTypes.DELETE_PERSON:
            const filteredPersons  = state.persons.filter(person => person.id !== action.id);
            return {
                ...state,
                persons : filteredPersons
            };
       default:
        return state;
    }
}

export default reducer;