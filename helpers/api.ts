import axios from "axios";
// import { EncryptionStorage } from "@unisearch/helpers";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
});

// API.interceptors.request.use(
//   (config) => {
//     const authInfo = JSON.parse(EncryptionStorage.getItem("AUTH"));
//     const { access_token } = authInfo;
//     if (authInfo) {
//       config.headers.Authorization = `Bearer ${access_token}`;
//     }
//     return config;
//   },
//   (err) => Promise.reject(err)
// );

API.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    }
    return Promise.reject(response.data);
  },
  (error) => {
    const expErr =
      error?.response &&
      error?.response?.status >= 400 &&
      error?.response?.status < 500;
    // if (error?.response?.status == 401) {
    //   EncryptionStorage.removeItem("AUTH");
    // }

    if (!expErr) {
      console.log("Unexpected error : ", error.message);
    }
    if (error.response) {
      return error?.response?.data;
    }

    return Promise.reject(error);
  }
);

export default API;
