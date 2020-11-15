import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";
const apiURL = "https://updates.suade.org/files/people.json";
const dataUrl = `${proxy}${apiURL}`;
const apiClient = axios.create({
  baseURL: dataUrl,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getUsers() {
    return apiClient.get();
  },
};
