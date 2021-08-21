import { useQuery } from "react-query";
import getReleasesAxios from "../services/getReleases.axios";

const useGetReleases = (repo_name: string) => {
    const response = useQuery("getReleases", () => getReleasesAxios(repo_name))

    return response;
}

export default useGetReleases;