import React, { useState } from 'react'
import { Card, Button, Input } from 'antd'
import Ccard from './../../components/card/context' // '子组件'
import Mycontext from './../../assets/hooks/index' // 公共组件
import { Map } from 'core-js'
import { concat } from 'lodash'

export const demo2 = () => {
  const [title] =
  useState({ title: 'call、apply、bind的区别。都是可以改变this的指向' })
  const [info] = useState({
    call: 'call的用法,传参的形式可以是多个参数,例如b.call(a,2,3)',
    apply: 'apply的用法，第二个参数必须是数组,例如b.apply(a,[1,23,3])',
    bind: 'bind的用法,不用的是他返回的是一个修改后的函数,参数可以是数组也可以不是'
  })
  // call的例子
  const call = () => {
    let a = {
      user: '快乐小神仙',
      fn (e, ee) {
        console.log(this.user)
        console.log(e, ee)
      }
    }
    let b = a.fn
    b.call(a, 1, 2)
    console.log(a)
  }

  // apply的例子
  const apply = () => {
    let a = {
      user: '快乐小神仙',
      fn (e, ee) {
        console.log(this.user)
        console.log(e, ee)
      }
    }
    let b = a.fn
    b.apply(a, [1, 2])
    console.log(b)
  }
  // bind的例子
  const bind = () => {
    let a = {
      user: '快乐小神仙',
      fn (q, w, e) {
        console.log(this.user)
        console.log(q, w, e)
      }
    }
    let b = a.fn
    let c = b.bind(a, [1])
    c(2, 3)
    console.log(a)
  }
  // 去重
  let shuzi1 = [1, 2, 4, 5, 5]
  let shuzi2 = [4, 5]

  const qc = () => {
    console.log(Array.from(new Set(shuzi2)).join(''))
  }

  // 验证去重
  const [str] = useState({ name: 12 })
  const proto = (str) => {
    if (typeof str === 'object') {
      let o = Object.prototype.toString.call(str).slice(8, -1) === 'Array' ? [] : {}
      console.log(o)
    } else {
      console.log(str)
    }
  }

  // 求两数之和
  const nums = [2, 7, 11, 15, 1]
  const totle = 9
  const newbun = []
  const Nfun = (nums, totle) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
      const num1 = nums[i]
      const num2 = totle - nums[i]
      if (map.has(num2)) {
        return [map.get(num2), i]
      } else {
        map.set(num1, i)
      }
      console.log(map)
    }
  }
  /// 罗马数字转整数
  const [luoma, SetLma] = useState('')
  const [result, SetResult] = useState('')
  const Funs = (s) => {
    const obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    let sum = 0
    for (let i = 0; i < s.length; i++) {
      let val = s[i]
      sum += obj[val]
      if (s[i - 1]) {
        if ((val === 'V' || val === 'X') && s[i - 1] === 'I') {
          sum -= 2
        } else if ((val === 'L' || val === 'C') && s[i - 1] === 'X') {
          sum -= 20
        } else if ((val === 'D' || val === 'M') && s[i - 1] === 'C') {
          sum -= 200
        }
      }
    }
    return SetResult(sum)
  }

  const SelYm = () => {
    console.log(Funs)
  }

  // 链表升序

  const FunLb = () => {
    let l1 = [1, 2, 3, 4, 5]
    let l2 = [5, 1, 2, 5]
    if (l1 === null && l2 === null) return l1 || l2
    if (l1 === null) return l2
    if (l2 === null) return l1
  }

  console.log(FunLb())
  // 冒泡排序
  const arr = [2, 1, 3, 4]

  const btn = () => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    console.log(arr)
  }

  return (
      <>
        <Mycontext.Provider value={title}>
          <Ccard></Ccard>
        </Mycontext.Provider>
           <>

             <Card>
               {info.call}
                 <div>
                      <Button type='primary' onClick={call}>点击</Button>

                 </div>

             </Card>
           </>

           <>
             <Card style={{ marginTop: '15px' }}>
               {info.apply}
                 <div>
                      <Button type='primary' onClick={apply}>点击</Button>
                 </div>

             </Card>

             <Card style={{ marginTop: '15px' }}>
               {info.bind}
                 <div>
                      <Button type='primary' onClick={bind}>点击</Button>
                 </div>

             </Card>

             <Card style={{ marginTop: '15px' }}>
               {'其他关于Set的用法'}
                 <div>
                      <Button type='primary' onClick={qc}>去重</Button>
                 </div>

             </Card>

             <Card style={{ marginTop: '15px' }}>
               {'实现一个函数 clone()，可以对 JavaScript 中的5种主要的数据类型（包括 Number、String、Object、Array、Boolean）进行值复制。'}
                 <div>
                      <Button type='primary' onClick={() => { proto(str) }}>点击</Button>
                 </div>

             </Card>

             <Card style={{ marginTop: '15px' }}>
               {'求两数之和'}
                 <div>
                      <Button type='primary' onClick={() => { Nfun(nums, totle) }}>点击</Button>
                 </div>

             </Card>

             <Card style={{ marginTop: '15px' }}>
               {'LeetCode:罗马数字转整数.例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。'}
                 <div style={{ display: 'flex' }}>
                   <Input placeholder='请输入罗马数字' onChange={(e) => { SetLma(e.target.value) }} style={{ width: '200px' }}></Input>
                      <Button type='primary' style={{ marginLeft: '10px' }} onClick={() => { Funs(luoma) }}>点击查看</Button>
                      <label>Result:{result}</label>
                      <Button type='primary' style={{ marginLeft: '10px' }} onClick={() => { SelYm() }}>源码查看</Button>
                 </div>
              </Card>

              <Card style={{ marginTop: '15px' }}>
               {'冒泡排序'}
                 <div>
                      <Button type='primary' onClick={() => { btn() }}>冒泡排序</Button>
                 </div>

             </Card>
           </>

      </>
  )
}

export default demo2
