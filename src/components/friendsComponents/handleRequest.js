import axios from "axios";
import "../../axios";
const acceptRequest = async (id) => {
  const { data } = await axios.patch(`/friend/request/${id}`);
};
const cancelRequest = async (id) => {
  await axios.delete(`/friend/request/${id}`);
};
const removeFriend = async (id) => {
  await axios.delete(`/friend/${id}`);
};
const isFriend = async (id) => {
  await axios.get(`/friend/is/${id}`);
};
export { acceptRequest, cancelRequest, removeFriend, isFriend };
