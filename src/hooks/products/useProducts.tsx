import { fetchProducts } from "@/lib/utils/api";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    retry: 0,
  });

  return { data, isPending, error };
};

export default useProducts;
