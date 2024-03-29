import {request} from "@/utils/axios";

export const getUser = async () => {
  const {data} = await request({
    url: "/auth/users/me/",
    method: "get",
  });
  return data;
}
