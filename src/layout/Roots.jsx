// Main file 
import {Outlet} from 'react-router-dom'
import NavBar from '../pages/Shared/NavBar/NavBar';
import Footer from '../pages/footer/Footer';
const Roots = () => {
    return (
        <div className="font-poppins max-w-7xl mx-auto">
            <div className='ml-2 mr-2'>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Roots;