import axios from "axios";
import {
  FETCH_FRIEND_REQUEST,
  FETCH_FRIEND_SUCCESS,
  FETCH_FRIEND_FAILURE,
} from "../redux/actionTypes";

export const fetchFriendRequest = () => {
  return {
    type: FETCH_FRIEND_REQUEST,
  };
};

export const fetchFriendSuccess = (friends) => {
  return {
    type: FETCH_FRIEND_SUCCESS,
    payload: friends,
  };
};

export const fetchFriendFailure = (error) => {
  return {
    type: FETCH_FRIEND_FAILURE,
    payload: error,
  };
};

export const fetchFriends = () => {
  return async (dispatch) => {
    dispatch(fetchFriendRequest());

    try {
      const response = await axios.get("/friend/");
      dispatch(fetchFriendSuccess(response.data));
    } catch (error) {
      dispatch(fetchFriendFailure(error.message));
    }
  };
};
