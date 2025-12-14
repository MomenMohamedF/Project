import { Navigate } from "react-router-dom";


const ProdectRoute = ({children ,auth=false}: {children: React.ReactNode , auth?: boolean}) => {
    if (auth && !localStorage.getItem("token")) {
        return children;
    }
    return <Navigate to={"/"} />;
};

export default ProdectRoute;
