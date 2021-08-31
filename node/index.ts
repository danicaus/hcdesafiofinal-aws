
import {
  Service,
  ServiceContext,
  // ParamsContext,
  // RecorderState,
  method,
} from '@vtex/api'
import { Clients } from './clients'
import { getOrderId } from './middlewares/getOrder'
import { getLead } from './resolvers/getLead'
import { getLeads } from './resolvers/getLeads'
import { newLead } from './resolvers/newLead'
import { updateLead } from './resolvers/updateLead'
import { deleteLead } from './resolvers/deleteLead'

declare global {
  type Context = ServiceContext<Clients>
}

export default new Service({
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: 10000,
      }
    }
  },
  routes: {
    order_hook: method({
      POST: [getOrderId],
    })
  },
  graphql: {
    resolvers: {
      Query: {
        getLead,
        getLeads
      },
      Mutation: {
        newLead,
        updateLead,
        deleteLead
      }
    }
  }
})