export const leads = (
  _: any,
  __: any,
  { clients: { leadAPI: leadClient } }: Context
) => leadClient.leads()