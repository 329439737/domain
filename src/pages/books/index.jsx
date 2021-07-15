import React, { useState, useEffect } from 'react'
import { Card, Table } from 'antd'
import styles from './index.module.scss'
import { Decoration10 } from '@jiaminghi/data-view-react'
import { kashu, threelist, onelist } from './../../assets/json/kashu'
import Api from './../../assets/api/index'
import moment from 'moment'
const Books = () => {
  const [data, SetInit] = useState({ list: [] })
  const [columns] = useState([
    {
      title: '统计时间',
      key: 'bindList-0',
      width: 44,
      align: 'center',
      render: (text, record, index) => (
        <div>{moment(record.ctime).format('YYYY-MM-DD hh:mm:ss')}</div>
      )
    },
    {
      title: '客户',
      key: 'bindList-1',
      width: 44,
      align: 'center',
      dataIndex: 'name'
    },
    {
      title: '销售金额',
      key: 'bindList-2',
      width: 44,
      align: 'center',
      render: (text, record, index) => `${index + 1}`
    }
  ])
  useEffect(() => {
    Api.DomainList({}).then((res) => {
      SetInit({ list: res.message })
    })
  }, [])
  return (
    <>
           <Card>
                {
                  onelist.map((item, i) => (
                    <div className={styles.border} key={i}>
                        <div className={`${styles.top}`} style={{ background: item.bg }}>
                        {item.img}
                        <span style={{ color: '#fff' }}>{item.totaltitle}</span>
                         </div>
                        <div className={styles.foot_pink}>{item.totle}</div>
                         </div>
                  ))
                }
           </Card>

           {/* 第二部分 */}
           <div className={styles.nav}>
             {
               threelist.map((item, i) => (
                <Card className={styles.card} key={i}>

                <div className={styles.nav_one}>{item.img}</div>
                <div className={styles.nav_list}>
                     <div className={styles.nav_list_comme}>
                      <span style={{ fontSize: '18px', color: '#09A2E3', marginBottom: '10px' }}>{item.totalnum}</span>
                      <span style={{ fontSize: '14px' }}>{item.totaltitle}</span>
                     </div>
                     <div className={styles.nav_list_comme}>
                     <span style={{ fontSize: '18px', color: '#09A2E3', marginBottom: '10px' }}>{item.ytotalnum}</span>
                      <span style={{ fontSize: '14px' }}>{item.ytotaltitle}</span>
                     </div>
                     <div className={styles.nav_list_comme}>
                     <span style={{ fontSize: '18px', color: '#09A2E3', marginBottom: '10px' }}>{item.wtotalnum}</span>
                      <span style={{ fontSize: '14px' }}>{item.wtotaltitle}</span>
                     </div>
                </div>
                <div className={styles.progress}>
                    <div className={`${styles.progress_bar}`} style={{ width: item.progresswidth1 }}><Decoration10 style={{ width: item.progresswidth, height: '5px' }} /></div>
                </div>

                     </Card>
               ))
             }

            </div>

            {/* 第三部分 */}
            <Card style={{ marginTop: '10px' }}>
              <div className={styles.div_three}>网卡统计</div>
              <div className={styles.div_three_foot}>
                {
                  kashu.map((item, i) => (
                    <div className={styles.div_three_foot_chireid} key={i}>
                    <span style={{ fontSize: '18px', color: '#09A2E3', marginBottom: '10px' }}>{item.num}</span>
                    <span sty={{ fontSize: '16px' }}>{item.title}</span>
                  </div>
                  ))
                }

               </div>

            </Card>

              {/* 第四部分 */}
              <div className={styles.four_div}>
                    <Card className={`${styles.four_div_card} ${styles.four_div_card_one}`}>
                      <div className={styles.four_div1}><span className={styles.four_span1}>近七日销售情况</span></div>
                      <Table rowKey='id'
                       columns={columns}
                         dataSource={data.list}

                          ></Table>
                    </Card>

                    <Card className={`${styles.four_div_card} ${styles.four_div_card_one}`}>
                      <div className={styles.four_div1}><span className={styles.four_span1}>客户销售TOP10</span></div>
                      <Table rowKey='id'
                       columns={columns}
                        dataSource={data.list}
                      ></Table>
                    </Card>
              </div>
              {/* 第五部分 */}

              <Card style={{ marginTop: '10px' }}>
              <div className={styles.four_div1}><span className={styles.four_span1}>客户激活网卡统计</span></div>
                      <Table rowKey='id'
                       columns={columns}
                         dataSource={data.list}
                      ></Table>
              </Card>
    </>
  )
}

export default Books
