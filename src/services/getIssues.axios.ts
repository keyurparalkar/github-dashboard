import axios from "axios";

const getIssuesAxios = async (repo_details: string) => {
    try {
        const response = await axios.get(`https://api.github.com/repos/${repo_details}/issues?per_page=100&sort=newest`)

        return response.data;
    }catch(error: any){
        throw error;
    }
}

export default getIssuesAxios;