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
  
  // Get a lead based on email
  public getLead = async (email: string) => {
    const response =  await this.http.get(`/${email}`, {
      metric: 'lead-get'
    })
    return response.Item
   }

  // Get all leads
  public getLeads = async () => {
    const response = await this.http.get("", {
      metric: 'leads-get'
    })
    return response.Items
  }

  // Delete a lead based on email
  public deleteLead = async (email: string) => {
    const response = await this.http.delete(`/${email}`, {
      metric: 'lead-delete'
    })
    return response?.data
  }

  // Update the lead to cliet when the lead buy some product
  public updateLead = async (email: string) => {
    return await this.http.patch(`/${email}`,{
     metric: 'lead-update'
    })
  }

  // Create the lead filled on the front lead form
  public newLead = async (formData: LeadInput) => {
    const message = await this.http.put("",formData,{
     metric: 'lead-create'
    })
    return { message }
  }
}
