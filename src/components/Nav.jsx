import '../assets/styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import cv from '/CV-Giselle Goenaga-Frontend(esp).pdf'




export const Nav = () => {

    return (
        <>
        <nav className="nav-container">
            <ul>
                <li><a href={cv} target='_blank' rel="noopener noreferrer">resume</a></li>
                <li><a href="#proyectos">linkedin</a></li>
                <li><a href="#contacto">email</a></li>
            </ul>
        </nav>
        </>
    )
}

