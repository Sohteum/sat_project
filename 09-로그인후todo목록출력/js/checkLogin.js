export const checkIndexLogin = ()=>{
    let userInfo = JSON.parse(sessionStorage.getItem('sessionUserInfo'))
    if(!userInfo){
        alert('login후 사이트를 이용하세요')
        location.href= './login.html'
    }

    
    //로그인이 된경우
    document.querySelector('.login-after b').innerHTML = userInfo.name
    document.querySelector('.login-after').style.display= 'block'

}

export const checkLogin = ()=>{
    let userInfo = JSON.parse(sessionStorage.getItem('sessionUserInfo'))
    if(userInfo){
        alert('이미 로그인중입니다')
        location.href= './index.html'
    }

    
    //로그인 전 경우

    document.querySelector('.login-before').style.display= 'block'

}