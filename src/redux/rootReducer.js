import { combineReducers } from "redux";
import authReducer from './features/auth/authReducer'
import postReducer from "./features/post/postReducer";
import userReducer from "./features/user/userReducer";



export default combineReducers({
  auth: authReducer,
  post: postReducer,
  user:userReducer
})

