import { useQuery } from "@tanstack/react-query";

const usePackages = () => {
  const {
    data: allPackages,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        "https://wandelo-server.vercel.app/packages"
      );
      const data = await response.json();
      return data;
    },
    queryKey: ["packages"],
  });

  return { allPackages, isLoading, error };
};

export default usePackages;
