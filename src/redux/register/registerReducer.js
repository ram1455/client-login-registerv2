import {USER_RESET_REGISTER_FORM, USER_SET_EMAIL,USER_SET_NAME,USER_SET_PASSWORD} from '../actionType'


let initialState = {
    email   : '',
    password:'',
    name    :''
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SET_EMAIL:
            return {
                ...state,
                email : action.payload.email
            }
            
        case USER_SET_PASSWORD:
            return {
                ...state,
                password : action.payload.password
            }
        
        case USER_SET_NAME:
            return {
                ...state,
                name : action.payload.name
            }
        
        case USER_RESET_REGISTER_FORM:
            return {
                ...state,
            }
        
        default:
            return{
                state
            }
    }
}

export default registerReducer