import httpService from "./httpService";
import variants from "../config/variants";

const userApiUrl = variants.apiEndPoint + "users/";
const authApiUrl = variants.apiEndPoint + "auth/";
const tokenKey = "token";

export async function login(email, password) {
  try {
    const { data } = await httpService.post(authApiUrl, {
      email: email,
      password: password,
    });
    localStorage.setItem(tokenKey, data.user_id);
    window.location ='/home'
  } catch (error) {
    window.alert("Login failed", error.message);
  }
}

export function loginWithUserId(id) {
  localStorage.setItem(tokenKey, id);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  window.location = "/home";
}

export async function getCurrentUser() {
  try {
    const id = localStorage.getItem(tokenKey);
    const user = await httpService.get(userApiUrl, { params: { id: id } });
    return user;
  } catch (error) {
    return null;
  }
}

export function register(user) {
  return httpService.post(userApiUrl, {
    email: user.email,
    password: user.password,
    name: user.name,
    gender: user.gender,
    phone: user.phone,
  });
}
