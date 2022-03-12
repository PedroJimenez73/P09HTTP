import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCustomerByCif } from '../services/Clientes';
import {useFadeLoad} from '../../../hooks/useFadeLoad';

export default function VisualizarCliente() {

    const params = useParams();
    const [cliente, setCliente] = useState({});

    useEffect(() => {
        const newCustomer = getCustomerByCif(params.cif);
        setCliente(newCustomer);
    }, [params])

    return (
        <div className="container" ref={useFadeLoad()}>
            <div className="row">
                <div className="col-25"></div>
                <div className="col-50">
                    <h1>Detalle de Cliente</h1>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <td>{cliente.nombre}</td>
                            </tr>
                            <tr>
                                <th>CIF</th>
                                <td>{cliente.cif}</td>
                            </tr>
                            <tr>
                                <th>Localidad</th>
                                <td>{cliente.localidad}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row j-end">
                         <Link to="/ventas/tabla-clientes">
                            <button type="button">Aceptar</button>
                        </Link>
                    </div>
                </div>
                <div className="col-25"></div>
            </div>
        </div>
    )
}
