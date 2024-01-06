export const qs = (query) => {
    return document.querySelector(query)
}
//리턴이 들어가면 저 위에걸 쓰겠다는 거고 없으면 의미가 없음. 그냥 함수를 실행하겠다는것.


export const n = 1
//애당초 값이 바뀌지가 않음. 그래서 const를 사용함.
//그런데 변수를 꼭 바꾸고 싶다면 아래와 같이 사용

export const obj = { n: 1 }
//이런 이유때문에 리액트에서는 객체나 배열로 모든걸 만듦. 그래서 객체가 더욱 중요함.

//alert('ddd')
//이런식으로 alert를 호출하면 안됨. 일단 여기서 임폴트를 하는 순간 자스는 모두 읽고 실행을 해버림. 그래서 실행하는 함수는 금지
//그래서 같은 이유로 무거운 경우에는 모듈 파일을 따로따로 만듦.

export const log = (output) => {
 console.log(output)
}