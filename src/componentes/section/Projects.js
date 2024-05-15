import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import portfolio from '../../Image/projects/portfolio.svg'

function Projects() {
    return (
        <div id='Projects' className={styles.projects}>
            <h1> Projetos </h1>
            <Card
                img={lpdnc}
                title="LP - DNC"
                tech="HTML, CSS, JS"
                description="Projeto Front-End de uma landing page relacionada a área de tecnologia."
                repositori=""
                site="" />

            <Card
                img={portfolio}
                title="Portfólio"
                tech="HTML, CSS, JS, REACT"
                description="Exemplo de portfólio react que usa diversas tecnologias afim de testar seus conhecimentos."
                repositori=""
                site="" />
            <ButtonB text='Ver repositório Completo' link='https://github.com/AndersonJulianoAlves' />
        </div>
    )
}

export default Projects