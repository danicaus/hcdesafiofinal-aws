
interface EditLeadArg {
  email: string
  }

export const updateLead = (
  _: any,
  { email }: EditLeadArg,
  { clients: { lead: leadClient } }: Context
) => leadClient.updateLead(email)
