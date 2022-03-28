import { BehaviorSubject } from "rxjs";
import { apiBase } from "./instance";
const { USER_LOCAL_STORE } = require("constants");

const currentUserSubject = new BehaviorSubject(
	JSON.parse(localStorage.getItem(USER_LOCAL_STORE))
);

function login(user) {
  return apiBase({
    url: '/api/auth/signup',
    method: 'POST',
    data: user,
  });
}

const updateUser = (user) => {
	localStorage.setItem(USER_LOCAL_STORE, JSON.stringify(user));
	currentUserSubject.next(user);
};

const logout = () => {
	localStorage.removeItem(USER_LOCAL_STORE);
	currentUserSubject.next(null);
};

const authenticationService = {
	login,
	updateUser,
	logout,
	currentUser: currentUserSubject.asObservable,
	get currentUserValue() {
		return currentUserSubject.value;
	},
};

export default authenticationService;
