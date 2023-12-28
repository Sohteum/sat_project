{
  //ex1
  document.querySelector('.print').addEventListener('submit', (e) => {
    e.preventDefault()
    let num1 = parseInt(document.querySelector('.ex1 .num1').value)
    let num2 = parseInt(document.querySelector('.ex1 .num2').value)
    let sum = num1 + num2
    document.querySelector('.ex1 .print').innerText = sum

    // document.querySelector('.ex1 .print').innerHTML = `<b>${sum}</b>`

    //let b = document.createElement('b')
    //b.innerText = sum
    //document.querySelector('.ex1 .print').append('b')



  })
}



{
  document.addEventListener('.ex2 button').addEventListener('click', (e) => {
    // let ul = document.createElement('ul')
    // document.querySelector('.ex2 .print').append(ul)
    // for (let i = 1; i <= 10; i++) {
    //   let li = document.createElement("li")
    //   let p = document.createElement("p")
    //   p.innerText = i
    //   li.append(p)
    //   ul.append(li)
    // }
    // document.querySelector('.ex2 .print').append(ul)



    // document.querySelector('.ex2 .print').insertAdjacentElement('beforeend',
    //   '<ul></ul>')

    //     let ul = document.createElement('ul')
    //     document.querySelector('.ex2 .print').append(ul)
    //     for (let i = 1; i <= 10; i++) {
    //       ul.insertAdjacentElement('beforeend', `
    // <li><p>${i}, <button>버튼</button></p></li>`)
    //       document.querySelector('.print:li:lastchild button').addEventListener('click', (e) =>} {
    //       alert(i)
    //     })


    let li = document.createElement('li')
    li.style.borderBottom = '1px dotted #000'
    li.classList.add('active')//add, toggle, remove
    ul.append(li)
    li.setAttribute("data-n", i)
    let p = document.createElement('p')
    p.innerText = li.getAttribute('date-n')
    li.append(p)
    let button = document.createElement('button')
    li.append(button)
    button.addEventListener('click', e => {
      alert(i)
    })

  })

}

