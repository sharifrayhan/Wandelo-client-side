import { useQuery } from "@tanstack/react-query";
import PackageCard from "./PackageCard";
import Navbar from "../Pages/Home/Components/Navbar";

const AllPackages = () => {

    const { data: allPackages, isLoading, error } = useQuery(
        {
            queryFn: async () => {
                const response = await fetch('http://localhost:3000/packages');
                const data = await response.json();
                return data;
            },
            queryKey: ['packages']
        })

        if (error) {
            return 'An error has occurred: ' + error.message
        } 

    console.log(allPackages)

    if (isLoading)
    {
        return <div>...Data Loading</div>
        
    }

    return (
        <div className="p-1">
            <Navbar></Navbar>
            <div className="flex gap-3 flex-wrap px-20 mt-20 items-center">
                    {
                        allPackages.map(singlePackage=>(
                            <PackageCard key={singlePackage.id} singlePackage={singlePackage}></PackageCard>
                        ))
                    }
            </div>
        </div>
    );
};

export default AllPackages;