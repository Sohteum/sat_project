getTodos
qs


export const addTodos = () => { 
  //id 만들기
let id = Date.now()
  //일정명 가져오기
  let title = qs('.title').value
  //일자 가져오기
  let date = qs('date').value
  //로컬스토리지에서 배열 가져오기
  let todo ={id, title, date}
  let todos = getTodos()
  todos.unshift(todo)
  localStorage.setItem('localTodos', JSON.stringify(todos))
  location.href="./index.html" //인덱스로 돌아가기
  //배열에 일정 객체로 추가하기
  //로컬스토리지에서 배열 저장하기

}