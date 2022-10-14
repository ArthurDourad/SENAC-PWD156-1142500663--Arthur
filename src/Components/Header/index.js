import {Link} from "react-router-dom"
function Header() {
    return ( 
        <header>
            <div>
            <Link to="/">Home</Link><br />
                <Link to="/CadastroCliente">CadastroCliente</Link><br />
                <Link to="/CalculodoFrete">CalculodoFrete</Link><br />
                <Link to="/Login">Login</Link><br />
                <Link to="/SobreNos">SobreNos</Link><br />
            </div>
        </header>
    )
}
export default Header;