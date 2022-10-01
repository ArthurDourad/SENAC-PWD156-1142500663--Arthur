import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import CadastroCli from "./Pages/CadastroCli";
import Financiamento from "./Pages/SimulaçaodeFinanciamento";
import ContaCorrente from "./Pages/MovimentaçaoContaCorrente";
import Sobrenos from "./Pages/Sobrenos";
import Header from "./components/Header";
function RoutesApp () {
    return <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/CadastroCli" element={<CadastroCli/>} />
            <Route path="/SimulaçaodeFinanciamento" element={<Financiamento/>} />
            <Route path="/MovimentaçaoContaCorrente" element={<ContaCorrente/>} />
            <Route path="/Sobrenos" element={<Sobrenos/>} />
        </Routes>
    </BrowserRouter>
}
export default RoutesApp;