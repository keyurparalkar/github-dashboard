import axios from "axios";

const getReleasesAxios = async (repo_name:string) => {
    try{
        const response = await axios.get(`https://api.github.com/repos/${repo_name}/releases?per_page=100&sort=newest`);

        return response.data;
    }catch(error: any){
        throw error;
    }
}

export default getReleasesAxios;