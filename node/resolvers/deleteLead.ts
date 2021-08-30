export const deleteLead = (
  _: any,
  { email }: { email: string },
  { clients: { leadAPI: leadClient } }: Context
) => leadClient.deleteLead(email)
