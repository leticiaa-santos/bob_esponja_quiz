export function MissaoCard({ missao, onIniciarMissao, concluida }) {
  return (
    <article 
      className='missao-card' 
      aria-labelledby={`missao-title-${missao.id}`}
    >
      <h3 id={`missao-title-${missao.id}`}>{missao.titulo}</h3>
      <p>{missao.missao}</p>
      <button 
        className="button_missao" 
        onClick={() => onIniciarMissao(missao)}  
        disabled={concluida}
        aria-disabled={concluida}
      >
        {concluida ? "Missão concluída" : "Iniciar Missão"}
      </button>
    </article>
  )
}
