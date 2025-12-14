import { api } from "@/lib/utils/api";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  function getData() {
    return api.get("products/");
  }
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getData,
  });

  return { data, isPending, error };
};

export default useProducts;
