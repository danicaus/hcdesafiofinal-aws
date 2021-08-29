import { IOClients } from '@vtex/api'

import { LeadClient } from './lead'

export class Clients extends IOClients {
  public get lead() {
    return this.getOrSet('lead', LeadClient)
  }
  
}
