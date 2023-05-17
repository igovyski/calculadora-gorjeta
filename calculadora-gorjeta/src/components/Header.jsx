import logo from "../images/logo.png"
import './Header.css'

export default function Header(){
    return(
        <header>
            <img src={logo} alt="Imagem Logo" />
        </header>
    )
}