import axios from "axios";
import "../../axios";
const acceptRequest = async (id) => {
  const { data } = await axios.get(`/friend/request/${id}`);
};

export default acceptRequest;
