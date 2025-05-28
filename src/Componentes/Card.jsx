import estilo from './Card.module.css'

export function Card(){
    return(
        <div className={estilo.cardsContainer}>
            <div className={estilo.conteiner}><img src="src/assets/professor.jpg" alt="" />
                <div className={estilo.Professor}>
                    <a href="/CadastroProfessores">Professor</a>
                </div>
            </div>

            <div className={estilo.conteiner2}><img src="src/assets/Gesor.avif" alt="" />
                <div className={estilo.Gestor}>
                    <a href="CadastroGestor">Gestor</a>
                </div>
            
            </div>

            <div className={estilo.conteiner3}><img src="src/assets/disciplina.png" alt="" />
                <div className={estilo.Disciplina}>
                    <a href="/CadastroDisciplina">Disciplina</a>
                </div>
            
            </div>

            <div className={estilo.conteiner4}><img src="src/assets/baixados.webp" alt="" />
                <div className={estilo.Ambiente}>
                    <a href="/CadastroAmbiente">Ambiente</a>
                </div>
            
            </div>
        </div>
    )
}
