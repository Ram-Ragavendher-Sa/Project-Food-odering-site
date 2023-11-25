import { createBrowserRouter } from "react-router-dom";
import Homeimgfile from "./Homeimgfile";
import Lope from "./lop";
import SignUp from "./Register";
import Sin from "./singinpg";

const router=createBrowserRouter([
    { path:"/", element: <Homeimgfile/>},
    { path:"/lop",element: <Lope/>},
    {path:"/Signin",element:<SignUp/>}
]);

export default router