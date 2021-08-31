import React, { useState } from 'react';
import { useCssHandles } from 'vtex.css-handles'
import { useMutation } from 'react-apollo';
import createLead from './graphql/createLead.graphql'
import '../styles/css/leads-form.css';


const CSS_HANDLES = ['LeadsFormContainer', 'LeadsFormInputContainer', 'LeadsFormLabel', 'LeadsFormInput', 'LeadsFormButton', 'LeadsFormValidation', 'FormConfirmationTitle']

const LeadsForm = () => {
  const handles = useCssHandles(CSS_HANDLES)

  const [subscribed, setSubscribed] = useState(false)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [newLead] = useMutation(createLead)
  
  async function handleForm(e) {
    e.preventDefault()

    const formData = {
      body: {
        name: name,
        email: email,
        phone: phone
      }
    }
    
    console.log(formData.body);

    newLead(
      {
        variables: {
          formData: formData.body
        }
      }
    )

    setSubscribed(true)

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
          <input className={`${handles.LeadsFormInput}`} onBlur={(e) => handleValidation(e.target)} onChange={e => setPhone(e.target.value)} type="tel" minLength="9" name="personTel" id="personTel" required/>
          <span className={`${handles.LeadsFormValidation}`}> É necessário um telefone válido</span>
        </div>

        <button className={`${handles.LeadsFormButton}`} type="submit" onClick={handleForm}>Eu quero!</button>
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