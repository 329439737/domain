import React, { useState, useEffect } from 'react'
import { Card, Button } from 'antd'
import Ccard from './../../components/card/context' // '子组件'
import Mycontext from './../../assets/hooks/index' // 公共组件

export const Jsdemo1 = () => {
  const [titile] = useState({ title: 'js浅拷贝和深拷贝' })
  const [a] = useState([0, 1, [2, 3], 4])
  const [b] = useState([])

  useEffect(() => {
    // console.log(a)
  }, [])

  const btna = (obj) => {
    let _obj = JSON.stringify(obj)
    let _objclone = JSON.parse(_obj)
    return _objclone
  }

  const btna2 = () => {
    let b = btna(a)
    a[0] = 1
    a[2][0] = 1
    let nrea = Object.assign({}, a)
    console.log(nrea)
  }

  return (
         <>

          <Mycontext.Provider value={titile}>
              <Ccard></Ccard>
          </Mycontext.Provider>

          <div style={{ marginTop: '15px' }}>
             <Card>
                 <Button type='primary' onClick={() => { btna(a) }}>点击测试</Button>
                 <Button type='primary' onClick={() => { btna2() }}>点击测试1</Button>
             </Card>
          </div>

         </>

  )
}
export default Jsdemo1
