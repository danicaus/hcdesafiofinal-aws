import type { ParamsContext, RecorderState, ServiceContext } from '@vtex/api'
import { Service } from '@vtex/api'


import { Clients } from './clients'
import { lead } from './resolvers/lead'
import { leads } from './resolvers/leads'
import { deleteLead } from './resolvers/deleteLead'
import { updateLead } from './resolvers/updateLead'
import { newLead } from './resolvers/newLead'


const MEDIUM_TIMEOUT_MS = 2 * 1000

declare global {
  
  type Context = ServiceContext<Clients>
}


export default new Service<Clients, RecorderState, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        timeout: MEDIUM_TIMEOUT_MS,
      },
    },
  },
  graphql: {
    resolvers: {
      Mutation: {
        deleteLead,
        updateLead,
        newLead,
      },
      Query: {
        lead,
        leads,
      },
    },
  },
})
