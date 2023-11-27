import PackageCard from "./PackageCard";
import Navbar from "../Pages/Home/Components/Navbar";
import usePackages from "./Hook/usePackages";

const AllPackages = () => {

    const { allPackages, isLoading, error } = usePackages();

    if (error) {
      return 'An error has occurred: ' + error.message;
    }
  
    if (isLoading) {
      return <div>...Data Loading</div>;
    }

    return (
        <div className="p-1 bg-[#0C4848]">
            <Navbar></Navbar>
            <div className="flex gap-3 flex-wrap px-20 mt-10  items-center">
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