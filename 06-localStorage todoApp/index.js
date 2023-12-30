const todosArray = JSON.parse(localStorage.getItem('todosArrayLocal'))
if (!todosArray) {
    document.querySelector('.list').innerHTML = "등록된 일정이 없어요"
    //함수 안에서만 return 사용가능하니까 여기는 없음
} else {
    document.querySelector('.list').innerHTML = '<ul></ul>'
    todosArray.forEach(v => {
        let { title, date, id } = v //구조분해, 비구조할당 받아오는거니까 구조분해, 반대로 집어넣으면 축약
        document.querySelector('.list').insertAdjacentHTML('beforeend', `
    <li>
    <a href="/detail.html?id=${id}"> 
    <b>${title}</b>
    <small>${date}</small>
    </a>
    </li>
    `)
    });

//물음표가 들어가면 쿼리스트링이라혹 함
}