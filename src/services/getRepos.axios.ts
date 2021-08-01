import axios from "axios";

const getReposAxios = async (value: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        value
      )}`
    );
    return response.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export default getReposAxios;
