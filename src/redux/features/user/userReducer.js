import { GET_USERS_FAILED, GET_USERS_START, GET_USERS_SUCCESS } from "../../../constants/actionTypes";


const initialState = {
  loding: false,
  error: null,

  users: null,
  currentPage:null,
  numberOfPages:null,
}


const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_USERS_START: {
      return {
        ...state,
        loading: false,

      }
    } case GET_USERS_SUCCESS: {
      const { currentPage,numberOfPages,users } = action.payload
      return {
        ...state,
        users,
        currentPage,
        numberOfPages,
        loading: false,

      }
    } case GET_USERS_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false,

      }
    }
      
      
      
    default: return state
  }

}

export default userReducer