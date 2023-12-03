import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import '../assets/styles/proyectos.css';




// Tus tarjetas originales
//Las descriptions mantienen el centrado del div según la cantidad de palabras que tengan
const originalCards = [
  {
    url: 'src/assets/img/bubba1c2.jpg',
    title: 'Bubba Bags',
    id: 1,
    description: "Listado dinámico colecciones de productos | Conexión a un store Vuex para obtener los datos de las colecciones | Evento que selecciona la colección y redirige al usuario a la página del producto seleccionado"
  },
  {
    url: 'src/assets/img/bubba2c2.jpg',
    title: 'Bubba Bags',
    id: 2,
    description: "Selección de un producto de la colección | Selección de colores disponibles | Visualización del producto en 3D | Conexión al store Vuex para obtener datos sobre la colección y productos"

  },
  {
    url: 'src/assets/img/bubba3c2.jpg',
    title: 'Bubba Bags',
    id: 3,
    description: "Formulario interactivo | Obtención de datos a través de Firebase "
  },
  {
    url: 'src/assets/img/ce2.jpg',
    title: 'CIRCULAR ECONOMY',
    id: 4,
    description: "Creado con Vue + Inertia + Laravel | Manejo de formularios de inicio de sesión y registro a través de modales emergentes | Conexión de formularios con Laravel | Autenticación de usuarios | Manejo entre páginas con Inertia"
  },
  {
    url: 'src/assets/img/cece2.jpg',
    title: 'CIRCULAR ECONOMY',
    id: 5,
    description: "Acceso a diferentes secciones del evento en línea | Componente streaming principal | Acceso a otras salas de streaming"
  },
  {
    url: 'src/assets/img/sbux1c2.jpg',
    title: 'STARBUCKS',
    id: 6,
    description: "Experiencia interactiva | Rutas manejadas con vue-router"
  },
  {
    url: 'src/assets/img/sbux2c2.jpg',
    title: 'STARBUCKS',
    id: 7,
    description: "Inmersión 3D a través de la implementación de Kunstmatrix"

  },
  {
    url: 'src/assets/img/evoltis2.jpg',
    title: 'CX CONGRESS',
    id: 8,
    description: "Experiencia interactiva | Inmersión 3D a través de la implementación del software Spline"
  },
  {
    url: 'src/assets/img/sbuxx1c2.jpg',
    title: 'STARBUCKS',
    id: 9,
    description: "Formulario de inicio de sesión y registro conectado con Laravel"

  },
  {
    url: 'src/assets/img/sbuxx2c2.jpg',
    title: 'STARBUCKS',
    id: 10,
    description: "Inmersión 3D a través de la implementación del software Spline"

  },
  {
    url: 'src/assets/img/hdc1c2.jpg',
    title: 'ONG',
    id: 11,
    description: "Desarrollo en React | Animaciones con Framer Motion"

  },


];


export const Proyectos = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const cardWidth = 462;
  const gap = 4;
  const totalWidth = originalCards.length * (cardWidth + gap) - window.innerWidth;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalWidth}px`]);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeDescription, setActiveDescription] = useState('');

  // Calcula el extremo del scroll en porcentaje
  const scrollEnd = totalWidth / (originalCards.length * cardWidth) * 100;

  useEffect(() => {
    const checkScrollEdges = () => {
      const currentScroll = scrollYProgress.get() * 100;
      if (currentScroll <= 0 || currentScroll >= scrollEnd) {
        setActiveDescription('');
      }
    };

    const unsubscribe = scrollYProgress.onChange(checkScrollEdges);
    return () => unsubscribe();
  }, [scrollYProgress, scrollEnd]);


  return (
    <div className="prueba">

    <section id='proyectos' ref={targetRef} className="proyectos-container">
      <div className="carousel">
        <motion.div style={{ x }} className="cards-container">
          {originalCards.map((card, index) => (
            <Card
              key={index}
              card={card}
              setIsHovered={() => {
                setHoveredCard(card.id);
                setActiveDescription(card.description);
              }}
              clearHovered={() => {
                setHoveredCard(null);
                setActiveDescription('');
              }}
            />
          ))}
        </motion.div>
      </div>
      <Description
        description={activeDescription}
        isHovered={hoveredCard !== null}
      />
    </section>
    </div>
  );
};

const Card = ({ card, setIsHovered, clearHovered }) => {
  return (
    <div className="card"
      onMouseEnter={setIsHovered}
      onMouseLeave={clearHovered}
    >
      <div
        style={{ backgroundImage: `url(${card.url})` }}
        className="card-image"
      />
      <div className="card-title">
        <p>{card.title}</p>
      </div>
    </div>
  );
};

const Description = ({ description, isHovered }) => {
  return (
    <motion.div
      className="project-description"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <p>{description}</p>
    </motion.div>
  );
  }














