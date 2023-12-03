import './assets/styles/App.css'
import { Nav } from './components/Nav'
import { Hola } from './components/Hola'
import {Proyectos}  from './components/Proyectos'
import { Contacto } from './components/Contacto'

export const App = () => {

  return (
    <>
    <div className="portfolio-conteiner">
    <Nav/>
    <Hola/>
    <Proyectos/>
    <Contacto/>
    </div>
    </>
  )
}