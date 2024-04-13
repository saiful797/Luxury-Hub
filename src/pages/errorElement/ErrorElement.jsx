import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="flex justify-center items-center mt-56">
            <div className="text-center text-xl font-bold space-y-5">
                <h1>Error 404!!!</h1>
                <p>Page Does Not Found!!</p>
            <div>
                <Link to="/">
                    <button className="btn btn-outline text-green-600 text-lg">
                        <img className="w-5" src="https://i.ibb.co/3kBYr4r/arrow.png" alt="" />
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorElement;