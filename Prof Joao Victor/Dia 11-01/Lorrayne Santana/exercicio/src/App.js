import React, { useState } from 'react';

function ListaTarefas() {
  const [Tarefas, setTarefas] = useState(['Estudar React', 'Fazer exercício', 'Caminhar']);
  const [NovaTarefa, setNovaTarefa] = useState('');

  const handleEntrada = (event) => {
    setNovaTarefa(event.target.value);
  };

  const handleAddTarefa = () => {
    if (NovaTarefa.trim() !== '') {
      setTarefas([...Tarefas, NovaTarefa]);
      setNovaTarefa('');
    }
  };

  const handleDeleteTarefa = (index) => {
    const updatedTarefas = [...Tarefas];
    updatedTarefas.splice(index, 1);
    setTarefas(updatedTarefas);
  };

  return (
    <div>
      <h1>LISTA DE TAREFAS</h1>
      <input
        type="text"
        value={NovaTarefa}
        onChange={handleEntrada}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTarefa}>SALVAR</button>
      <ul>
        {Tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => handleDeleteTarefa(index)}>EXCLUIR</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;