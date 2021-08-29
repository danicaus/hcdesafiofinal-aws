import {
  Service,
  ServiceContext,
  ParamsContext,
  RecorderState,
  method,
} from '@vtex/api'
import { Clients } from './clients'
import { getOrderId } from './middlewares/getOrder'
import { lead } from './resolvers/lead'
import { leads } from './resolvers/leads'
import { deleteLead } from './resolvers/deleteLead'
import { updateLead } from './resolvers/updateLead'
import { newLead } from './resolvers/newLead'

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {}
}

export default new Service<Clients, State, ParamsContext>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: 10000,
      },
    },
  },
  routes: {
    order_hook: method({
      POST: [getOrderId],
    }),
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