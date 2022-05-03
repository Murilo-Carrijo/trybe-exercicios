import React from 'react';
import Header from './Header';
import PersonalData from './PersonalData';
import LastJob from './LastJob';
import Render from './Render';

import './Form.css';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: false,
      resumo: '',
      cargo: '',
      descricao: '',
      submitted: false,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSubmit = event => {
    event.preventDefault();
  }

  sendForm = () => {
    const {submitted} = this.state;
    if (submitted === false) {
      this.setState({ submitted: true })
    } else {
      this.setState({ submitted: false })
    }
  };

  clear = () => {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: false,
      resumo: '',
      cargo: '',
      descricao: '',
      submitted: false,
    })
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao, submitted} = this.state;
    return(
      <div className="forms">
        <Header />
        <PersonalData
          handleChange={this.handleChange}
        />
        <LastJob
          handleChange={this.handleChange}
          sendForm={this.sendForm}
          clear={this.clear}
        />
        <div>
          { submitted &&
            <Render
              nome={nome}
              email={email}
              cpf={cpf}
              endereco={endereco}
              cidade={cidade}
              estado={estado}
              tipo={tipo}
              resumo={resumo}
              cargo={cargo}
              descricao={descricao}
            />
          }
        </div>
      </div>
    )
  }
}

export default Form;