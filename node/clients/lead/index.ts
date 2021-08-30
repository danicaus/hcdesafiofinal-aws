import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import type { LeadInput } from '../../typings/custom'


export class LeadClient extends ExternalClient {

  constructor(context: IOContext, options?: InstanceOptions) {
        super('https://z584vx4z2e.execute-api.us-east-2.amazonaws.com', context, options)
  }
  
  public lead = (email: string) => {
    return this.http.get("/leads/"+email, {
      metric: 'lead-get',
    })
   }

  public leads = () => {
    return this.http.get("/leads", {
      metric: 'leads-get',
    })
  }

  public deleteLead = (email: string) => {
    return this.http.delete("/leads/"+email, {
      metric: 'lead-delete',
    })
  }

  public updateLead = (email: string) => {
    return email
    //const date = new Date();
    //return this.http.patch("/leads/"+email,{      
    //  email,
    //  situation: "Cliente",
    //  clientDate: date.toLocaleString("pt-BR")
    //}, {
    //  metric: 'lead-update',
    //})
  }

  public newLead = (lead: LeadInput) => {
    return lead
    //const date = new Date();
    //return this.http.put("/leads",{      
    //  ...lead,
    //  situation: "Prospecto",
    //  preospectDate: date.toLocaleString("pt-BR"),
    //  clientDate: ""
    //}, {
    //  metric: 'lead-create',
    //})
  }


}
