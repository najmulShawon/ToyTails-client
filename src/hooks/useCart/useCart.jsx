import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const useCart = () => {
  const { user } = useContext(AuthContext);
  // tan stack query
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/mycart?email=${user.email}`
      );
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
