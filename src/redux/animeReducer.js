import {
  FETCH_ANIME_REQUEST,
  FETCH_ANIME_SUCCESS,
  FETCH_ANIME_FAILURE,
} from "./actionTypes";

const initialState = {
  anime: [],
  loading: false,
  error: "",
};

const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANIME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ANIME_SUCCESS:
      return {
        ...state,
        loading: false,
        anime: action.payload,
        error: "",
      };
    case FETCH_ANIME_FAILURE:
      return {
        ...state,
        loading: false,
        anime: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default animeReducer;
