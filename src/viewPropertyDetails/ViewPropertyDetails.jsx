import { useLoaderData, useParams } from "react-router-dom";

const ViewPropertyDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const idNum = id.charAt(1);

    const estate = estates.find(estate => estate.id === idNum);

    const {estate_title} = estate;

    return (
        
        <div className="mt-5">
            <h1 className="text-center">Title: {estate_title}</h1>
        </div>
    );
};

export default ViewPropertyDetails;