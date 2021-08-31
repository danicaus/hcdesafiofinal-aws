import React, { FC } from 'react'
import { Layout, PageBlock, Table } from 'vtex.styleguide'
import { useQuery } from 'react-apollo'

import getLeads from './graphql/getLeads.graphql'


const defaultSchema = {
    properties: {
      name: {
        title: 'Nome',
        width: 250,
      },
      email: {
        title: 'Email',
        minWidth: 250,
      },
      phone: {
        title: 'Telefone',
        minWidth: 100,
      },
      situation: {
        title: 'Situação',
        minWidth: 100,
      },
      prospectDate: {
        title: 'Prospecto desde',
        minWidth: 200,
      },
      clientDate: {
        title: 'Cliente desde',
        minWidth: 200,
      },
    },
}

const AdminLeads: FC = () => {
    const { data, loading, error } = useQuery(getLeads)

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
                <Table
                    loading={loading}
                    fullWidth
                    schema={defaultSchema}
                    items={data?.getLeads}
                    density="high"
                />
            </PageBlock>
        </Layout>
    )
}

export default AdminLeads