import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Container from "../components/Container/Container";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </div>
    );
};

export default MainLayout;