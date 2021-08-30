import type { LeadInput } from '../typings/lead'

interface Args {
  lead: LeadInput
}

export const newLead = (
  _: any,
  { lead }: Args,
  { clients: { leadAPI: leadClient } }: Context
) => leadClient.newLead(lead)
