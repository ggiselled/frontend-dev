import './assets/styles/App.css'
import { Nav } from './components/Nav'
import { Hola } from './components/Hola'
import Proyectos  from './components/Proyectos'

export const App = () => {

  return (
    <>
    <div className="portfolio-conteiner">
    <Nav/>
    <Hola/>
    <Proyectos/>
    </div>
    </>
  )
}