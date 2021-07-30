import React, { Component } from 'react'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

export default class tabs extends Component {
  state={
    panes: [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' }
    ]
  }

  render () {
    const { panes } = this.state
    return (
      <div>
        <Tabs
         hideAdd
         // onChange={this.onChange}
         // activeKey={this.state.activeKey}
         // type="editable-card"
          // onEdit={this.onEdit}
        >
          {panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    )
  }
}
