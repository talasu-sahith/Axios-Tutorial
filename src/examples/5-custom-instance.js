import { useEffect } from "react";
import authfetch from "../axios/custom";
import axios from "axios";
const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp2 = await axios(randomUserUrl);

      const resp1 = await authfetch("/react-store-products");
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
