import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'

import TableProspectus from './Components/TableProspectus'

import './styles.global.css'

const Prospectus: FC = () => {
  return (
    <Layout
      pageHeader={
        <PageHeader
          title={
            <FormattedMessage id="admin-example.Prospectus" />
          }
        />
      }
    >
      <PageBlock variation="full">
        <TableProspectus />
      </PageBlock>
    </Layout>
  )
}

export default Prospectus
