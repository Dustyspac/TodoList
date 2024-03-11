import axios from "axios";

export const getRegister = async (id, password) => {
  const result = await axios.post("http://3.38.191.164/register", {
    id,
    password,
  });
  return result.data;
};
