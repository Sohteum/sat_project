import sampleData from "./sampleData.js"
import { qs, qsa } from "./utility.js"

export const getTodos = () => {
  let todos = JSON.parse(localStorage.getItem('localTodos'))
  if(!todos){
    todos = sampleData
    localStorage.setItem('localTodos', JSON.stringify(todos))
  }
  return todos
}

export const printTodos = (todos) => {
  if(todos.length === 0) {
    qs('.print').innerHTML = '등록된일정이 없습니다'
    return 
  }

  todos.forEach(v=>{
    qs('.print').insertAdjacentHTML('beforeend',`
      <p>
        <b>${v.title}</b>
        <small>${v.date}</small>
        <button value='${v.id}'>삭제</button>
      </p>
    `)
  })

  qsa('.print button').forEach( btn => {
    btn.addEventListener('click', e =>{
      let btnId = parseInt(e.target.value)
      todos = todos.filter(v=>btnId !== v.id)
      e.target.closest('p').remove()
      localStorage.setItem('localTodos',JSON.stringify(todos))
    })
  })
}














