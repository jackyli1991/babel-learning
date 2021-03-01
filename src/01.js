// import '@babel/polyfill'
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'


// let const
let age = 30
const con = 'con not change'

let arr = [1, 2, 3, 4]

// array.map方法
arr = arr.map(item => {
  item += 1
  return item
})

// 解构
let newArr = [ ...arr ]
let obj = { ...{ name: 'jackyli', age } }

// 模版字符串
let str = `I'm ${age} years old.`

// map
let m = new Map([
  ['name', 'tom'],
  ['age', 18 ]
])

// promise
let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('success print')
    }, 1000)
  })
}

p()

// class
class Test {
  constructor() {
    
  }
  say(){
    
  }
}