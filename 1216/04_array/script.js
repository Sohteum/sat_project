{
    //arr.fill('a') 배열을 채우는 기능
    //arr.push()//뒤에추가
    //arr.unshift()//앞에추가
    //arr.pop //뒤쪽부터 지우기
    //arr.shift//앞쪽부터 지우기
    //arr.splice(몇번째부터 몇개)
    //arr.slice() str.slice
    //str.split()
    //arr.indexOf(value)
    //arr.length //배열의 길이. 글자의 길이. 중복된 값을 찾을 수 없다 그러려면 맵이나 필터
    //
}
//찾아야 되리 일이 있으면 크리에잇 하고 어펜드 하는게 낫고
//그게 아니면 

{
    let arr = new Array(0)


    document.querySelector('.ex2 .print').innerHTML = ''

    for (let i = 0; i < arr.length; i++) {
        document.querySelector('.ex2 .print').insertAdjacentHTML('beforeend', `
        ${arr[i]}<br>
        `)
    }
    console.log(arr);
    document.querySelector('.ex1').addEventListener('submit', e => {
        e.preventDefault()
        let name = document.querySelector('.ex1 input').value
        arr.unshift(name)
        fnPrint()



    })

    document.querySelector('.ex1 button').addEventListener('click', e => {
        arr.shift()
        fnPrint()
    })
}

{
    let arr = ['홍길동', '아무개', '무명씨']
    // let arr2 = [//indexOf는 다차원배열에서는 사용못함
    //     [name:'홍길동', age:12],
    //     [a, b]
    // ]
    const fnPrint = () => {
        document.querySelector('.ex2 .print').innerHTML = ''
        for (let i = 0; i < arr.length; i++) {
            document.querySelector('.ex2 .print').insertAdjacentHTML('beforeend', `
            ${arr[i]}<br>
            `)
        }
    }
    fnPrint()
    document.querySelector('.ex2').addEventListener('submit', e => {
        e.preventDefault()
        let name = document.querySelector('.ex2 input').value
        let idx = arr.indexOf(name)
        if (idx < 0) {
            alert('해당 이름이 존재하지 않습니다')
            return
        }
        arr.splice(idx, 1)
        fnPrint()
    })

}

{
    let korArr = '월화수목금토일'.split('') //글자를 스플릿하면 배열이 나온다
    console.log(korArr);
    let engArr = 'mon,tue,wed,thu,fri,sat,sun'.split(',')
    console.log(engArr);
    // 2 = 몇번째 ? 그럼 engArr[2] 를 찍어서 표시해주면 됨

    document.querySelector('.ex3').addEventListener('submit', e => {
        e.preventDefault()
        let day = document.querySelector('.ex3 input').value
        let idx = korArr.indexOf(day)
        document.querySelector('.ex3 .print').innerHTML = engArr[idx]
    })


}

{
    let arr = ['홍길동', '아무개', '무명씨']
    const fnPrint = () => {
        document.querySelector('.ex4 .print').innerHTML = ''
        for (let i = 0; i < targetArr.length; i++) {
            document.querySelector('.ex4 .print').insertAdjacentHTML('beforeend', `
            ${targetArr[i]}<br>
            `)
        }
    }
    fnPrint(arr)

    const fnSort = (targetArr, num1, num2) => {
        targetArr.sort((a, b) => {
            if (a > b) return 1
            if (a < b) return -1
            return 0
        })

    }
    document.querySelector('.ex4 .asc').addEventListener('click', e => {
        let copyArr = [...arr]
        fnSort(copyArr, 1, -1)
        fnPrint(copyArr)

    })
    document.querySelector('.ex4 .dsc').addEventListener('click', e => {
        fnSort(arr, -1, 1)
        fnPrint(arr)

    })
}

{//배열의 참조관계
    const arr1 = [1]
    const arr2=arr1  //arr1:[1], arr2: arr1
    let arr3 = arr2
    arr1.push(1)
    arr3.unshift()
    // arr1 = [2] 이건 안됨
    console.log(`arr1 = ${arr1}`);
    console.log(`arr2 = ${arr2}`);
    console.log(`arr3 = ${arr3}`);
    //  배열의 참조관계 한번 찾아보기

}

{//배열 복제
    //전개연산자, spread operator
    //arr= [1,2,3]
    //[...arr] //[1,2,3]
}

{//ex5

    let arr = ['홍길동', '아무개', '무명씨', '홍길동']
    const fnPrint = () => {
        document.querySelector('.ex5 .print').innerHTML = ''
        for (let i = 0; i < targetArr.length; i++) {
            document.querySelector('.ex5 .print').insertAdjacentHTML('beforeend', `
            ${targetArr[i]}<br>
            `)
        }
    }
    document.querySelector('.ex5 .print').addEventListener('submit', e=>{
        e.preventDefault()
        if(arr.length=0){
            document.querySelector('.ex5 button').disabled = true
        }
       let idx = Math.floor(Math.random() * arr.length)
       let name = arr[idx]
       arr.splice(idx,1)
       document.querySelector('.ex5 .print').insertAdjacentHTML('beforeend', `
       ${name}<br>
       `)
    })

}
//포구문 이용하기

{//ex6

    let arr = ['홍길동', '아무개', '무명씨', '홍길동']
    let num = 0
    const fnPrint = () => {
        document.querySelector('.ex5 .print').innerHTML = ''
        for (let i = 0; i < targetArr.length; i++) {
            document.querySelector('.ex5 .print').insertAdjacentHTML('beforeend', `
            ${targetArr[i]}<br>
            `)
        }
    }
    document.querySelector('.ex5 .print').addEventListener('submit', e=>{
        e.preventDefault()
        if(arr.length=0){
            document.querySelector('.ex5 button').disabled = true
        }
        num++
       let idx = Math.floor(Math.random() * arr.length)
       let name = arr[idx]
       arr.splice(idx,1)
       document.querySelector('.ex5 .print').insertAdjacentHTML('beforeend', `
       ${num}등:${name}<br>
       `)
    })

}



{//배열 순환

    
}