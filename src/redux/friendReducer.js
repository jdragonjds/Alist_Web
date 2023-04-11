import {
  FETCH_FRIEND_REQUEST,
  FETCH_FRIEND_SUCCESS,
  FETCH_FRIEND_FAILURE,
  FETCH_FRIEND_REQUESTS_FAILURE,
  FETCH_FRIEND_REQUESTS_SUCCESS,
} from "./actionTypes";

const initialState = {
  friends: [],
  loading: false,
  error: null,
  requests: [],
  requestsError: null,
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload,
        error: null,
      };
    case FETCH_FRIEND_FAILURE:
      return {
        ...state,
        loading: false,
        friends: [],
        error: action.payload,
      };
    case FETCH_FRIEND_REQUESTS_SUCCESS:
      return {
        ...state,
        requests: action.payload,
        requestsError: null,
      };
    case FETCH_FRIEND_REQUESTS_FAILURE:
      return {
        ...state,
        requests: [],
        requestsError: action.payload,
      };
    default:
      return state;
  }
};

export default friendReducer;
