import './assets/styles/App.css'
import { Nav } from './components/Nav'
import { Hola } from './components/Hola'
import {Proyectos}  from './components/Proyectos'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import Atom from './components/spline/Atom'

export const App = () => {

  return (
    <>
    <div className="portfolio-conteiner">
    <Nav/>
    <Hola/>
    <Proyectos/>
    <Contacto/>
    <Footer/>
    </div>
    </>
  )
}