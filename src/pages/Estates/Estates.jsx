import { useEffect, useState } from "react";
import Estate from "../Estate/Estate";

const Estates = () => {
    const [estates, setEstates] = useState([]);
    
    useEffect(() => {
        fetch('luxuryHub.json')
          .then(res => res.json())
          .then(data => setEstates(data))
    })

    return (
        <div className="mt-16 ">
            <div className="flex justify-center">
                <h1 className="text-center lg:w-1/2 text-2xl font-semibold">Your Investment, Our Commitment: Transforming Dreams into Distinctive Estates at <span className="text-[#22c1c3]">Luxury </span> <span className="text-[#fdbb2d]">Hub</span>.</h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3  place-items-center">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;