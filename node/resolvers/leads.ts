
export const leads = (
  _: any,
  { clients: { lead: leadClient } }: Context
) => leadClient.leads()
