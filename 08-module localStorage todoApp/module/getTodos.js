import sampleData from "./sampleData"
import { qs, qsa } from "./utility"



export const getTodos = () => {
    let todos = JSON.parse(localStorage.getItem('localTodos'))
    if(!todos){
        todos = sampleData
        localStorage.setItem('localTodos', JSON.stringify(todos))
    }
    return todos
}

export const printTodos = (todos) => {
    if (todos.length === 0) {
        qs('.print').innerHTML = '등록된 일정이 없습니다.'
        return
    }
    todos.forEach(v => {
        qs('.print').insertAdjacentHTML('beforeend', `
        <p>
        <b>${v.title}</b>
        <small>${v.date}</small>
        <button value='${v.id}'>삭제</button>
        </p>
        `)
    });

    qsa('.print button').forEach(btn => {
        btn.addEventListner("click", e => {
            let id = parseInt(e.target.value)
            todos = todos.filter(v => btnId !== v.id)
            e.target.closest('p').remove //가장 가까운 부모 p를 찾음
            localStorage.setItem('localTodos',JSON.stringify(todos))
        })
    })
}