import axios from "axios";

const getForksAxios = async (value: string) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/${value}/forks?per_page=100&sort=newest`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export default getForksAxios;
