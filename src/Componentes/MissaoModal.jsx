import { useState } from "react";
import sucesso from "../assets/figurinhas/bob_arco_iris.png";
import erro from "../assets/figurinhas/lula_erro_harmonizado.png";

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState(null);

  const verificarResposta = () => {
    if (!resposta.trim()) {
      alert("Por favor, digite uma resposta antes de enviar!");
      return;
    }

    if (
      resposta.trim().toLowerCase() ===
      missao.respostaCorreta.trim().toLowerCase()
    ) {
      setResultado("Resposta correta! Parabéns!");
      setStatus("sucesso");

      // chama a função de concluir após 5s
      setTimeout(() => {
        onConcluir(missao.id);
      }, 5000);
    } else {
      setResultado("Resposta incorreta. Tente novamente!");
      setStatus("erro");
    }
  };

  return (
    <dialog
      open
      className="modal"
      role="dialog"
      aria-labelledby="titulo-missao"
      aria-describedby="descricao-missao"
    >
      <h2 className="titulo" id="titulo-missao">
        {missao.titulo}
      </h2>
      <p id="descricao-missao">{missao.descricao}</p>

      <label htmlFor="resposta" className="label-resposta">
        Digite sua resposta
      </label>
      <input
        className="caixaTexto"
        id="resposta"
        type="text"
        placeholder="Digite sua resposta..."
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        required
      />

      <footer className="modal-botoes">
        <button className="button_missao" onClick={verificarResposta}>
          Enviar
        </button>
        <button className="button_missao" onClick={onClose}>
          Fechar
        </button>
      </footer>

      {resultado && (
        <section
          className="resultado"
          role="alert"
          aria-live="assertive"
        >
          <p>{resultado}</p>
          {status === "sucesso" && (
            <img
              src={sucesso}
              alt="Missão concluída com sucesso"
              width="500"
            />
          )}
          {status === "erro" && (
            <img
              src={erro}
              alt="Erro na resposta da missão"
              width="500"
            />
          )}
        </section>
      )}
    </dialog>
  );
}
