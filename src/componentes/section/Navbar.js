import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>

            <ul>
                <li><a target='_blank' href='https://www.instagram.com/andersonferreirajuliano/'><FaInstagram size={30} /></a></li>
                <li><a target='_blank' href='https://github.com/AndersonJulianoAlves'><FaGithub size={30} /></a></li>
                <li><a target='_blank' href='https://www.linkedin.com/in/anderson-juliano-alves/'><FaLinkedin size={30} /></a></li>
            </ul>
        </div>
    )
}

export default Navbar