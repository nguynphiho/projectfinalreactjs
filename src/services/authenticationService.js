import { BehaviorSubject } from "rxjs";
import { apiBase } from "./instance";
const { USER_LOCAL_STORE, USER_REMEMBER_LOCAL_STORE } = require("constants");

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

const authenticationService = {
  login,
  updateUser,
  updateUserRemember,
  logout,
  currentUser: currentUserSubject.asObservable,
  get currentUserValue() {
    return currentUserSubject.value;
  },
  getUserRemember,
};

export default authenticationService;
