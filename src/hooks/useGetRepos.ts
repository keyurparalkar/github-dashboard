import { useQuery } from "react-query";
import getReposAxios from "../services/getRepos.axios";

const useGetRepos = (value: string, options?: any) => {
    const response= useQuery(
        "getRepos",
        () => getReposAxios(value),
        {...options}
      );

      return response;
}

export default useGetRepos;