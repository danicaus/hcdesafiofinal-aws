export interface Lead{
  name: String!
  email: String!
  phone: String!
  situation: String
  prospectDate: String
  clientDate: String
}

export interface LeadInput {
  name: String!
  email: String!
  phone: String!
}