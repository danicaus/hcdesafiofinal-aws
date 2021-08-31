import React, { useState } from 'react';
import { useCssHandles } from 'vtex.css-handles';
import '../styles/css/leads-form.css';

const CSS_HANDLES = ['LeadsFormContainer', 'LeadsFormInputContainer', 'LeadsFormLabel', 'LeadsFormInput', 'LeadsFormButton', 'LeadsFormValidation', 'FormConfirmationTitle']

const LeadsForm = () => {
  const handles = useCssHandles(CSS_HANDLES)

  const [subscribed, setSubscribed] = useState(false)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  async function handleForm(e) {
    e.preventDefault()

    const formData = {
      body: {
        name: name,
        email: email,
        telephone: telephone
      }
    }
    //Inserir código para enviar dados para a API aqui

    console.log(formData);


    //Colocar a mudança abaixo somente se o form foi enviado com sucesso
    setSubscribed(true)

    //Caso o form não tenha sido enviado com sucesso, colocar o alert
    // alert("Erro ao se conectar ao servidor")
  }

  function handleValidation(input) {
    const validation = input.validity.valid

    if (!validation) {
      input.parentElement.classList.add(`${handles.LeadsFormInputContainer}--invalid`)
    } else {
      input.parentElement.classList.remove(`${handles.LeadsFormInputContainer}--invalid`)
    }
  }

  const renderForm = ()=> {
    return (
      <form id="leads-form" onSubmit={handleForm}>
        <div className={`${handles.LeadsFormInputContainer}`}>
          <label className={`${handles.LeadsFormLabel}`} htmlFor="personName">Nome</label>
          <input className={`${handles.LeadsFormInput}`} onBlur={(e) => handleValidation(e.target)} onChange={e => setName(e.target.value)} type="text" minLength="3" name="personName" required id="personName"/>
          <span className={`${handles.LeadsFormValidation}`}> É necessário seu nome completo</span>
        </div>

        <div className={`${handles.LeadsFormInputContainer}`}>
          <label className={`${handles.LeadsFormLabel}`} htmlFor="personEmail">E-mail</label>
          <input className={`${handles.LeadsFormInput}`} onBlur={(e) => handleValidation(e.target)} onChange={e => setEmail(e.target.value)} type="email" pattern=".+@.+\.com" name="personEmail" id="personEmail" required/>
          <span className={`${handles.LeadsFormValidation}`}> Um endereço de e-mail válido é necessário</span>
        </div>

        <div className={`${handles.LeadsFormInputContainer}`}>
          <label className={`${handles.LeadsFormLabel}`} htmlFor="personTel">Telefone</label>
          <input className={`${handles.LeadsFormInput}`} onBlur={(e) => handleValidation(e.target)} onChange={e => setTelephone(e.target.value)} type="tel" minLength="9" name="personTel" id="personTel" required/>
          <span className={`${handles.LeadsFormValidation}`}> É necessário um telefone válido</span>
        </div>

        <button className={`${handles.LeadsFormButton}`} type="submit">Eu quero!</button>
      </form>
    )
  }

  const renderConfirmation = ()=> {
    return (
      <>
        <p className={`${handles.FormConfirmationTitle}`}>Seu e-mail foi cadastrado com sucesso!</p>
        <p className={`${handles.LeadsFormLabel}`}>A partir de agora você receberá nossas novidades e ofertas exclusivas.</p>
      </>
    )
  }

  return (
    <div className={`${handles.LeadsFormContainer}`}>
      {subscribed ? renderConfirmation() : renderForm()}
    </div>
  )
}

LeadsForm.schema = {
  title: 'editor.leadsform.title',
  description: 'editor.leadsform.description',
  type: 'object',
  properties: {
    title: {
      title: 'editor.leadsform.title.title',
      type: 'string',
      default: null,
    },
  },
}

export default LeadsForm