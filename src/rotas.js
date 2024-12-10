import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicial from "./pages/inicial/inicial.jsx";

import Secundaria from "./pages/secundaria/secundaria.jsx";

function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/secundaria" element={<Secundaria />} />

        </Routes>
    </BrowserRouter>
}

export default Rotas;