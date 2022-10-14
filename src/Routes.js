import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import CadastroCliente from "./pages/CadastroCliente";
import CalculodoFrete from "./pages/CalculodoFrete";
import Login from "./pages/Login";
import SobreNos from "./pages/SobreNos";
import Header from './Components/Header/index.js';

function RoutesApp () {
    return <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/CadastroCliente" element={<CadastroCliente/>} />
            <Route path="/CalculodoFrete" element={<CalculodoFrete/>} />
            <Route path="/SobreNos" element={<SobreNos/>} />
        </Routes>
    </BrowserRouter>
}
export default RoutesApp;