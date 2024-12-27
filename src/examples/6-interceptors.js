import { useEffect } from "react";
import authFetch from "../axios/interceptor";
const url = "https://www.course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-productss");
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
