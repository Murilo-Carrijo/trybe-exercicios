import React from 'react'
import estados from '../data/estados';

class PersonalData extends React.Component {
  render() {
    const {handleChange} = this.props;
    return(
      <fieldset className="container-personal-data">
        <legend>Dados Pessoais</legend>
        <fieldset>
          <legend>Nome: </legend>
          <input
            className="name"
            name="nome"
            type="text"
            maxlength="40"
            requireds
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Email: </legend>
          <input
            className="email"
            name="email"
            type="email"
            maxlength="50"
            required
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>CPF: </legend>
          <input
            className="cpf"
            name="cpf"
            type="text"
            maxlength="11"
            required
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Endereço: </legend>
          <input
            className="endereco"
            name="endereco"
            type="text"
            maxlength="200"
            required
            onChange={handleChange}
          />
        </fieldset>


        <fieldset className="container-endereco">
          <legend>Cidade/Estado </legend>
          <input
            className="cidade"
            name="cidade"
            type="text"
            maxlength="28"
            required
            onChange={handleChange}
          />
          <select
            className="estado"
            onChange={handleChange}
          >
            {estados.map((estado) => (
              <option value={estado}>{estado}</option>
            ))}
          </select>

          <div required>
            <label>
              Apartamento
              <input
                className="imovel"
                name="imovel"
                type="radio"
                onChange={handleChange}
              />
            </label>
            <label>
              Casa
              <input
                className="imovel"
                name="imovel"
                type="radio"
                onChange={handleChange}
              />
            </label>  
          </div>
       
        </fieldset>
      </fieldset>
    )
  }
}

export default PersonalData;