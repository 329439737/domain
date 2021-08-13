import React, { Component } from 'react'
import Api from './../../assets/api/online'
import { message, Card } from 'antd'
import Jsonn from '../../assets/json/a'
import * as echarts from 'echarts/core'
import {
  BarChart, // 柱状图
  LineChart // 折现图
} from 'echarts/charts'

// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
  CanvasRenderer
} from 'echarts/renderers'
const { Json } = Jsonn

// 注册必须的组件
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, BarChart, LineChart, CanvasRenderer, LegendComponent]
)

class index extends Component {
  state={
    datalist: []

  }

  componentDidMount () {
    this.geteachars()
  }

  // 获取图表信息
  geteachars =() => {
    Api.geteachars({ }).then((res) => {
      const { meta } = res
      if (meta.status === 200) {
        this.setState({
          datalist: res.data
        }, () => {
          this.myChartinit()
        })
      } else {
        message.error(meta.msg)
      }
    })
  }

  // 获取图表信息
  myChartinit =() => {
    const { datalist } = this.state

    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main', 'light'))

    // 指定图表的配置项和数据
    let option = {
      color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6699FF', '#ff6666', '#3cb371', '#b8860b', '#30e0e0'],
      title: {
        text: '数据一览'
      },
      tooltip: {
        trigger: 'item',
        borderColor: 'red',
        borderRadius: 4
      },
      legend: {
        data: datalist.legend.data,
        textStyle: {
          color: 'red'
        }
      },
      xAxis: {
        data: datalist.xAxis[0].data
      },
      yAxis: {},
      series: datalist.series
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  }

  render () {
    return (
      <>
          <div id="main" style={{ width: '800px', height: '400px' }}></div>
      </>
    )
  }
}

export default index
