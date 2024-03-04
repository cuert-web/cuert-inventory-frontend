import { request } from "@/utils/axios";

export const login = async (identifier, password) => {
  const { data } = await request({
    url: "/auth/login",
    method: "post",
    data: {
      identifier,
      password,
    },
  });
  return data;
};
