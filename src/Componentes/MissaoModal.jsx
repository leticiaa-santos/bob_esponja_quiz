import { useState } from "react";

import sucesso1 from "../assets/figurinhas/bob_arco_iris.png";
import sucesso2 from "../assets/figurinhas/lula_acerto_harmonizado.png";
import sucesso3 from "../assets/figurinhas/lula_acerto.png";

import erro1 from "../assets/figurinhas/lula_erro_harmonizado.png";
import erro2 from "../assets/figurinhas/gary_erro.png";
import erro3 from "../assets/figurinhas/bob_erro.png";

// Listas com as figurinhas
const figurinhasSucesso = [sucesso1, sucesso2, sucesso3];
const figurinhasErro = [erro1, erro2, erro3];

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState(null);
  const [figurinhaAtual, setFigurinhaAtual] = useState(null);

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

      // Escolhe figurinha aleatória de sucesso
      const aleatoria =
        figurinhasSucesso[Math.floor(Math.random() * figurinhasSucesso.length)];
      setFigurinhaAtual(aleatoria);

      // Chama a função de concluir após 5s
      setTimeout(() => {
        onConcluir(missao.id, aleatoria);
      }, 5000);
    } else {
      setResultado("Resposta incorreta. Tente novamente!");
      setStatus("erro");

      // Escolhe figurinha aleatória de erro
      const aleatoria =
        figurinhasErro[Math.floor(Math.random() * figurinhasErro.length)];
      setFigurinhaAtual(aleatoria);
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
        <section className="resultado" role="alert" aria-live="assertive">
          <p>{resultado}</p>
          {figurinhaAtual && (
            <img
              src={figurinhaAtual}
              alt="Figurinha do resultado"
              width="500"
            />
          )}
        </section>
      )}
    </dialog>
  );
}
