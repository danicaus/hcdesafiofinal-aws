import { IOClients } from "@vtex/api";
import { OMS } from "@vtex/clients";
import { LeadClient } from './lead'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    public get oms() {
      return this.getOrSet('oms', OMS)
    }
    public get lead() {
      return this.getOrSet('lead', LeadClient)
    }
}