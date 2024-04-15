import { useLoaderData, useParams } from "react-router-dom";

const ViewPropertyDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const idNum = id.charAt(1);

    const estate = estates.find(estate => estate.id === idNum);

    const {image,estate_title,segment_name,status,area,price,location,description,facilities} = estate;

    return (
        
        <div className='md:flex bg-blue-950 rounded-2xl mt-5 text-white'>
            <div className='md:w-[40%]'>
                <img className='w-full h-full rounded-2xl' src={image} alt="" />
            </div>
            <div className='md:w-[60%] text-left p-10 space-y-3'>
                <h1 className='text-2xl font-bold'>{estate_title}</h1>

                <h3>Property: <span className='font-bold'>{segment_name}</span></h3>

                <h5>
                    <span className='text-lg font-medium'>Status: <span className='text-[#22c1c3]'>For</span> <span className='text-[#fdbb2d] hover:text-[#22c1c3] text-2xl '>{status}</span></span>
                </h5>

                <h4 className="text-2xl font-thin">Area: <span className="text-xl font-bold text-amber-400 hover:text-[#22c1c3]"> {area}</span></h4>

                <p className="text-xl font-medium"><span className='text-xl font-medium text-[#60d845]'>Price </span>: {price}</p>

                <p className='text-xl font-semibold'>Location: <span className='text-teal-500'>{location}</span></p>

                <p><span className='text-xl font-medium text-[#60d845]'>Details: </span> <span className='text-base font-medium'>{description}</span></p>

                <div className='flex gap-2'>
                    <h1 className="text-xl font-extrabold text-rose-500">Facilities: </h1>
                    <div className="grid grid-cols-2">
                        <p className='text-teal-500 text-lg font-bold'><span className='text-[#fdbb2d]'>#</span>{facilities[0]}</p>
                        <p className='text-teal-500 text-lg font-bold ml-10'><span className='text-[#fdbb2d]'>#</span>{facilities[1]}</p>
                        <p className='text-teal-500 text-lg font-bold'><span className='text-[#fdbb2d]'>#</span>{facilities[2]}</p>
                        <p className='text-teal-500 text-lg font-bold ml-10'><span className='text-[#fdbb2d]'>#</span>{facilities[3]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPropertyDetails;