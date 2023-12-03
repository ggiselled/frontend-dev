import '../assets/styles/hola.css'

export const Hola = () => {

    return (
        <>
        <section className="hola-container">
            <div className="hola-title">
                <h2>DESARROLLADORA</h2>
                <h2>FRONTEND.</h2>
                <div className="title-underline"></div>
            </div>
            <div className="hola-description">
                <h1>Hola, mi nombre es Giselle.</h1>
                <h2>Soy Desarrolladora Frontend Jr en entorno web.</h2>
                <h2>Tengo conocimientos en React, Vue, Spline y Laravel.</h2>
                <h2>Actualmente me encuentro en Buenos Aires, Argentina.</h2>
                <h2>Soy estudiante de la Tecnicatura en Programación en la Universidad Nacional de Quilmes.</h2>
                <div className='hola-cv'>
                    Descarga mi CV
                </div>
            </div>
        </section>
        </>
    )
}