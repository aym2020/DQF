import React, { useEffect, useState } from 'react'

import rulesAPI from 'plugins/rulesAPI'
import RulesTable from './components/rules-table'

const Rules: React.FunctionComponent = () => {
  const [rules, setRules] = useState([])

  useEffect(() => {
    const getRules = async (): Promise<void> => {
      try {
        const response = await rulesAPI.get('rules')
        setRules(response.data)
      } catch (error) {
        console.log('oh no request failed')
      }
    }
    void getRules()
  }, [])

  return (
        <div className="Rules">
            <RulesTable rules={rules} />
        </div>
  )
}

export default Rules
