import { request } from "@/utils/axios";

export const signup = async (
  fullName,
  username,
  email,
  phoneNumber,
  password
) => {
  const { data } = await request({
    url: "/auth/register",
    method: "post",
    data: {
      full_name: fullName,
      username,
      email,
      mobile: phoneNumber,
      password,
    },
  });
  return data;
};
