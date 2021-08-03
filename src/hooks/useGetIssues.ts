import { useQuery } from "react-query";
import getIssuesAxios from "../services/getIssues.axios";

const useGetIssues = (repo_name: string) => {
    const response = useQuery("getIssues", () => getIssuesAxios(repo_name));

    return response;
}

export default useGetIssues;