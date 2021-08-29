interface Args {
  email: string
}

export const deleteLead = (
  _: any,
  { email }: Args,
  { clients: { lead: leadClient } }: Context
) => leadClient.deleteLead(email)
