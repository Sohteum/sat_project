import sum from "./sum.js" //중괄호가 붙지않음.
import { qs, n, obj, log } from "./utility.js"




qs('.ex1').addEventListener('submit', e => {
    e.preventDefault()
    obj.n = 2
    alert(obj.n)
    log('ddd');
    sum('.ex1 .num1', '.ex1 .num2')
})

qs('.ex2').addEventListener('submit', e => {
    e.preventDefault()
    obj.n = 2
    alert(obj.n)
    log('ddd');
    sum('.ex2 .num1', '.ex2 .num2')


})