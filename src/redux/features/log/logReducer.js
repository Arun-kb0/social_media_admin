import {
  GET_ERROR_LOG_FAILED,
  GET_ERROR_LOG_START,
  GET_ERROR_LOG_SUCCESS,
  GET_REQ_LOG_FAILED, GET_REQ_LOG_START, GET_REQ_LOG_SUCCESS
} from "../../../constants/actionTypes"


const initialState = {
  loading: false,
  error: null,

  errorLogs: null,
  reqLogs: null,
  numberOfPages: null,
  currentPage: null,
  logsInPage: 0
  
}



const logReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_REQ_LOG_START: {
      return {
        loading: true
      }
    } case GET_REQ_LOG_SUCCESS: {
      const { numberOfPages, currentPage, slicedLogCount, reqLog } = action.payload

      return {
        ...state,
        reqLogs: reqLog,
        numberOfPages,
        currentPage,
        logsInPage:slicedLogCount,
        loading: false
      }
    } case GET_REQ_LOG_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    } case GET_ERROR_LOG_START: {
      return {
        ...state,
        loading: true
      }
    } case GET_ERROR_LOG_SUCCESS: {
      const { numberOfPages, currentPage, slicedLogCount ,errorLog  } = action.payload

      return {
        ...state,
        errorLogs: errorLog,
        numberOfPages,
        currentPage,
        logsInPage: slicedLogCount,
        loading: false
      }
    } case GET_ERROR_LOG_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }

    default: return state
  }
}


export default logReducer