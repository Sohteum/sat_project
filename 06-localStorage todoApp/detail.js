let url = new URL(location.href)
let params = new URLSearchParams(url.search)
let id = parseInt(params.get('id'))
console.log(id);

let todosArray = JSON.parse(localStorage.getItem('todosArrayLocal'))

let todosData = todosArray.find(v => v.id === id)

//객체나배열은 = 이면 같은거., 숫자는 같지않음.

let { title, date, desc } = todosData

document.querySelector('.title').value = title
document.querySelector('.date').value = date
document.querySelector('.desc').value = desc

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    todosData.title = document.querySelector('.title').value
    todosData.date = document.querySelector('.date').value
    todosData.desc = document.querySelector('.desc').value

    localStorage.setItem('todosArrayLocal', JSON.stringify(todosArray))
    alert('수정되었습니다. 목록으로 이동합니다')
    location.href = '/index.html'

})

document.querySelector('.delete').addEventListener('click', e => {
    //1. 3번(배열)을 지우기 = 배열의 특정 값을 지우기
    // let idx = todosArray.findIndex(v=>v.id===id)
    // todosArray.splice(idx, 1)

    //2. 배열의 특정 번째를 제외한 새로운 배열 만들기 ->화면을 갱신하기 위해 이방법을 많이 사용함
    todosArray.filter(v => v.id !== id)


    localStorage.setItem('todosArrayLocal', JSON.stringify(todosArray))
    alert('삭제되었습니다. 목록으로 이동합니다')
    location.href = '/index.html'


})