import Navbar from "@/components/Navbar";

const CommonRoutes = ({ children }) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default CommonRoutes;
