import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css/animate.css';

const ViewPropertyDetails = () => {
    
    const estates = useLoaderData();
    const {id} = useParams();

    const estate = estates.find(estate => estate.id === id);

    const {image,estate_title,segment_name,status,area,price,location,description,facilities} = estate;

    return (
        
        <div className='md:flex bg-blue-950 rounded-2xl mt-5 text-white '>
            <Helmet>
                <title>LuxuryHub | View Property Details</title>
            </Helmet>
            <div className='md:w-[40%] animate__animated animate__bounce animate__delay-2s'>
                <img className='w-full h-full rounded-2xl' src={image} alt="" />
            </div>
            <div className='md:w-[60%] text-left p-10 space-y-3 animate__animated animate__bounce animate__delay-2s'>
                <h1 className='text-2xl font-bold animate__animated animate__bounce animate__delay-2s'>{estate_title}</h1>

                <h3 className="animate__animated animate__bounce animate__delay-2s">Property: <span className='font-bold'>{segment_name}</span></h3>

                <h5 className="animate__animated animate__bounce animate__delay-2s">
                    <span className='text-lg font-medium'>Status: <span className='text-[#22c1c3]'>For</span> <span className='text-[#fdbb2d] hover:text-[#22c1c3] text-2xl '>{status}</span></span>
                </h5>

                <h4 className="text-2xl font-thin animate__animated animate__bounce animate__delay-2s">Area: <span className="text-xl font-bold text-amber-400 hover:text-[#22c1c3]"> {area}</span></h4>

                <p className="text-xl font-medium animate__animated animate__bounce animate__delay-2s"><span className='text-xl font-medium text-[#60d845]'>Price </span>: {price}</p>

                <p className='text-xl font-semibold animate__animated animate__bounce animate__delay-2s'>Location: <span className='text-teal-500'>{location}</span></p>

                <p className="animate__animated animate__bounce animate__delay-2s"><span className='text-xl font-medium text-[#60d845]'>Details: </span> <span className='text-base font-medium'>{description}</span></p>

                <div className='flex gap-2 animate__animated animate__bounce animate__delay-2s'>
                    <h1 className="text-xl font-extrabold text-rose-500 animate__animated animate__bounce animate__delay-2s">Facilities: </h1>
                    <div className="grid md:grid-cols-2 animate__animated animate__bounce animate__delay-2s">
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