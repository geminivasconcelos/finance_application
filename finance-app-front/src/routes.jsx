import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

// function ProtectedRoute(props) {
//     const token = localStorage.getItem('token');
//     return token ? <Outlet /> : <Navigate to={props.redirect} />;
// }

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Cadastro' element={<Cadastro />} />
                <Route path='/Login' element={<Login />} />

                {/* <Route element={<ProtectedRoute redirect="/Login" />}></Route> */}
            </Routes>
        </BrowserRouter>
    )
}