import { Outlet } from 'react-router-dom';
import Navbar from '../conmponents/Navbar/Navbar';
import Footer from '../conmponents/Footer/Footer';



const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;