
import React from 'react'
import {useFadeLoad} from '../hooks/useFadeLoad';

export default function NoAutorizado() {

    return (
        <div className="container" ref={useFadeLoad()}>
            <h1>Acceso No Autorizado</h1>
            <p>Por favor inicie sesión</p>
        </div>
    )
}
