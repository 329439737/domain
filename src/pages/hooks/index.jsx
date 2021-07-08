import React, { useState, useEffect } from 'react'
import { Card, List, Button, Input, Row, message } from 'antd'
import Api from './../../assets/api/index'
import Ccard from './../../components/card/index'

export default function Hooksss () {
  const [data, SetInit] = useState({ list: [] })
  const [info, InputInfo] = useState()
  const [faly, Typefaly] = useState()
  useEffect(() => {
    Api.DomainList({}).then((res) => {
      SetInit({ list: res.message })
    })
  }, [faly])

  // 添加品牌
  function addlist (param) {
    console.log(param)
    Api.AddList(param).then((res) => {
      message.success(res.message)
      Typefaly(info)
    })
  }
  // 删除品牌
  function dellist (id) {
    Api.delList(id).then((res) => {
      message.success(res.message)
      Typefaly(id)
    })
  }
  return (

    <>
      <Ccard title={'初步认识hooks(useState, useEffect)'}></Ccard>
      <Card>
        <Row style={{ display: 'flex' }}>
            <Input placeholder='请输入...' style={{ width: '200px' }} onChange={(e) => InputInfo(e.target.value)}></Input>
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
               data.list.map((item, i) => (

                 <List.Item key={item.id}>
                    <Card title={item.name}> <Button type='primary' onClick={() => dellist(item.id)}>删除</Button></Card>
                 </List.Item>
               ))
              }
        </List>
      </Card>

    </>
  )
}
