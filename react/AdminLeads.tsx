import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import leads from './graphql/getLeads.graphql'

interface IData {
    leads: IGetLeads[]
}

interface IGetLeads {
    name: string,
    email: string,
    phone: string,
    situation: string,
    prospectDate: string,
    clientDate: string
}

const AdminLeads: FC = () => {
    const { data, /*loading,*/ error } = useQuery<IData>(leads)

    // const usersColumns = [
    //     {
    //       id: 'name',
    //       title: 'Name',
    //     },
    //     {
    //       id: 'email',
    //       title: 'Email',
    //     },
    //     {
    //       id: 'phone',
    //       title: 'Phone',
    //     },
    //     {
    //       id: 'situation',
    //       title: 'Situation',
    //     },
    //     {
    //       id: 'prospectDate',
    //       title: 'ProspectDate',
    //     },
    //     {
    //       id: 'clientDate',
    //       title: 'ClientDate',
    //     }
    // ]

    // const mockUsersArray = [{ name: "loading", email:"loading", phone:"loading", situation:"loading", prospectDate:"loading", clientDate:"loading" }]

    if (error) {
        return (
            <Layout>
                <PageBlock title="Leads" variation="full">
                    <div className="error">
                        <h1>Algo inesperado aconteceu, tente novamente</h1>
                    </div>
                </PageBlock>
            </Layout>
        )
    }

    return (
        <Layout>
            <PageBlock title="Leads" subtitle="Lista de leads cadastradas no sistema." variation="full">
                <table className="leads-list">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>situation</th>
                            <th>clientDate</th>
                            <th>prospectDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.leads.map(lead => (
                            <tr key={lead.email}>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.phone}</td>
                                <td>{lead.situation}</td>
                                <td>{lead.clientDate}</td>
                                <td>{lead.prospectDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </PageBlock>
        </Layout>
    )
}

export default AdminLeads