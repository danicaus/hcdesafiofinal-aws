import { useQuery } from 'react-apollo'
import getLead from './graphql/getLead.graphql'

const VerifyLead = (email: String) => {
  const { loading, error, data } = useQuery(getLead, {
        variables: {
            email: email
        }
    })

  if (loading) {
    return 'Loading…'
  }
  if (error) {
    return `Error ${error}`
  }

  return `LEAD ${data}`
}

export default VerifyLead