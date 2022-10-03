import React from 'react';

class Render extends React.Component {
  render() {
    const { nome, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao} = this.props;
    return (
      <div>
        <fieldset className="forms">
          <legend>Dados Pessoais</legend>
          <p> Nome: {nome} </p>
          <p> Email: {email} </p>
          <p> CPF: {cpf} </p>
          <p> Endereço: {endereco} </p>
          <p> Cidade: {cidade} </p>
          <p> Estado: {estado} </p>
          <p> Tipo: {tipo} </p>
        </fieldset>

        <fieldset className="forms">
          <legend> Dados Profissionais </legend>
          <p> Ultimo trabalho: {resumo} </p>
          <p> Cargo: {cargo} </p>
          <p> Descrição de Cargo: {descricao} </p>
        </fieldset>
      </div>
    )
  }
}

export default Render;