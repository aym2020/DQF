import React, { useEffect, useState } from 'react'

import RulesAPI from 'plugins/rulesAPI'
import RulesTable from './components/rule-table'
import AddRule from 'pages/rules/components/create-rule'
import BasicPage from 'library/page-templates/basic-page'

const Rules: React.FunctionComponent = () => {
  const [rules, setRules] = useState<any>([])
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

  const insertNewRule = (rule: any): void => {
    setIsFormVisible(false)

    const filteredRules = rules.filter((item: any) => item.name !== rule.name)
    filteredRules.unshift(rule)
    setRules(filteredRules)
  }

  return (
    <BasicPage>
        { isFormVisible
          ? <AddRule insertNewData={insertNewRule} />
          : <RulesTable rules={rules} setIsFormVisible={setIsFormVisible} /> }
      </BasicPage>
  )
}

export default Rules
