export const loginHandler = (userDatas) => {
    let userId = document.querySelector('.user-id').value
    let userPw = document.querySelector('.user-pw').value
    let userData = userDatas.find(v => v.id === userId && userPw === v.pw)
    if (!userData) {
        alert('잘못된 회원정보입니다')
        return
    }
    let {id, name} = userData //꺼내서 변수로 만들겠다는 구조분해
    let userInfo = {id, name} //새로운 객체 만드는거에서 축약한거
    // sessionStorage.setItem('sessionUserInfo', JSON.stringify(userInfo))
    // document.querySelector('.login-before').style.display = 'none'
    // document.querySelector('.login-after').style.display = 'block'
    document.querySelector('.login-after b').innerHTML = userData.name
    alert(`${userData.name}님으로 로그인성공\n 일정목록으로 이동합니다`)
    location.href = 'index.html'
}