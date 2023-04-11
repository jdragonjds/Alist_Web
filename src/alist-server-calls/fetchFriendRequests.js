import axios from "axios";
import {
  FETCH_FRIEND_REQUESTS_SUCCESS,
  FETCH_FRIEND_REQUESTS_FAILURE,
} from "../redux/actionTypes";

export const fetchFriendRequestsSuccess = (requests) => {
  return {
    type: FETCH_FRIEND_REQUESTS_SUCCESS,
    payload: requests,
  };
};

export const fetchFriendRequestsFailure = (error) => {
  return {
    type: FETCH_FRIEND_REQUESTS_FAILURE,
    payload: error,
  };
};

export const fetchFriendRequests = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/friend/request");
      dispatch(fetchFriendRequestsSuccess(response.data));
    } catch (error) {
      dispatch(fetchFriendRequestsFailure(error.message));
    }
  };
};
