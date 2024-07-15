import OtherHeader from '../Partials/OtherHeader'
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const RootLayout = () => {
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    return (
        <div>
            {isHomepage ? <Header /> : <OtherHeader />}
            <Outlet />
            <Footer />
        </div>
    );
}

export default RootLayout;
