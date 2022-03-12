import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Nav from './components/Nav';
import ProtectRoute from './guard/ProtectRoute';

import Inicio from './pages/Inicio';
import NoAutorizado from './pages/NoAutorizado';
import Soporte from './pages/Soporte';

const InicioVentas = React.lazy(() => import("./modules/ventas/InicioVentas"));

function App() {

    const [user, setUser] = React.useState(null);

    let navigate = useNavigate();

    const handleLogin = () => {
        setUser({ id: '1', name: 'robin' });
        navigate('/');
    };
    const handleLogout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <>
            <Nav handleLogin={handleLogin} handleLogout={handleLogout} user={user} />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="soporte" element={
                    <ProtectRoute user={user}>
                        <Soporte />
                    </ProtectRoute>
                }
                />
                <Route
                    path="ventas/*"
                    element={
                        // <ProtectRoute user={user}>
                            <React.Suspense fallback={<>...</>}>
                                <InicioVentas />
                            </React.Suspense>
                        // </ProtectRoute>
                    }
                />
                <Route path="acceso-no-autorizado" element={<NoAutorizado />} />
                <Route path="*" element={
                    <div className="container">
                        <h1>Lo sentimos la página no existe</h1>
                        <Link to="/"><button>Volver a inicio</button></Link>
                    </div>
                }
                />
            </Routes>
        </>
    );
}

export default App;
