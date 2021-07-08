import React, { Component } from 'react'

import style from './index.module.scss'
import moment from 'moment'
import PropTypes from 'prop-types'
import { chatsone } from './../../assets/json/charts'
import { CapsuleChart, BorderBox11, FullScreenContainer, ActiveRingChart, WaterLevelPond, PercentPond, ConicalColumnChart, ScrollRankingBoard, Decoration7 } from '@jiaminghi/data-view-react'
export default class index extends Component {
  static propTypes={
    history: PropTypes.object
  }

  state={
    time: '',
    navlist: [
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' },
      { id: '1' }
    ],
    config: {
      data: chatsone,
      colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
      unit: '单位',
      showValue: true
    },
    config2: {
      data: [88],
      value: 66
    }
  }

  componentDidMount () {
    this.gettime(0)
  }

  // 时间刷新
  gettime = () => {
    let timeid = setInterval(() => {
      this.setState({
        time: moment(Date()).format('YYYY-MM-DD hh:mm:ss')
      })
    }, 1000)
  }

  // back
  back = () => {
    this.props.history.push('/admin/home')
  }

  render () {
    const { time, navlist, data, config = [], config2 } = this.state
    return (
      <FullScreenContainer className={style.main}>
        <BorderBox11 title={'大屏数据展示'}>
               <div className={style.top}>
                <div className={style.top_one}><span className={style.title}></span></div>
                <div className={style.top_two}><span className={style.time}>{time}</span>
                <Decoration7 className={style.back} style={{ width: '150px', height: '30px' }}><span style={{ color: '#fff' }} onClick={() => { this.back() }}>back</span></Decoration7></div>
              </div>

                    <div className={style.mainnav}>

              {
                   navlist.map((item, i) => (
                    <div key={i} style={{ float: 'left' }}>

                      <div className={style.nav} >
                        <span className={style.nav_h1}>在线客服数</span>
                        <span className={style.nav_h2}>0</span>
                       </div>

                    </div>
                   ))

               }
                     </div>

        <div className={style.concent}>
          <div style={{ marginRight: '20px' }}>
              <CapsuleChart config={config} style={{ width: '300px', height: '300px' }} />
          </div>
          <div style={{ marginRight: '20px' }}>
            <ActiveRingChart config={config} style={{ width: '300px', height: '300px' }} />
            </div>
            <div style={{ marginRight: '20px' }}>
            <WaterLevelPond config={config2} style={{ width: '150px', height: '200px' }} />
            </div>
            <div style={{ marginRight: '20px' }}>
            <PercentPond config={config2} style={{ width: '200px', height: '100px' }} />
            </div>
            <div style={{ marginRight: '20px' }}>
            <ConicalColumnChart config={config} style={{ width: '400px', height: '200px' }} />
            </div>
            <div style={{ marginRight: '20px' }}>
            <ScrollRankingBoard config={config} style={{ width: '500px', height: '300px' }} />
            </div>
            <div style={{ marginRight: '20px' }}>
            <ScrollRankingBoard config={config} style={{ width: '500px', height: '300px' }} />
            </div>
        </div>
        </BorderBox11>
      </FullScreenContainer>
    )
  }
}
