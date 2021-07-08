import React, { useState, useEffect, useRef } from 'react'
import Ccard from './../../components/card/index'
import Api from './../../assets/api/index'
import styles from './index.module.scss'
import { Card, Button } from 'antd'
import moment from 'moment'
export default function demo2 () {
  const nameRef = useRef(null)
  const [newdata, newSetInit] = useState({ list: [] })
  const [imgdata, navSetInit] = useState({ imglist: [] })
  const [faly] = useState(false)
  const [count, SetTime] = useState(0)
  useEffect(() => {
    newlist1()
    imgList()
    nameRef.current = timeid()
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

  // 加一
  const timeid = () => { setInterval(() => SetTime((c) => c + 1), 1000) }

  const start = () => {
    console.log('start')
    if (!nameRef.current) {
      nameRef.current = timeid()
      console.log(nameRef)
    }
  }

  const stop = () => {
    console.log('stop', nameRef)
    if (nameRef.current) {
      console.log('clear')
      clearInterval(nameRef.current)
      nameRef.current = null
    }
  }
  return (
    <>
      <Ccard title={'useState, useEffect, useRef的使用'}></Ccard>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
          <Card style={{ marginBottom: '15px' }}>
                <div className={styles.demo_nav}>
                  <div>你已经浏览了：{count}s</div>
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
                          <div className={styles.demo2_main_div2_btn}><Button type='primary'>查看详情</Button></div>
                      </div>
                 </div>
                     ))
                 }
          </div>

      </Card>

    </>
  )
}
