import { useEffect } from "react";
import axios from "axios";
import "../axios/axios";

const productsUrl = "https://www.course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios.get(productsUrl);
      const resp2 = await axios.get(randomUserUrl);
      console.log(resp1.data);
    } catch (error) {
      console.log(error.response);
    }
    console.log("global axios instance");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;
