import {
  LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED,
  LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILED, LOCALSTORAGE_USER,
} from "../../../constants/actionTypes";


const initialState = {
  authData: null,
  userId: null,
  token: null,
  name: null,
  email: null,

  photo:null,
  error:null,
  loading: false,
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loading: true
      }
    } case LOGIN_SUCCESS: {
      const { token, user } = action.payload
      localStorage.setItem('profile', JSON.stringify({ token, user }))
      return {
        ...state,
        authData: { token, user },
        token: token,
        userId: user._id,
        name: user.name,
        email: user.email,
        loading: false
      }
    } case LOGIN_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    } case LOGOUT_START: {
      return {
        ...state,
        loading: true
      }
    } case LOGOUT_SUCCESS: {
      localStorage.clear()
      return {
        ...initialState,
        loading: false
      }
    } case LOGOUT_FAILED: {
      return {
        ...state,
        loading: false
      }
    } case LOCALSTORAGE_USER: {
      return {
        ...state,
        authData: { token: action.payload?.token, user: action.payload?.user },
        token: action.payload?.token,
        userId: action.payload?.user?._id,
        name: action.payload?.user?.name,
        email: action.payload?.user?.email,
      }
    }
    

    default: { return state }
  }
}

export default authReducer