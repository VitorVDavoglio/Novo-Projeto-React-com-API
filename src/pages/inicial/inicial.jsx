import "./inicial.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import images from "../../constants/images.js";

function Inicial(){
    return <>
        <div className="container-fluid" style={{ marginTop: '30px', marginLeft: '30px' }}>
            <div className="">
                Página inicial
            </div>

            <p>Exemplo de como utilizar a troca de páginas</p>
            <Link to="/secundaria" style={{marginLeft: '30px' }}>
                <button>
                    Ir para página Secundária
                </button>
            </Link>

            <div className="" style={{ margin: '30px', marginLeft: '30px' }}>
                <p>Exemplo de imagens</p>
                <img src={images.pdf} />
                <img src={images.trash} />
            </div>
        </div>
    </>
}

export default Inicial;