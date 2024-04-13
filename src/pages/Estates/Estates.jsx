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
        <div className="grid md:grid-cols-3 mt-10">
            {
                estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
            }
        </div>
    );
};

export default Estates;