import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="text-center">
            <h1>Error 400!!</h1>
            <p>Page does not Found!</p>
            <Link to="/"><button className="btn btn-outline text-green-600">Back to Home</button></Link>
        </div>
    );
};

export default ErrorElement;