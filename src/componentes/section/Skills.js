import styles from './Skills.module.css'
import javascript from '../../Image/skills/javascript.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import react from '../../Image/skills/react.svg'
import typescript from '../../Image/skills/typescript.svg'

function Skills() {
    return (
        <div id='Skills' className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>

            <div>
                <img src={javascript}/>
                <img src={html}/>
                <img src={css}/>
                <img src={react}/>
                <img src={typescript}/>
            </div>
        </div>
    )
}

export default Skills