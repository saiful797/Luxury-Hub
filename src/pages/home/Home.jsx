import Estates from "../Estates/Estates";
import Slider from "../slider-swiper/Slider";

const Home = () => {
    return (
        <div className="">
            <div className="lg:hidden">
                <p className="mt-5 text-justify"><span className="text-green-600 text-xl font-bold">Welcome</span> to <span className="text-[#22c1c3]"> Luxury </span> <span className="text-[#fdbb2d]">Hub </span>, where opulence meets unparalleled elegance. Dive into a world of refined living as we curate the finest in luxury properties, experiences, and lifestyle essentials. Whether you are seeking a breathtaking villa overlooking azure waters, an exclusive penthouse in a bustling metropolis, or curated experiences that redefine luxury, <span className="text-[#22c1c3]"> Luxury </span> <span className="text-[#fdbb2d]">Hub </span> is your ultimate destination. Join our exclusive community of discerning individuals and elevate every aspect of your lifestyle with the sophistication and refinement that define <span className="text-[#22c1c3]"> Luxury </span> <span className="text-[#fdbb2d]">Hub </span>.</p>
            </div>
            <div className="mt-10 md:mt-5 z-[0]">
                <Slider></Slider>
            </div>
            <div>
                <Estates></Estates>
            </div>
        </div>
    );
};

export default Home;