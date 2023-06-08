import CreateUser from "./Component/CreateUser";
import HomeAcoount from "./Component/HomeAcoount";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from "./Component/User";
import EditUser from "./Component/EditUser";
const App = ()=>{
    return(
        <div>
            <BrowserRouter>
            <HomeAcoount/>
            <Routes>
                <Route element={<CreateUser/>} path = '/'></Route>
                <Route element={<User/>} path='/users'></Route>
                <Route element={<EditUser/>} path='/edit/:index'></Route>
            </Routes>
            </BrowserRouter>
           
        </div>
    )
}
export default App;
