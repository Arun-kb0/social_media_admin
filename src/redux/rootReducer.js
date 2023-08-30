import { combineReducers } from "redux";
import authReducer from './features/auth/authReducer'
import postReducer from "./features/post/postReducer";



export default combineReducers({
  auth: authReducer,
  post: postReducer
})

