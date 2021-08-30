import { IOClients } from "@vtex/api";
import { OMS } from "@vtex/clients";
import { LeadAPI } from './lead'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get oms() {
      return this.getOrSet('oms', OMS)
    }
    public get leadAPI() {
      return this.getOrSet('leadAPI', LeadAPI)
    }
}