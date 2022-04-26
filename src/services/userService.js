import { apiBase } from "./instance";

const getUserProfile = () => {
  return apiBase({
    url: "/api/user-profiles",
    method: "GET",
  });
};

const userService = {
  getUserProfile,
};

export default userService;
