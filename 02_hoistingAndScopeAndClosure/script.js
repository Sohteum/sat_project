document.querySelector('.ex1 button').addEventListener('click', function () {
  // console.log(a)
  // a=1

  // console.log(a)
  // var a=1
  // //undefined

  var a
  console.log(a)
  a = 1
  //위와 동일한것임
})


document.querySelector('.ex2 button').addEventListener('click', function () {
  fn()
  function fn() {
    console.log('fn실행')
  }

  function fn() {
    console.log('fn실행')
  }
  fn()

  //둘이 같음

})

//호이스팅이 나는 친구들




document.querySelector('.ex3 button').addEventListener('click', function () {
  console.log(a)
  let a = 1
  //에러
})

document.querySelector('.ex3 button').addEventListener('click', function () {
  console.log(a)
  const a = 1 //immutable 글자나 숫자, 배열 객체, 함수는 바꾸지 못함
  //에러
})


//메모리확보. 성능좋아짐...



//scope(범위:함수를 찾음), closure(가까운곳을 찾는것)

document.querySelector('.ex4 button').addEventListener('click', function () {
  var a = 1
  function fn() {
    var a = 2
    
    console.log(a)
  }
  fn()
  console.log(a)
})

document.querySelector('.ex5 button').addEventListener('click', function () {

  var a = 2
  if(a=2) {
    var a = 3
    console.log(a)
  }
  console.log(a)
//var는 함수레벨 스코프
})

document.querySelector('.ex6 button').addEventListener('click', function () {

  let a = 2
  if(a=2) {
    let a = 3
    console.log(a)
  }
  console.log(a)

  //let은 중괄호레벨 스코프.블록레벨스코프
})

// var는 호이스팅일어남, 함수레벨스코프
//const, let: 호이스팅 안일어남, 블록레벨스코프
//const는 이뮤터블

for(var i =1; i<=3; i++) {
  document.querySelector(`.ex7 .btn${i}`).addEventListener('click', function(){
    alert(i)
  })
}

//같은 스코프에 있기 때문에 모두 동일하게 4가 나옴.

for(let i =1; i<=3; i++) {
  document.querySelector(`.ex8 .btn${i}`).addEventListener('click', function(){
    alert(i)
  })
}