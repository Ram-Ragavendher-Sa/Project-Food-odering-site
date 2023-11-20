import { createBrowserRouter } from "react-router-dom";
import Homeimgfile from "./Homeimgfile";
import Lope from "./lop";
import Sin from "./singinpg";

const router=createBrowserRouter([
    { path:"/", element: <Homeimgfile/>},
    { path:"/lop",element: <Lope/>},
    {path:"/Signin",element:<Sin/>}
]);

export default router