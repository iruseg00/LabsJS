import axios from "axios";

const api = async (url, method = "GET", data) => 
{
  switch (method) 
  {
    case "GET":
      return axios.get(url);
    case "POST":
      return axios.post(url, data);
    case "PUT":
      return axios.put(url, data);
    case "DELETE":
      return axios.delete(url);
    default:
      return axios.get(url);
  }
};
export default api;