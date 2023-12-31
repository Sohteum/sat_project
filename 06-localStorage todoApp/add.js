document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const id = Date.now()
    const title = document.querySelector('.title').value
    const date = document.querySelector('.date').value
    const desc = document.querySelector('.desc').value
    let todoData = { title, date, desc, id }
    let todosArray = JSON.parse(localStorage.getItem('todosArrayLocal'))
    todosArray = todosArray ? todosArray : [] //있으면 쓰고 없으면 빈배열로 시작하겠다
    todosArray.unshift(todoData) 
    localStorage.setItem('todosArrayLocal', JSON.stringify(todosArray))
    alert('등록되었습니다. 목록으로 이동합니다.')
    location.href='/index.html'//루트 도메인으로 이동시킴

})