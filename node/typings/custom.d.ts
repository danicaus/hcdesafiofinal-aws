export interface Lead{
  situation: String
  phone: String!
  email: String!
  name: String!
  clientDate: String
  prospectDate: String
}

export interface LeadInput {
  phone: String!
  email: String!
  name: String!
}


