export const getLeads = (
  _: any,
  __: any,
  { clients: { leadAPI: leadClient } }: Context
) => leadClient.getLeads()