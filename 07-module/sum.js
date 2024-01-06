// export default (param1, param2) => {
//    alert('sum')
// }
//default 를 붙이면 이거 하나만 만들어서 보내겠다는의미. 근데 const는 사용할수가없음


//이거랑 동일함
// export default function() {

// }


const sum =(input1, input2)=>{
    let num1 = parseInt(qs(input1).value)
    let num2 = parseInt(qs(input2).value)

alert(input1+input2)
}
export default sum
//이렇게 내보내는 방법도 있음