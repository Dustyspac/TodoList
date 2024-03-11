import axios from "axios";

export const getMyPage = async () => {
  const token = localStorage.getItem("token");
  const result = await axios.get("http://3.38.191.164/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
