export const lead = async (
  _: any,
  { email }: { email: string },
  { clients: { lead: leadClient } }: Context
) => leadClient.lead(email)
