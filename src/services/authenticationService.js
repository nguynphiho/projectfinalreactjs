import { BehaviorSubject } from "rxjs";
import { apiBase } from "./instance";
import { USER_LOCAL_STORE, USER_REMEMBER_LOCAL_STORE } from "constants";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem(USER_LOCAL_STORE))
);

const login = (user) => {
  return apiBase({
    url: "/api/auth/signin",
    method: "POST",
    data: user,
  });
};

const updateUser = (user) => {
  localStorage.setItem(USER_LOCAL_STORE, JSON.stringify(user));
  currentUserSubject.next(user);
};

const updateUserRemember = (user) => {
  localStorage.setItem(USER_REMEMBER_LOCAL_STORE, JSON.stringify(user));
};

const getUserRemember = () => {
  return JSON.parse(localStorage.getItem(USER_REMEMBER_LOCAL_STORE));
};

const logout = () => {
  localStorage.removeItem(USER_LOCAL_STORE);
  currentUserSubject.next(null);
};

const register = (user) => {
  return apiBase({
    url: "/api/auth/signup",
    method: "POST",
    data: user,
  });
};

const forgotPassword = (email) => {
  return apiBase({
    url: "/api/auth/forgot-password",
    method: "POST",
    data: {
      email,
    },
  });
};

const verifyCode = (data) => {
  return apiBase({
    url: "/api/auth/verify-code",
    method: "POST",
    data,
  });
};

const changePassword = (data) => {
  return apiBase({
    url: "/api/auth/change-password",
    method: "POST",
    data,
  });
};

const authenticationService = {
  login,
  updateUser,
  logout,
  currentUser: currentUserSubject.asObservable,
  get currentUserValue () {
    return currentUserSubject.value;
  },
  updateUserRemember,
  getUserRemember,
  register,
  forgotPassword,
  verifyCode,
  changePassword,
};

export default authenticationService;
