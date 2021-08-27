import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'

import TableCustumers from './Components/TableCustumers'

import './styles.global.css'

const Customers: FC = () => {
  return (
    <Layout pageHeader={
        <PageHeader
          title={
            <FormattedMessage id="admin-example.Customers" />
          }
        />
      }
    >
      <PageBlock variation="full">
        <TableCustumers />
      </PageBlock>
    </Layout>
  )
}

export default Customers
