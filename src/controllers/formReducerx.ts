import { useReducer } from 'react';

const formReducer = () => { 

    const INITIAL_STATE = {
        showForm: false,
        inputNumber: 0,
    }

    type ActionType = 
        | {type: "showForm"}
        | {type: "inputNumber", payload: number}
        
    const postForm = (state: typeof INITIAL_STATE, action:ActionType) => {
        switch (action.type) {
            case "showForm":
                return {
                    ...state,
                    showForm: !state.showForm
                }
            case "inputNumber":
                return {
                    ...state,
                    inputNumber: action.payload
                }
                      
            default:
                return state;
        }
    }
   
    //CONSUMING REDUCER
    const [state, dispatch] = useReducer(postForm, INITIAL_STATE);
    const {
        showForm,} = state;   

    const toggleForm = () => {
        dispatch({type: 'showForm'})
    }

    const clearForm = () => {
        dispatch({type: "inputNumber", payload: 0})
    }

    return {
        showForm, toggleForm,
        clearForm
    }
}
export default formReducer;