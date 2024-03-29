import './assets/styles/App.css'
import { Nav } from './components/Nav'
import { Hola } from './components/Hola'
import {Proyectos}  from './components/Proyectos'
import { Footer } from './components/Footer'

export const App = () => {

  return (
    <>
    <div className="portfolio-container">
    <Nav/>
    <Hola/>
    <Proyectos/>
    <Footer/>
    </div>
    </>
  )
}