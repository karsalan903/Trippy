import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CommonRoutes = ({ children }) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer />
        </>
    );
};

export default CommonRoutes;
