import React from 'react';

class LastJob extends React.Component {
  
  render() { 
    const {handleChange, sendForm, clear} = this.props;
    return (
      <fieldset className="container-personal-data">
        <legend>Dados Profissionais</legend>
        <fieldset>
          <legend>Ultimo trabalho</legend>
          <input
            name='resumo'
            className="last-job"
            type="textarea"
            maxlength="1000"
            requireds
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Cargo</legend>
          <input
            name="cargo"
            className="cargo"
            type="textarea"
            maxlength="40"
            requireds
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Descrição do cargo</legend>
          <input
            nome="descricao"
            className="descricao"
            type="textarea"
            maxlength="500"
            requireds
            onChange={handleChange}
          />
        </fieldset>
        <button
          type="button"
          className="button"
          onClick={sendForm}
        >
          Enviar
        </button>
        <button
          type="button"
          className="button"
          onClick={clear}
        >
          Limpar
        </button>
      </fieldset>
    );
  }
}
 
export default LastJob;