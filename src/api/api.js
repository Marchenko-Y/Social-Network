import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8ea2668f-50e8-419f-ad3d-9634f7f54fe7"
  }
});

export const userApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`, {}).then(response => response.data);
  },
  setUserAuthData() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  getUserProfile(userId) {
    console.warn("Obsolete method. Please use profileApi method");
    return profileApi.getUserProfile(userId);
  }
};
export const profileApi = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId).then(response => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId)
      .then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  }
};

export const authApi = {
  me() {
    return instance.get(`auth/me`).then(response => response.data);
  }
};
