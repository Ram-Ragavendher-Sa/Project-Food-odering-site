import { createBrowserRouter } from "react-router-dom";
import Homeimgfile from "./Homeimgfile";
import Lope from "./lop";
import Orderpg from "./orderpg";
import SignUp from "./Register";
import Sin from "./singinpg";

const router=createBrowserRouter([
    { path:"/", element: <Homeimgfile/>},
    { path:"/lop",element: <Lope/>},
    {path:"/Signin",element:<SignUp/>},
    {path:"/orderpg",element:<Orderpg/>}
]);

export default router