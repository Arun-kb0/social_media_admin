import {
  LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, REQUEST_CANCELLED, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILED, LOCALSTORAGE_USER
} from "../../../constants/actionTypes";
import * as api from '../../../api/apiIndex'


export const login = ({ authData }) => async (dispatch) => {
  dispatch({ type: LOGIN_START })

  try {

    const authRes = await api.login(authData)
    console.log(authRes)
    const {  status,data } = authRes
    dispatch({ type: LOGIN_SUCCESS, payload: data })
  } catch (error) {
    console.log(error)
    dispatch({ type: LOGIN_FAILED, payload: error.message })

  }
}


export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_START })

  try {
    
    dispatch({ type: LOGOUT_SUCCESS,})
  } catch (error) {
    dispatch({ type: LOGOUT_FAILED,payload:error })
  }
}




export const getLocalStroageUser = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'))
  user
    ? dispatch({ type: LOCALSTORAGE_USER, payload: user })
    : dispatch({ type: LOCALSTORAGE_USER, payload: null })
}



export const cancelRequest = () => (dispatch) => {
  api.source.cancel("req cancelled by user")
  dispatch({ type: REQUEST_CANCELLED, payload: "req cancelled by user" })
}