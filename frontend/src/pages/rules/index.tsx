import React, { useEffect, useState } from 'react'

import RulesAPI from 'plugins/rulesAPI'
import RulesTable from './components/rules-table'
import AddRule from 'pages/addRule'
import { Layout } from 'antd'

const { Content } = Layout

const Rules: React.FunctionComponent = () => {
  const [rules, setRules] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)

  useEffect(() => {
    const getRules = async (): Promise<void> => {
      try {
        const response = await RulesAPI.get('rules')
        setRules(response.data)
      } catch (error) {
        console.log('oh no request failed')
      }
    }
    void getRules()
  }, [])

  return (
    <Layout>
      <Content>
        { isFormVisible
          ? <AddRule/>
          : <RulesTable rules={rules} setIsFormVisible={setIsFormVisible} /> }
      </Content>
    </Layout>
  )
}

export default Rules
