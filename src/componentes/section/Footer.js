import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a target='_blank' href='https://www.instagram.com/andersonferreirajuliano/'><FaInstagram size={30} /></a></li>
                <li><a target='_blank' href='https://github.com/AndersonJulianoAlves'><FaGithub size={30} /></a></li>
                <li><a target='_blank' href='https://www.linkedin.com/in/anderson-juliano-alves/'><FaLinkedin size={30} /></a></li>
            </ul>
            <p>andersonferreirajuliano@gmail.com</p>
            <p> Anderson Juliano © 2024</p>
        </div>
    )
}

export default Footer