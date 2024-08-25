import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Atom from "./spline/Atom.jsx";

import "../assets/styles/hola.css";

export const Hola = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [scrollDelta, setScrollDelta] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      const newDelta = event.deltaY;
      setScrollDelta((prevDelta) => prevDelta + newDelta);

      if (newDelta > 0 && scrollDelta > 100 && currentTextIndex < 4) {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
        setScrollDelta(0);
      } else if (newDelta < 0 && scrollDelta < -100 && currentTextIndex > 0) {
        setCurrentTextIndex((prevIndex) => prevIndex - 1);
        setScrollDelta(0);
      }

      event.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scrollDelta, currentTextIndex]);

  return (
    <>
      <Atom />
      <main className="hola-container">
        <div className="hola-description">
          {[
            "hi, I'm Giselle",
            "a frontend web developer",
            "committed to creating immersive web experiences",
            "based in Buenos Aires, Argentina",
            "available for remote work",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: currentTextIndex === index ? 1 : 0,
                y: currentTextIndex === index ? 0 : 50,
              }}
              transition={{ duration: 0.5 }}
            >
              <h1>{text}</h1>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};
