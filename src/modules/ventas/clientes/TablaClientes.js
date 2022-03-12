import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getCustomers, searchCustomers } from '../services/Clientes';
import {useFadeLoad} from '../../../hooks/useFadeLoad';
import axios from 'axios';

export default function TablaClientes() {
    const [customers, setCustomers] = useState([]);
    const [form, setForm] = useState({
        term: ''
    })

    const handleChange = (e) => {
        setForm({term: e.target.value})
    }

    // useEffect(() => {
    //     const source = axios.CancelToken.source()
    //     getCustomers().then((res) => {
    //         setCustomers(() => (res.data.clientes));
    //     }).catch(err => console.log(err)); 
    //     return ()=> source.cancel();
    // }, [customers])

    useEffect(() => {
        if(form.term.length > 0) {
            const source = axios.CancelToken.source()
            searchCustomers(form.term).then((res) => {
                setCustomers(() => res.data.clientes);
            }).catch(err => console.log(err)); 
            return ()=> source.cancel();
        } else {
            setCustomers(() => []);
        }
    }, [form.term])

    return (
        <div className="container" ref={useFadeLoad()}>
            <div className="row">
                <div className="col-100">
                    <h1>Clientes</h1>
                    <Link to="../">
                        <button>Regresar</button>
                    </Link>
                    <Link to="../crear-cliente">
                        <button>Nuevo cliente</button>
                    </Link>
                    <div class="row">
                        <form>
                            <input type="text" 
                                    name="term"
                                    value={form.term}
                                    onChange={handleChange} />
                        </form>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers?.map(cliente => {
                                return (
                                    <tr key={cliente.cif}>
                                        <td>{cliente.nombre}</td>
                                        <td>{cliente.localidad}</td>
                                        <td>
                                            <Link to={`/ventas/visualizar-cliente/${cliente.cif}`}>
                                                Visualizar
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
