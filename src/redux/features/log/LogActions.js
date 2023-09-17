import { GET_ERROR_LOG_FAILED, GET_ERROR_LOG_START, GET_ERROR_LOG_SUCCESS, GET_REQ_LOG_FAILED, GET_REQ_LOG_START, GET_REQ_LOG_SUCCESS } from "../../../constants/actionTypes"
import * as api from '../../../api/apiIndex'


export const getReqLogs = (page) => async (dispatch) => {
  dispatch({ type: GET_REQ_LOG_START })
  try {
    const { data } = await api.getReqLog(page)
    console.log(data)
    dispatch({ type: GET_REQ_LOG_SUCCESS, payload: data })
  } catch (error) {
    console.log(error)
    dispatch({ type: GET_REQ_LOG_FAILED, payload: error })
  }
}


export const getErrorLogs = (page) => async (dispatch) => {
  dispatch({type:GET_ERROR_LOG_START})
  try {
    const { data } = await api.getErrorLog(page)
    console.log(data)
    dispatch({type:GET_ERROR_LOG_SUCCESS , payload:data})
  } catch (error) {
    dispatch({type:GET_ERROR_LOG_FAILED , payload:error})
  }
}


