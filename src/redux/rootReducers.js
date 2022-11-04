import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import profileReducer from "./profile/profileReducer";
import registerReducer from "./register/registerReducer";

const rootReducers = combineReducers({
    userRegister : registerReducer,
    userLogin : loginReducer,
    userProfile : profileReducer
});



export default rootReducers
