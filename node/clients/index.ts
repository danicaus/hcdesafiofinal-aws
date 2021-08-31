import { IOClients } from "@vtex/api";
import { OMS } from "@vtex/clients";
import { LeadAPI } from './lead'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
    // API for get order details
    public get oms() {
      return this.getOrSet('oms', OMS)
    }
    // API for manage data of DynamoDB on AWS
    public get leadAPI() {
      return this.getOrSet('leadAPI', LeadAPI)
    }
}