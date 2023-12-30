// // 객체
// const tel = '010-000-0000'
// const person ={
//     name : '홍길동',
// age: 14,
// tel: tel, //tel:tel축약
// }
// //앞은 프로퍼티 혹은 키, 뒤는 프로퍼티 벨류 혹은 키밸류
// person.gender = 'mail' //프로퍼티 추가, 변경
// delete person.gender // 프로퍼티 제거

// document.body.innerHTML = person.name

// console.log(person);

// console.log(person.tel);  
// console.log(person['tel']); //computed property 계산된 속성값. 
// console.log(person[tel]);  



{
    document.querySelector('.ex1 form').addEventListener('submit', e => {
        e.preventDefault()
        const name = document.querySelector('.ex1 .name').value
        const age = document.querySelector('.ex1 .age').value
        const gender = document.querySelector('.ex1 .gender:checked').value
        const person = { name, age, gender }

        for (key in person) {//key는 키값의미, 객체에서만 사용가능한 반복문
            document.querySelector('.ex1 .print').insertAdjacentHTML('beforeend', `
<p>${key} : ${person[key]}</p>
`)
        }

    })
}

{
    document.querySelector('.ex2 form').addEventListener('submit', e => {
        e.preventDefault()
        const name = document.querySelector('.ex2 .name').value
        const age = document.querySelector('.ex2 .age').value
        const gender = document.querySelector('.ex2 .gender:checked').value
        const person = { name, age, gender }
        const keyArray = Object.keys(person)//['','','']
        for (key of keyArray) {//
            document.querySelector('.ex2 .print').insertAdjacentHTML('beforeend', `
<p>${key} : ${person[key]}</p>
`)
        }

    })
}

{
    document.querySelector('.ex3 form').addEventListener('submit', e => {
        e.preventDefault()
        const name = document.querySelector('.ex3 .name').value
        const age = document.querySelector('.ex3 .age').value
        const gender = document.querySelector('.ex3 .gender:checked').value
        const person = { name, age, gender }
        const keyArray = Object.keys(person)//['','','']
        const personArr = Object.entries(person)
        console.log(personArr)
        personArr.forEach(v => {
            document.querySelector('.ex3 .print').insertAdjacentHTML('beforeend', `
        <p>${v[0]}: ${v[1]}</p>
        `)
        })
    })
}