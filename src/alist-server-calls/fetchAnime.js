import axios from "axios";

import {
  FETCH_ANIME_REQUEST,
  FETCH_ANIME_SUCCESS,
  FETCH_ANIME_FAILURE,
} from "../redux/actionTypes";

export const fetchAnime = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ANIME_REQUEST });
    axios
      .get("/anime")
      .then((response) => {
        dispatch({
          type: FETCH_ANIME_SUCCESS,
          payload: response.data.animeList,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({ type: FETCH_ANIME_FAILURE, payload: errorMessage });
      });
  };
};
