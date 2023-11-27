import { Paper } from "@mui/material";
import { Container } from "@mui/system";
import { TextField } from "@mui/material";
import ButtonAppBar from "./Testing/Appbar";
import Lope from "./Testing/lop";
import Homeimgfile from "./Testing/Homeimgfile";
import { userContext } from "./Testing/Context";
import { useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Testing/Routing";
function App() {

  const [user, setuser] = useState('');
  return (
  <div>
    <userContext.Provider value = {[user, setuser]}>
      <RouterProvider router={router}/>
    </userContext.Provider>
  </div>
  );
}
export default App;
