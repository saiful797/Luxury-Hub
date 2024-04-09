import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="flex justify-center items-center mt-56">
            <div className="text-center space-y-5">
            <h1>Error 400!!</h1>
            <p>Page does not Found!</p>
            <div>
                <Link to="/"><button className="btn btn-outline text-green-600">Back to Home</button></Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorElement;