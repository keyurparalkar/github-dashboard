import { useQuery } from "react-query";
import getReposAxios from "../services/getRepos.axios";

const useGetRepos = (value: string) => {
    const response= useQuery(
        "getRepos",
        () => getReposAxios(value)
      );

      return response;
}

export default useGetRepos;