import React, { useState, useEffect, useRef, useReducer, useMemo } from 'react'
import Api from './../../assets/api/index'
import styles from './index.module.scss'
import { Card, Button } from 'antd'
import moment from 'moment'
import Mycontext from './../../assets/hooks/index' // 公共组件
import Child from './../../components/card/context'// 子组件
import Detail from './demo2-modal' // 详情组件
const demo2 = (props) => {
  const [context] = useState({ title: '用hooks的useContext进行父子组件传值', type: 1 })

  // const ageinit = { age: 0 }
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case 'a':
  //       return { age: 666 }
  //     case 'b':
  //       return { age: 888 }
  //     default :
  //       throw new Error()
  //   }
  // }
  // const [state, dispatch] = useReducer(reducer, ageinit)

  const [newdata, newSetInit] = useState({ list: [] })
  const [imgdata, navSetInit] = useState({ imglist: [] })
  const [faly, SetFalt] = useState(false) // 弹框判断
  const [rowrecord, SetRow] = useState({}) // 行数据
  const [count, SetTime] = useState(0)
  const [infoa, Setcode] = useState('这是子组件传过来的数据')
  useEffect(() => {
    newlist1()
    imgList()
    timeid()
  }, [])

  const newlist1 = () => {
    Api.NewsList({}).then((res) => {
      newSetInit({ list: res.message })
    })
  }

  const imgList = () => {
    Api.imgList({}).then((res) => {
      navSetInit({ imglist: res.message })
    })
  }
  let timeid = null
  // 加一
  // (() => SetTime((c) => c + 1), 1000) }

  // 子组件传过来的方法
  const setshowshuo = (e) => {
    Setcode(e)
  }

  // 获取详情信息
  const getimgdetail = (param) => {
    Api.imgdetail(param).then((res) => {
      SetRow(res.message[0])
      SetFalt(true)
    })
  }
  // 关闭弹框
  const onCancel = () => {
    SetRow({})
    SetFalt(false)
  }

  const [time, SetTime1] = useState(true)

  const settime = () => {
    clearInterval(timeid)

    SetTime1(false)
  }
  const useReff = useRef()
  useEffect(() => {
    console.log('1' + useReff.current)
  }, [])
  return (

    <>
           <Mycontext.Provider value ={context}>
             <Child setshowshuo={setshowshuo}/>
           </Mycontext.Provider>

            <Card>
            {/* <Button onClick={() => dispatch({ type: 'a' })}>加</Button>
            {state.age}
            <Button onClick={() => dispatch({ type: 'b' })}>减</Button> */}
            {infoa}
            </Card>

             <Card style={{ marginBottom: '15px' }}>
                <div className={styles.demo_nav}>
                  <div>你已经浏览了：{count}s</div>
                  <Button onClick={settime} ref={useReff}>关闭</Button>
                    <ul className={styles.demo2_ul}>
                      {
                        imgdata.imglist.map((item, i) => (
                          <li key={i}>{item.title}</li>
                        ))
                      }
                    </ul>
                </div>
         </Card>

      <Card>
        <div className={styles.flex}>

                 {
                     newdata.list.map((item, i) => (
                      <div className={styles.demo2_main} key={i}>
                      <div className={styles.demo2_main_div1}>
                           <div className={styles.demo2_main_div1_img}><img className={styles.img} src={item.img_url}></img></div>
                           <div className={styles.demo2_main_div1_addtime}>{moment(item.add_time).format('YYYY-MM-DD HH:mm:ss')}</div>
                      </div>

                      <div className={styles.demo2_main_div2}>
                          <div className={styles.demo2_main_div2_title }><span>标题：<span style={{ color: 'red' }}>{item.title}</span></span></div>
                          <div className={styles.demo2_main_div2_title }><span>摘要：<span style={{ color: 'red' }}>{item.zhaiyao}</span></span></div>
                          <div className={styles.demo2_main_div2_btn}><Button type='primary' onClick={() => { getimgdetail(item.id) }}>查看详情</Button></div>
                      </div>
                 </div>
                     ))
                 }
          </div>

           {
            faly
              ? <Mycontext.Provider value={rowrecord}>
                 <Detail onCancel = {onCancel}></Detail>
                 </Mycontext.Provider>
              : null
            }
      </Card>

    </>
  )
}
export default demo2
