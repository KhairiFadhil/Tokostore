import axios from "axios";
const headers = {
    Accept: "application/json",
    'content-type': "application/json",
    'cache-control': "no-cache",
    Expires: 0
}
const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 60 * 1000,
    headers
  });

instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error));   

export default instance