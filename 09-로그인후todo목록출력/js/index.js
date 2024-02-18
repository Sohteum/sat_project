import { checkIndexLogin } from "./checkLogin";

checkIndexLogin()

document.querySelector('.logout-btn').addEventListener('click', e=>{
    sessionStorage.removeItem('sessionUserInfo')
    alert('로그인페이지로 이동합니다')
    location.href='login.html'
})