import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({estate}) => {

    const {id,image, estate_title,status,segment_name,location,facilities} = estate;
    
    return (
        <div className="card w-96 glass mt-10 bg-blue-950 text-white">
            <figure><img className='w-full h-72' src={image} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="text-lg font-bold">{estate_title}</h2>
                <div className=''>
                    <h3 className='animate__animated animate__bounce'>Property: <span className='font-bold'>{segment_name}</span></h3>
                    <h5 className='animate__animated animate__bounce'>
                        <span className='text-lg font-medium'>Status: <span className='text-[#22c1c3]'>For</span> <span className='text-[#fdbb2d] hover:text-[#22c1c3] text-2xl '>{status}</span></span>
                    </h5>
                    <p className='text-xl'>
                        Location: <span  className='text-xl font-thin'>{location}</span>
                    </p>
                </div>
                <div className='flex gap-2'>
                    <h1 className='animate__animated animate__bounce'>Facilities:</h1>
                    <div className='grid'>
                        <p className='text-lime-500 text-lg font-bold'>
                            <span className='text-[#22c1c3]'>#</span>{facilities[0]}
                        </p>
                        <p className='text-lime-500 text-lg font-bold'>
                            <span className='text-[#22c1c3]'>#</span>{facilities[1]}
                        </p>
                    </div>
                </div>
                <div className='mt-10 flex justify-center items-center'>
                    <Link to={`/${id}`}> 
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-success text-xl font-medium">View Property</button>
                        </div>   
                    </Link>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes ={
    estate: PropTypes.object.isRequired
}

export default Estate;