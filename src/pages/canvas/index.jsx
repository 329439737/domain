import React, { Component } from 'react'

class index extends Component {
  //
  componentDidMount () {
  //  this.getcanvas()
  }

  componentDidUpdate () {
  //  this.getcanvas()
  }

  getcanvas = () => {
    let ctx = this.refs.canva.getContext
    console.log(ctx)
    ctx.fillStyle = '#f00'
    ctx.fillRect(0, 0, 10, 10)
  }

  render () {
    return (
      <div>
         canvs<canvas ref='canva' style={{ width: '100px', height: '100px' }}></canvas>
      </div>
    )
  }
}

export default index
