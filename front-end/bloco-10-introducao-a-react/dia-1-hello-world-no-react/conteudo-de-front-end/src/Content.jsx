import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        { conteudos.map(conteudo => (
          <div className="card-content">
            <h4>{`O conteudo é: ${conteudo.conteudo}`}</h4>
            <div className="card-content-text">
              <p>{`Status: ${conteudo.status}`}</p>
              <p>{`Bloco: ${conteudo.bloco}`}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;