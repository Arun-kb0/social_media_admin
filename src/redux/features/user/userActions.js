import {
  GET_USERS_FAILED, GET_USERS_START, GET_USERS_SUCCESS
} from "../../../constants/actionTypes"
import * as api from '../../../api/apiIndex'


// ! code separate route for all admin side on backend
export const getUsers = (page) =>async (dispatch)=> {
  dispatch({type:GET_USERS_START})
  try {
    const { data } = await api.getUsers(page)
    console.log(data)
    dispatch({ type: GET_USERS_SUCCESS, payload: data})
  } catch (error) {
    console.log(error)
    dispatch({type:GET_USERS_FAILED,payload:error})
  }
}