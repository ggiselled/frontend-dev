import React, { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import "../../assets/styles/spline/atom.css";

export default function Atom() {
  const atom = useRef();

  //Se llama cuando se carga la escena. Busca al objeto por id y establece la escala inicial
  const handleSceneLoad = (spline) => {
    const obj = spline.findObjectById("5e072a3d-e9f4-42a4-97ed-c120ae5c199c");
    if (obj) {
      atom.current = obj;
      atom.current.scale.set(8, 8, 8);
      atom.current.position.y += -1;

    } else {
      console.log(atom.current);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Ajusta el tamaño al cargar la página
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (atom.current) {
      const screenWidth = window.innerWidth;
      const scaleFactor = Math.max(screenWidth / 1200, 0.5); // Ajusta el divisor y el mínimo según sea necesario
      atom.current.scale.set(scaleFactor * 8, scaleFactor * 8, scaleFactor * 8);
      atom.current.position.y = scaleFactor * 1; // Ajusta la posición Y dinámicamente
    }
  };


  return (
    <>
      <Spline
        scene="https://draft.spline.design/RRa9wbSCu5ob2bkv/scene.splinecode"
        onLoad={handleSceneLoad}
        className="atom-spline"
      />
    </>
  );
}
