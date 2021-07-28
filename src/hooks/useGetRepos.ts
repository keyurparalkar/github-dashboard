import { QueryFunction, useQuery } from "react-query";
import { TGetRepoAxiosFunc } from "../types/types.hooks";

const useGetRepos = (axiosHook: QueryFunction<null | TGetRepoAxiosFunc>) => {
    const response= useQuery(
        "getRepos",
        axiosHook,
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