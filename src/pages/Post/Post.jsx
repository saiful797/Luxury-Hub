import PropTypes from 'prop-types';

const Post = ({post}) => {
    const {id,title, location, post_description, image} = post;
    if(id %2==0){
        return (
       
            <div className='md:flex bg-blue-950 text-white rounded-2xl'>
                <div className='md:w-[40%]'>
                    <img className='w-full h-full rounded-2xl' src={image} alt="" />
                </div>
                <div className='md:w-[60%] text-left p-10 space-y-3'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-xl font-semibold'>Location: <span className='text-[#fdbb2d]'>{location}</span></p>
                    <p className='text-justify'><span className='text-xl font-medium text-[#60d845]'>Post Description</span>: <span className='text-base font-medium'>{post_description}</span></p>
                </div>
            </div>
        );
    }
    else{
        return (
       
            <div className='md:flex bg-blue-950 text-white rounded-2xl'>
                <div className='md:w-[60%] text-left p-10 space-y-3'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p className='text-xl font-semibold'>Location: <span className='text-[#fdbb2d]'>{location}</span></p>
                    <p className='text-justify'><span className='text-xl font-medium text-[#60d845]'>Post Description</span>: <span className='text-base font-medium'>{post_description}</span></p>
                </div>
                <div className='md:w-[40%]'>
                    <img className='w-full h-full rounded-2xl' src={image} alt="" />
                </div>
            </div>
        );
    }
};

Post.propTypes ={
    post: PropTypes.object.isRequired
}

export default Post;