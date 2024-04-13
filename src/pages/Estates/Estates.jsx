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
        <div>
            {
                estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
            }
        </div>
    );
};

export default Estates;