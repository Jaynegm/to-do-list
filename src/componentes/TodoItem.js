import React from 'react';

const cores = ['#FFCAB1', '#ecdcb0', '#C1D7AE', '#8CC084'];
let indiceCor = 0;

const obterCorFixa = () => {
  const cor = cores[indiceCor];
  indiceCor = (indiceCor + 1) % cores.length; // Cicla através das cores
  return cor;
};

const TodoItem = ({ tarefa, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${tarefa.completada ? 'completed' : ''}`} style={{ backgroundColor: obterCorFixa() }}>
      <input 
        type="checkbox" 
        checked={tarefa.completada} 
        onChange={onToggle} 
      />
      <span>{tarefa.texto}</span>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default TodoItem;
