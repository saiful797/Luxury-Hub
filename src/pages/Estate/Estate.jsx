import PropTypes from 'prop-types';

const Estate = ({estate}) => {
    const {image, estate_title,status,segment_name,location,facilities} = estate;
    return (
        <div className="card w-96 glass mt-10 bg-blue-950 text-white">
            <figure><img className='w-full h-72' src={image} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="text-lg font-bold">{estate_title}</h2>
                <div className=''>
                    <h3>Property: <span className='font-bold'>{segment_name}</span></h3>
                    <h5>
                        <span className='text-lg font-medium'>Status: <span className='text-[#22c1c3]'>For</span> <span className='text-[#fdbb2d] hover:text-[#22c1c3] text-2xl '>{status}</span></span>
                    </h5>
                    <p className='text-xl'>
                        Location: <span  className='text-xl font-thin'>{location}</span>
                    </p>
                </div>
                <div className='flex'>
                    <h1>Facilities: <span className='text-lime-500 text-lg font-bold'><span className='text-[#22c1c3]'>#</span>{facilities[0]} <span className='text-[#22c1c3]'>#</span>{facilities[1]}</span></h1>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-success text-xl font-medium">View Property</button>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes ={
    estate: PropTypes.object.isRequired
}

export default Estate;