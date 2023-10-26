import './Index.css'
import logo from '../../Imagens/logo.png'

export const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
            <ul>
                <li><a href="#">Página inicial</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
            </nav>
        </div>
    )
}