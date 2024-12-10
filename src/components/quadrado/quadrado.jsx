import "./quadrado.css";

import { useEffect, useState } from "react";

function Quadrado(){
    return <>
        <div className="quadrado-exterior">
            <div className="">
                <h4>Esse é um modelo de component para utilizar várias vezes na sua aplicação</h4>
            </div>

            <div className="">
                <p>R$ 50,00</p>
            </div>
        </div>
    </>
}

export default Quadrado;