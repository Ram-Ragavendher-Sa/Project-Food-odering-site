import { createBrowserRouter } from "react-router-dom";
import Homeimgfile from "./Homeimgfile";
import Lope from "./lop";
import Orderpg from "./orderpg";
import SignUp from "./Register";
import Sin from "./singinpg";
import Res1 from "./Restaurent1";
import Res2 from "./Restaurent2";
import Res3 from "./Restaurent3";
import Res4 from "./Restaurent4";
const router=createBrowserRouter([
    { path:"/", element: <Homeimgfile/>},
    { path:"/lop",element: <Lope/>},
    {path:"/Signin",element:<SignUp/>},
    {path:"/orderpg",element:<Orderpg/>},
    {path:"/Restaurent1",element:<Res1/>},
    {path:"/Restaurent2",element:<Res2/>},
    {path:"/Restaurent3",element:<Res3/>},
    {path:"/Restaurent4",element:<Res4/>}
]);

export default router