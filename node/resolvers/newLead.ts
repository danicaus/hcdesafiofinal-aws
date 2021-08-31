import type { LeadInput } from '../typings/lead'

interface Args {
  formData: LeadInput
}

export const newLead = (
  _: any,
  { formData }: Args,
  { clients: { leadAPI: leadClient } }: Context
) => leadClient.newLead(formData)
