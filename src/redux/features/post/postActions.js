import * as api from '../../../api/apiIndex'
import {
  GET_CHART_DATA_FAILED, GET_CHART_DATA_START, GET_CHART_DATA_SUCCESS,
  GET_COUNTS_FAILED, GET_COUNTS_START, GET_COUNTS_SUCCESS
} from '../../../constants/actionTypes'



export const getCountData = () => async (dispatch, getState) => {
  dispatch({ type: GET_COUNTS_START })
  const { token } = getState().auth
  try {
    const { data } = await api.getAllCounts(token)
    dispatch({ type: GET_COUNTS_SUCCESS, payload: data })
  } catch (error) {
    console.log(error)
    dispatch({ type: GET_COUNTS_FAILED, payload: error })
  }
}



export const getchartData = () => async (dispatch, getState) => {
  const { token } = getState().auth
  dispatch({ type: GET_CHART_DATA_START })
  try {
    const { data: { data } } = await api.getChartData(token)
    console.log(data)
    dispatch({ type: GET_CHART_DATA_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_CHART_DATA_FAILED, payload: error })
    console.log(error)

  }
}