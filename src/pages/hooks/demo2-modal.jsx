import React, { useContext, useEffect } from 'react'
import { Modal, Card } from 'antd'
import myContextContext from './../../assets/hooks/index'
export default function demo2modal (props) {
  const { onCancel } = props
  const info = useContext(myContextContext)

  useEffect(() => {
    // console.log(info)
  }, [])
  return (
      <div>
        <Modal bodyStyle={{ maxHeight: '400px', overflowY: 'auto' }}
          title="详情"
          visible
           onOk={onCancel}
          onCancel={onCancel}
        >
          <div>
               <Card title={info.title} style={{ width: 400 }}>
                 <p>点击量：{info.click}</p>
                 <p style={{ fontWeight: 'bold', color: 'red' }}>内容：</p>
                 <p dangerouslySetInnerHTML={{ __html: info.content }}></p>

               </Card>
          </div>
        </Modal>
      </div>
  )
}
