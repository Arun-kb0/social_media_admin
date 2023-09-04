import {
  GET_CHART_DATA_FAILED, GET_CHART_DATA_START, GET_CHART_DATA_SUCCESS,
  GET_COUNTS_FAILED, GET_COUNTS_START, GET_COUNTS_SUCCESS,
  GET_POST_START, GET_POST_FAILED, GET_POST_SUCCESS
} from "../../../constants/actionTypes";


const initialState = {
  loading: false,
  error: null,

  posts: null,
  currentPage: null,
  numberOfPages: null,

  userCount: null,
  postCount: null,
  todaysPostCount: null,
  yesterdaysPostCount: null,
  growthPercentage: null,

  chartData: null
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
        chartData: action.payload,
        loading: false
      }
    } case GET_CHART_DATA_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    } case GET_POST_START: {
      return {
        ...state,
        loading: false
      }
    } case GET_POST_SUCCESS: {
      const { posts, currentPage, numberOfPages } = action.payload
      return {
        ...state,
        posts,
        currentPage,
        numberOfPages,
        loading: false
      }
    } case GET_POST_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }



    default: return state
  }
}


export default postReducer