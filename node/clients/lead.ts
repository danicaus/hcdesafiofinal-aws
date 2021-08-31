import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import type { LeadInput } from '../typings/lead'


export class LeadAPI extends ExternalClient {

  constructor(context: IOContext, options?: InstanceOptions) {
        super('https://z584vx4z2e.execute-api.us-east-2.amazonaws.com/leads', context, {
          ...options,
          retries: 2,
          headers: {
            "Content-Type": "application/json",
          }
        })
  }
  
  public lead = async (email: string) => {
    const response =  await this.http.get(`/${email}`, {
      metric: 'lead-get'
    })
    return response.Item
   }

  public leads = async () => {
    const response = await this.http.get("", {
      metric: 'leads-get'
    })
    return response.Items
  }

  public deleteLead = async (email: string) => {
    return await this.http.delete(`/${email}`, {
      metric: 'lead-delete'
    })
  }

  public updateLead = async (email: string) => {
    return await this.http.patch(`/${email}`,{
     metric: 'lead-update'
    })
  }

  public newLead = async (lead: LeadInput) => {
    return await this.http.put("",lead,{
     metric: 'lead-create'
    })
  }
}