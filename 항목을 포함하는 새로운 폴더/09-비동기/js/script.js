
//비동기

// window.addEventListener


//보통은 프로미스 문법을 비동기라고 함

// ex1
// {
//     //밀농사(씨앗)->밀가루 만들기(밀)->빵만들기
//     //무조건 함수를 만들어야 함
//     const 밀농사 = (재료) => {
//         return new Promise((resolve) => { //다음걸 실행하게 허락해주는게 resolve
//             console.log(`${재료}를 받아서 밀농사 시작`);
//             let time = Math.ceil(Math.random() * 3) * 1000 //밀리세컨드라서 천을 곱해줘야함
//             setTimeout(() => {
//                 console.log(`${time}초후 밀생산 완료`);
//                 resolve('밀') //값이 있으면 이거 받아서 실행해 라는 뜻
//             }, time * 1000)
//         })


//     }
//     const 밀가루만들기 = (재료) => {
//         return new Promise((resolve) => {
//             console.log(`${재료}를 받아서 밀농사 시작`);
//             let time = Math.ceil(Math.random() * 3) * 1000 //밀리세컨드라서 천을 곱해줘야함
//             setTimeout(() => {
//                 console.log(`${time}초후 밀생산 완료`);
//                 resolve('밀가루')
//             }, time * 1000)
//         })

//     }


//     const 빵만들기 = (재료) => {

//         console.log(`${재료}를 받아서 밀농사 시작`);
//         let time = Math.ceil(Math.random() * 3) * 1000 //밀리세컨드라서 천을 곱해줘야함
//         setTimeout(() => {
//             console.log(`${time}초후 밀생산 완료`);

//         }, time * 1000)


//     }

//     document.querySelector('.ex1 button').addEventListener('click', (e) => {
//         밀농사('밀씨앗').then((result) => {
//             return 밀가루만들기(result)
//         }).then((result) => {
//             빵만들기(result)
//         }) //then앞쪽은 프로미스 함수라고 알면 됨 then 은 await으로 바꿔서 사용가능


//     })


// }

{

    //밀농사(씨앗)->밀가루 만들기(밀)->빵만들기
    //무조건 함수를 만들어야 함
    const 밀농사 = (재료) => {
        return new Promise((resolve) => { //다음걸 실행하게 허락해주는게 resolve
            console.log(`${재료}를 받아서 밀농사 시작`);
            let time = Math.ceil(Math.random() * 3) * 1000 //밀리세컨드라서 천을 곱해줘야함
            setTimeout(() => {
                console.log(`${time}초후 밀생산 완료`);
                resolve('밀') //값이 있으면 이거 받아서 실행해 라는 뜻
            }, time * 1000)
        })


    }
    const 밀가루만들기 = (재료) => {
        return new Promise((resolve) => {
            console.log(`${재료}를 받아서 밀농사 시작`);
            let time = Math.ceil(Math.random() * 3) * 1000 //밀리세컨드라서 천을 곱해줘야함
            setTimeout(() => {
                console.log(`${time}초후 밀생산 완료`);
                resolve('밀가루')
            }, time * 1000)
        })

    }


    const 빵만들기 = (재료) => {

        console.log(`${재료}를 받아서 밀농사 시작`);
        let time = Math.ceil(Math.random() * 3) * 1000 //밀리세컨드라서 천을 곱해줘야함
        setTimeout(() => {
            console.log(`${time}초후 밀생산 완료`);

        }, time * 1000)


    }

    documenÏÏt.querySelector('.ex2 button').addEventListener('click', async (e) => {
        let result = await 밀농사('밀씨앗')
        result = await 밀가루만들기(result)
        빵만들기(result)


    })
}