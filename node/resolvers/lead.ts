export const lead = (
  _: any,
  { email }: { email: string },
  { clients: { leadAPI: leadClient } }: Context
) => leadClient.lead(email)
