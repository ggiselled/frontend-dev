import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import "../../assets/styles/spline/atom.css"

export default function Atom() {
    const atom = useRef();

    const handleSceneLoad = (spline) => {
        const obj = spline.findObjectById('5e072a3d-e9f4-42a4-97ed-c120ae5c199c');
        if (obj) {
            atom.current = obj;
            atom.current.scale.set(8, 8, 8)

          }else{
            console.log(atom.current)

          }
    };

    return (
        <>
            <Spline scene="https://draft.spline.design/RRa9wbSCu5ob2bkv/scene.splinecode" onLoad={handleSceneLoad} className='atom-spline'/>
        </>
    );
}
