
import {
  Service,
  ServiceContext,
  ParamsContext,
  RecorderState,
  method,
} from '@vtex/api'
import { Clients } from './clients'
import { getOrderId } from './middlewares/getOrder'

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
})