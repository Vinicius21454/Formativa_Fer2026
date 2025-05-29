import React from "react";
import BarraNavegacao from "../BarraNavegacao";
import { Cabecalho } from "../Cabecalho";
import { Card } from "../Card";
import { Footer } from "../Footer";

export function Inicio(){
    return(
        <div>
            <BarraNavegacao/>
            <Cabecalho/>
            <Card/>
            <Footer/>
        </div>
    )
}
export default Inicio;