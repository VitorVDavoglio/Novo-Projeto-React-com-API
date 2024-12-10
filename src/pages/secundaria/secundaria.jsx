import "./secundaria.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Quadrado from "../../components/quadrado/quadrado.jsx";

function Secundaria(){
    return <>
        <div className="container-fluid" style={{ margin: '30px', marginRight: '100px' }}>
            <div className="">
                Página Secundária
            </div>

            <Link to="/">
                <button>
                    Ir para página Inicial
                </button>
            </Link>
            <div className="div-components">
                <Quadrado/>
                <Quadrado/>
            </div>
        </div>
    </>
}

export default Secundaria;