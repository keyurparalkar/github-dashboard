import { useQuery } from "react-query";
import getReposAxios from "../services/getRepos.axios";

const useGetRepos = (value: string) => {
    const response= useQuery(
        "getRepos",
        () => getReposAxios(value),
        {
          enabled: false,
          refetchOnWindowFocus: false,
          initialData: null,
          retry: false
        }
      );

      return response;
}

export default useGetRepos;