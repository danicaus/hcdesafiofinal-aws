import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { useState } from 'react';

const CSS_HANDLES = ['LeadsFormContainer', 'LeadsFormInputContainer', 'LeadsFormLabel', 'LeadsFormInput', 'LeadsFormButton']


const LeadsForm = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  
  async function handleForm(e) {
    e.preventDefault()

    const formData  = {
      body: {
        name: name,
        email: email,
        telephone: telephone
      }
    }
    //código para enviar para a API aqui

    console.log(formData);
  }

  return (
    <div>
      <form className={`${handles.LeadsFormContainer}`} onSubmit={handleForm}>
        <div className={`${handles.LeadsFormInputContainer}`}>
          <label className={`${handles.LeadsFormLabel}`} htmlFor="personName">Nome</label>
          <input className={`${handles.LeadsFormInput}`} onChange ={e => setName(e.target.value)} type="text" name="personName" required id="personName" placeholder="Digite seu nome" />
        </div>

        <div className={`${handles.LeadsFormInputContainer}`}>
          <label className={`${handles.LeadsFormLabel}`} htmlFor="personEmail">E-mail</label>
          <input className={`${handles.LeadsFormInput}`} onChange={e => setEmail(e.target.value)} type="email" pattern=".+@.+\.com" name="personEmail" id="personEmail" required placeholder="Digite seu email" />
        </div>

        <div className={`${handles.LeadsFormInputContainer}`}>
          <label className={`${handles.LeadsFormLabel}`} htmlFor="personTel">Telefone</label>
          <input className={`${handles.LeadsFormInput}`} onChange={e => setTelephone(e.target.value)} type="text" name="personTel" id="personTel" required placeholder="Digite seu telefone" />
        </div>

        <button className={`${handles.LeadsFormButton}`} type="submit">Eu quero!</button>
      </form>
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