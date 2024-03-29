import { useQuery } from "@tanstack/react-query";

import { getUser as getUserApi } from "@/services/getUser";

export function useUser() {
  const { data:user, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
  });

  return { user, isLoading, isError };
}
