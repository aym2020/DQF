import React, { useEffect, useState } from 'react'

import RulesAPI from 'plugins/rulesAPI'
import RulesTable from './components/rule-table'
import AddRule from 'pages/rules/components/create-rule'
import BasicPage from 'library/page-templates/basic-page'
import { type Rule } from 'types'
import { TABLE_PAGE_SIZE } from 'utils'

const Rules: React.FunctionComponent = () => {
  const [rules, setRules] = useState<Rule[]>([])
  const [total, setTotal] = useState<number>(0)
  const [isFormVisible, setIsFormVisible] = useState(false)

  const getRules = async (page: number, filter: string): Promise<void> => {
    const offset = (page - 1)
    try {
      const response = await RulesAPI.get(`rules/?${filter}&offset=${offset * TABLE_PAGE_SIZE}&limit=${TABLE_PAGE_SIZE}`)
      setRules(response.data.results)
      setTotal(response.data.total)
    } catch (error) {
      console.log('oh no request failed')
    }
  }

  useEffect(() => {
    void getRules(1, '')
  }, [])

  const insertNewRule = (rule: any): void => {
    setIsFormVisible(false)

    const filteredRules = rules.filter((item: any) => item.name !== rule.name)
    filteredRules.unshift(rule)
    setRules(filteredRules)
  }

  const getRulePage = (page: number, filter: string): void => {
    void getRules(page, filter)
  }

  return (
    <BasicPage>
        { isFormVisible
          ? <AddRule insertNewData={insertNewRule} />
          : <RulesTable
            rules={rules}
              setIsFormVisible={setIsFormVisible}
              getRulePage={getRulePage}
              total={total}
              /> }
      </BasicPage>
  )
}

export default Rules
