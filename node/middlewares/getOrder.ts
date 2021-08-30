import { json } from "co-body"

type Email = {
  email: string
}

export async function getOrderId(
  ctx: Context,
  next: () => Promise<any>
) {
  console.log('--------- EVENTO RECEBIDO --------')

  const request = await json(ctx.req)

  const {clientProfileData: { document: cpf }} = await ctx.clients.oms.order(request.OrderId)
    
  const clientEmail:Email[] = await ctx.clients.masterdata.searchDocuments({
    dataEntity: 'CL',
    where: `document=${cpf}`,
    fields: ['email'],
    pagination: {
      pageSize: 1,
      page: 1
    }
  })

  const [{email}] = clientEmail

  console.log(email)
  const isLead = await ctx.clients.leadAPI.getLead(email)
  if (isLead && isLead?.situation == "Prospecto") {
    ctx.clients.leadAPI.updateLead(email)
  }

  ctx.body = 'OK'
  ctx.status = 200
  ctx.set('Cache-Control', 'no-cache no-store')
  await next()
}
