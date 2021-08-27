import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'

import './styles.global.css'

const CustomersId: FC<Props> = ({ params }) => {
  return (
    <Layout
      pageHeader={
        <PageHeader
          title={
            <FormattedMessage id="admin-example.CustomersId" />
          }
        />
      }
    >
      <PageBlock variation="full">
        <div>
          Params: <pre>{JSON.stringify(params, null, 2)}</pre>
        </div>
      </PageBlock>
    </Layout>
  )
}

interface Props {
  params: any
}

export default CustomersId
