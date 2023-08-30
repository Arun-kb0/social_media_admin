import { GET_CHART_DATA_FAILED, GET_CHART_DATA_START, GET_CHART_DATA_SUCCESS, GET_COUNTS_FAILED, GET_COUNTS_START, GET_COUNTS_SUCCESS } from "../../../constants/actionTypes";


const initialState = {
  loading: false,
  error: null,

  userCount: null,
  postCount: null,
  todaysPostCount: null,
  yesterdaysPostCount: null,
  growthPercentage: null,

  chartData:null
}


const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTS_START: {
      return {
        ...state,
        loading: true
      }
    } case GET_COUNTS_SUCCESS: {
      const { userCount, postCount, todaysPostCount, yesterdaysPostCount, growthPercentage } = action.payload
      return {
        ...state,
        userCount,
        postCount,
        todaysPostCount,
        yesterdaysPostCount,
        growthPercentage,
        loading: false
      }
    } case GET_COUNTS_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    } case GET_CHART_DATA_START: {
      return {
        ...state,
        loading: true
      }
    } case GET_CHART_DATA_SUCCESS: {
      return {
        ...state,
        chartData:action.payload,
        loading: false
      }
    } case GET_CHART_DATA_FAILED: {
      return {
        ...state,
        error:action.payload,
        loading: false
      }
    }



    default: return state
  }
}


export default postReducer