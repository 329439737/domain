import { useContext } from 'react'
import { Card, Input } from 'antd'
import myContextContext from './../../assets/hooks/index'

const Child = (props) => {
  const { setshowshuo } = props
  let title = useContext(myContextContext)
  return (
    <Card style={{ marginBottom: '15px' }}>
    <span>标题：</span> <span style={{ color: 'red' }}>{title.title}</span>
    {
      title.type === 1 ? <Input placeholder='请输入子组件的值' onChange={e => setshowshuo(e.target.value)}></Input> : null
    }

  </Card>
  )
}
export default Child
