import { useContext, useState, useEffect, memo } from 'react'
import { Card, Input } from 'antd'
import myContextContext from './../../assets/hooks/index'

const Child = memo((props) => {
  const { setshowshuo } = props

  let object = useContext(myContextContext)

  return (
    <Card style={{ marginBottom: '15px' }}>
      <div style={{ display: 'flex' }}>
      <div>标题：</div>
       <div id='title' style={{ color: 'red' }}>{object.title}</div>

      </div>

    {
      object.type === 1 ? <Input style={{ width: '300px', display: 'inline-block' }} placeholder='请输入子组件的值' onChange={e => setshowshuo(e.target.value)}></Input> : null
    }

  </Card>
  )
})
export default Child
