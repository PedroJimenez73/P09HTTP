
import React from 'react'
// import React, {useEffect, useRef} from 'react'
import {useFadeLoad} from '../hooks/useFadeLoad';

export default function Soporte() {

    // const containerRef = useRef();

    // useEffect(() => {
    //     containerRef.current.classList.add('fade');
    //     setTimeout(() => {
    //         containerRef.current.classList.add('show');
    //     }, 100)
    // })


    return (
        <div className="container" ref={useFadeLoad()}>
            <h1>Soporte</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eum!</p>
        </div>
    )
}
