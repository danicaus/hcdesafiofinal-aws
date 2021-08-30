export const updateLead = (
  _: any,
  { email }: { email: string },
  { clients: { leadAPI: leadClient } }: Context
) => leadClient.updateLead(email)
