import { useQuery } from "react-query";
import getForksAxios from "../services/getForks.axios";

const useGetForks = (repo_name: string) => {
    const response= useQuery(
        "getForks",
        () => getForksAxios(repo_name)
      );

      return response;
}

export default useGetForks;