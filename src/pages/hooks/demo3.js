import { useMemo, useState, useEffect, memo } from 'react'
import Mycontext from './../../assets/hooks/index' // 公共组件
import Child from './../../components/card/context'// 子组件
import { Card } from 'antd'
// import Api from './../../assets/api/index'
import styles from './demo3.module.scss'
const demo3 = () => {
  const [info] = useState({ title: 'useMemo' })
  const [data, SetInit] = useState({ list: [] })
  useEffect(() => {

  }, [])
  return (
      <>
         <Mycontext.Provider value={info}>
           <Child></Child>
         </Mycontext.Provider>

          <Card >

          </Card>

      </>
  )
}

export default demo3
