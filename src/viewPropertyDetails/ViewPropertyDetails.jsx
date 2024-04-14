import { useLoaderData, useParams } from "react-router-dom";

const ViewPropertyDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const idNum = id.charAt(1);

    const estate = estates.find(estate => estate.id === idNum);

    const {image,estate_title,location,description} = estate;

    return (
        
        <div className='md:flex bg-slate-200 rounded-2xl mt-5'>
                <div className='md:w-[30%]'>
                    <img className='w-full h-full rounded-2xl' src={image} alt="" />
                </div>
                <div className='md:w-[70%] text-left p-10 space-y-3'>
                    <h1 className='text-2xl font-bold'>{estate_title}</h1>
                    <p className='text-xl font-semibold'>Location: <span className='text-[#fdbb2d]'>{location}</span></p>
                    <p><span className='text-xl font-medium text-[#60d845]'>Details: </span>: <span className='text-base font-medium'>{description}</span></p>
                </div>
            </div>
    );
};

export default ViewPropertyDetails;