import { getData } from "./getData.js"
import { loginHandler } from "./loginHandler.js"


document.querySelector('.login-form').addEventListener('submit', async e => {
  e.preventDefault()
  let data = await getData() //fetch data. 회원정보를 서버로부터 받아오기

  loginHandler(data.users)//로그인 결과를 처리하기


})