import { useQuery } from "@tanstack/react-query";

const usePackages = () => {
  const { data: allPackages, isLoading, error } = useQuery({
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/packages');
      const data = await response.json();
      return data;
    },
    queryKey: ['packages']
  });

  return { allPackages, isLoading, error };
};

export default usePackages;
