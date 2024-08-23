import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Atom from './spline/Atom.jsx';

import '../assets/styles/hola.css';

export const Hola = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [scrollDelta, setScrollDelta] = useState(0); // Acumulador del delta


  //Manejo del scroll de texto
  useEffect(() => {
    const handleWheel = (event) => {
      const newDelta = event.deltaY
      setScrollDelta((prevDelta) => prevDelta + newDelta);

      if (newDelta > 0 && scrollDelta > 100 && currentTextIndex < 4) {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
        setScrollDelta(0); // Reiniciar el acumulador después de avanzar
      } else if (newDelta < 0 && scrollDelta < -100 && currentTextIndex > 0) {
        setCurrentTextIndex((prevIndex) => prevIndex - 1);
        setScrollDelta(0); // Reiniciar el acumulador después de retroceder
      }

      event.preventDefault(); // Prevenir el desplazamiento de la página
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [scrollDelta, currentTextIndex]);
  

  return (
    <>
      <Atom />
      <main className="hola-container">
        <div className="hola-description">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: currentTextIndex === 0 ? 1 : 0, y: currentTextIndex === 0 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h1>hi, I'm Giselle</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: currentTextIndex === 1 ? 1 : 0, y: currentTextIndex === 1 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h1>a frontend web developer</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: currentTextIndex === 2 ? 1 : 0, y: currentTextIndex === 2 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h1>committed to creating immersive web experiences</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: currentTextIndex === 3 ? 1 : 0, y: currentTextIndex === 3 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h1>based in Buenos Aires, Argentina</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: currentTextIndex === 4 ? 1 : 0, y: currentTextIndex === 4 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h1>available for remote work</h1>
          </motion.div>
        </div>
      </main>
    </>
  );
};
