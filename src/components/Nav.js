import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";

export default function Nav(props) {

    useEffect(() => {
        console.log(props.user)
    }, [props.user])

    return (
        <nav>
            {
                props.user !== null ?
                    <div>
                        <button className='autent' onClick={props.handleLogout}>Logout</button>
                        &nbsp;{props.user.name}
                    </div>
                :
                    <button className='autent' onClick={props.handleLogin}>Login</button>
            }
            <div>
                <NavLink to="/" className={({ isActive }) => isActive ? "activo" : ""}>
                    Inicio
                </NavLink>
                <NavLink to="/ventas" className={({ isActive }) => isActive ? "activo" : ""}>
                    Ventas
                </NavLink>
                <NavLink to="/soporte" className={({ isActive }) => isActive ? "activo" : ""}>
                    Soporte
                </NavLink>
            </div>
            
        </nav >
    )
}
