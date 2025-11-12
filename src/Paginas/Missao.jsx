import { useState } from "react";
import { missoes } from '../Dados/dadosMissao';
import { MissaoCard } from '../Componentes/MissaoCard';
import { MissaoModal } from '../Componentes/MissaoModal';

export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const concluirMissao = (id) => {
    //lê o inventário existente, se não hoiver, usa um array vazio
    const inventario = JSON.parse(localStorage.getItem("inventario")) || [];

    //encontra os dados da missão pelos dados estáticos
    const m = missoes.find((ms) => ms.id === id);

    //cria o objeto figurinha 
    const figurinha = {
      id: m.id,
      nome: m.titulo || `Figurinha ${m.id}`,
      imagem: m.figurinha || "/src/assets/figurinhas/bob_arco_iris.png"
    };

    //evita duplicar a mesma figurinha
    if(!inventario.some((f) => f.id === id)){
      inventario.push(figurinha);
      localStorage.setItem("inventario", JSON.stringify(inventario));
    }

    //fecha o modal
    setMissaoSelecionada(null);
    setRefresh((r) => r + 1);
  };

  return (
    <section 
      className='conteiner'
      aria-labelledby="titulo-missoes"
    >
      <h2 id="titulo-missoes">Missões</h2>
      <section 
        className="missoes-grid"
        aria-label="Lista de missões disponíveis"
      >
        {missoes.map((m) => (
          <MissaoCard
            key={`${m.id}-${refresh}`} 
            missao={m}  
            onIniciarMissao={setMissaoSelecionada} 
          />
        ))}
      </section>

      {missaoSelecionada && (
        <MissaoModal 
          missao={missaoSelecionada} 
          onClose={() => setMissaoSelecionada(null)} 
          onConcluir={concluirMissao} 
        />
      )}
    </section>
  );
}
