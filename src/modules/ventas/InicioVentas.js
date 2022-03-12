import React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import TablaClientes from './clientes/TablaClientes'
import CrearCliente from './clientes/CrearCliente'
import VisualizarCliente from './clientes/VisualizarCliente'
import {useFadeLoad} from '../../hooks/useFadeLoad';

export default function InicioVentas() {
  return (
    <Routes>
        <Route path="/" element={<Outlet />}>
            <Route index element={<InicioVentasLayout />} />
            <Route path="tabla-clientes" element={<TablaClientes />} />
            <Route path="crear-cliente" element={<CrearCliente />} />
            <Route path="visualizar-cliente" >
                <Route path=":cif" element={<VisualizarCliente />} />
            </Route>
        </Route>
    </Routes>
  )
}

function InicioVentasLayout() {
    return (
        <div className="container" ref={useFadeLoad()}>
            <h1>Ventas</h1>
            <Link to="tabla-clientes">
                <button>Clientes</button>
            </Link>
            <Outlet />
        </div>
    )
}
