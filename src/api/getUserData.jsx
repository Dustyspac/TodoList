import axios from "axios";

const getUserData = async (token) => {
  try {
    const response = await axios.get("http://3.38.191.164/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("유저 정보 가져오기 에러:", error);
    throw error;
  }
};

export default getUserData;
