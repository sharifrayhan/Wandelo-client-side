import { useParams } from "react-router-dom";

const StoryDetails = () => {

    const { id } = useParams();
    console.log(id)
    
    return (
        <div>
              
        </div>
    );
};

export default StoryDetails;