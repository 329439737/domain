import React, { useState, useEffect } from 'react'
import { Card, List, Button, Input, Row, message } from 'antd'
import Api from './../../assets/api/index'
import Mycontext from './../../assets/hooks/index' // 公共组件
import Child from './../../components/card/context'// 子组件

export default function Hooksss () {
  const [context] = useState({ title: '初步认识hooks(useState, useEffect)', type: 0 })
  const [data, SetInit] = useState({ list: [] })
  const [info, InputInfo] = useState()
  const [faly, Typefaly] = useState()
  useEffect(() => {
    Api.DomainList({}).then((res) => {
      SetInit({ list: res.message })
    })
  }, [faly])

  // 添加品牌
  const addlist = (param) => {
    // console.log(param)
    Api.AddList(param).then((res) => {
      message.success(res.message)
      Typefaly(info)
    })
  }
  // 删除品牌
  const dellist = (id) => {
    Api.delList(id).then((res) => {
      message.success(res.message)
      Typefaly(id)
    })
  }

  // enter热键
  const keydown = (e) => {
    if (e.keyCode === 13) {
      addlist({ name: info })
      InputInfo('')
    } else if (e.keyCode === 27) {
      alert('你要退出？')
    }
  }

  return (

    <>

      <Mycontext.Provider value ={context}>
             <Child/>
           </Mycontext.Provider>
      <Card>
        <Row style={{ display: 'flex' }}>
            <Input placeholder='请输入...' style={{ width: '200px' }} onChange={(e) => InputInfo(e.target.value)} onKeyUp={(e) => { keydown(e) }} value={info}></Input>
            <Button type='primary' style={{ margin: '0 20px' }} onClick={() => addlist({ name: info })}>添加</Button>
         </Row>
      </Card>

      <Card style={{ marginTop: '15px' }}>
        <List
         grid={{
           gutter: 16,
           xs: 1,
           sm: 2,
           md: 4,
           lg: 4,
           xl: 6,
           xxl: 3
         }}
          >

              {
                 data.list
                   ? data.list.map((item, i) => (

                 <List.Item key={item.id}>
                    <Card title={item.name}> <Button type='primary' onClick={() => dellist(item.id)}>删除</Button></Card>
                 </List.Item>
                   ))
                   : null
              }
        </List>
      </Card>

    </>
  )
}
