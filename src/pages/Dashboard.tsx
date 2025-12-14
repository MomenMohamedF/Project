import { api } from "@/lib/utils/api";
import { useQuery } from "@tanstack/react-query";


const Dashboard = () => {
  const {data, isLoading, error} = useQuery({queryKey: ['products'], queryFn: () => api.get('products')})

  console.log(data)

  return <div>dashboard</div>;
};

export default Dashboard;
