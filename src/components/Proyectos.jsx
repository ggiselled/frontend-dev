import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import '../assets/styles/proyectos.css';




// Tus tarjetas originales
//Las descriptions mantienen el centrado del div según la cantidad de palabras que tengan
const originalCards = [
  {
    url: 'src/assets/img/bubba1c2.jpg',
    title: 'P1',
    id: 1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, magni ad? Sequi, perspiciatis praesentium? Ipsam nam illo corrupti temporibus. Culpa reiciendis quaerat nesciunt placeat assumenda commodi iusto similique aliquid cupiditate?"
  },
  {
    url: 'src/assets/img/bubba2c2.jpg',
    title: 'p1',
    id: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, magni ad? Sequi, perspiciatis praesentium? Ipsam nam illo corrupti temporibus. Culpa reiciendis quaerat nesciunt placeat assumenda commodi iusto similique aliquid cupiditate?"

  },
  {
    url: 'src/assets/img/bubba3c2.jpg',
    title: 'p1',
    id: 3,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, magni ad? Sequi, perspiciatis praesentium? Ipsam nam illo corrupti temporibus. Culpa reiciendis quaerat nesciunt placeat assumenda commodi iusto similique aliquid cupiditate?"
  },
  {
    url: 'src/assets/img/sbux1c2.jpg',
    title: 'p2',
    id: 4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, magni ad? Sequi, perspiciatis praesentium? Ipsam nam illo corrupti temporibus. Culpa reiciendis quaerat nesciunt placeat assumenda commodi iusto similique aliquid cupiditate?"
  },
  {
    url: 'src/assets/img/sbux2c2.jpg',
    title: 'p2',
    id: 4
  },
  {
    url: 'src/assets/img/evoltis2.jpg',
    title: 'p3',
    id: 4
  },
  {
    url: 'src/assets/img/sbuxx1c2.jpg',
    title: 'p4',
    id: 4
  },
  {
    url: 'src/assets/img/sbuxx2c2.jpg',
    title: 'p4',
    id: 4
  },
  {
    url: 'src/assets/img/hdc1c2.jpg',
    title: 'p5',
    id: 4
  },
  {
    url: 'src/assets/img/hdc2c2.jpg',
    title: 'p5',
    id: 4
  },
  {
    url: 'src/assets/img/hdc3c2.jpg',
    title: 'p5',
    id: 4
  },

];


const Proyectos = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const cardWidth = 462;
  const gap = 4;
  const totalWidth = originalCards.length * (cardWidth + gap) - window.innerWidth;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${totalWidth}px`]);
  

  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeDescription, setActiveDescription] = useState('');

  return (
    <section ref={targetRef} className="proyectos-container">
      <div className="carousel">
        <motion.div style={{ x }} className="cards-container">
          {originalCards.map((card, index) => (
            <div key={index}>
              <Card
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
            </div>
          ))}
        </motion.div>
      </div>
      <Description
        description={activeDescription}
        isHovered={hoveredCard !== null}
      />
    </section>
  );
};

const Card = ({ card, setIsHovered, clearHovered }) => {
  return (
    <div className="card"
      onMouseEnter={() => setIsHovered()}
      onMouseLeave={() => clearHovered()}
    >
      <div
        style={{ backgroundImage: `url(${card.url})` }}
        className="card-image"
      ></div>
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
};


export default Proyectos;






















