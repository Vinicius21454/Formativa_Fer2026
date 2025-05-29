import estilo from './BarraNavegacao.module.css'

export  function BarraNavegacao(){
    return(
        <div className={estilo.conteiner}>
            <h2>SENAI</h2>
            <h2>REACT</h2>
            <a href="/Login"><h2>LOGIN</h2></a>
        </div>
    )
}

export default BarraNavegacao;