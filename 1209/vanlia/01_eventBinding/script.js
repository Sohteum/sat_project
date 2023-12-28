

//html이랑 스크립트랑 같이 읽는게 defer. 병렬처리
//씨피유가 여러개니까 가능한 것...



document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.ex1').addEventListener('click', e => {
    alert('DOMContentLoaded')
  })
})
// 렌더링이 시작하는 시점
//주로 엘리먼트를 사용하려고 씀


document.addEventListener('laod', function () {
  document.querySelector('.ex2').addEventListener('click', e => {
    alert('laod')
  })
})
//원시소스가 모두 다운로드 되었을때 
//스피너.,그런거 사용할때 쓴다

document.querySelector('.ex3').addEventListener('click', function (e) {
  let value = document.querySelector('.ex3').value
  //  = e.target.value
  alert(value)
})
//가장 먼저 실행됨.

function fnEx4(e) {
  
  alert('ex4실행')
}

//value값을 찾아서 출력하기


