export const getLead = (
  _: any,
  { email }: { email: string },
  { clients: { leadAPI: leadClient } }: Context
) => leadClient.getLead(email)
