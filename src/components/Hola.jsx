import '../assets/styles/hola.css'
import cv from '../../public/CV-Giselle Goenaga-Frontend(esp).pdf'
import Atom from './spline/Atom.jsx'


export const Hola = () => {

    return (
        <>
        <section className="hola-container" id='hola'>
            <div className="hola-header">
                <div className='hola-title'>
                    <h2>DESARROLLADORA</h2>
                    <h2>FRONTEND.</h2>
                    <div className="title-underline"></div>
                </div>
                <div className='hola-atom'>
                    <Atom/>
                </div>
            </div>
            <div className="hola-description">
                <h1>Hola, mi nombre es Giselle.</h1>
                <h2>Soy Desarrolladora Frontend Jr en entorno web.</h2>
                <h2>Tengo conocimientos en React, Vue, Spline y Laravel.</h2>
                <h2>Actualmente me encuentro en Buenos Aires, Argentina.</h2>
                <h2>Soy estudiante de la Tecnicatura en Programación en la Universidad Nacional de Quilmes.</h2>
                <div className='hola-cv'>
                    <a href={cv} target='_blank' rel="noopener noreferrer">
                    <span>Descarga mi CV</span>
                    </a>

                </div>
            </div>
        </section>
        </>
    )
}