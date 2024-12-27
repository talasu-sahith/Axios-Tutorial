import axios from "axios";

const customFetch = axios.create({
  baseurl: "https://www.course-api.com",
  headers: {
    Accept: "application/json",
  },
});
