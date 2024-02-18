export const getData = () => {
    // fetch('https://raw.githubusercontent.com/kjhardcore76/json/main/db.json').then((result) => {
    //     return result.json()
    // }).then((result) => {
    //     console.log(result)
    // })
    return new Promise (async resolve =>{
        let result = await fetch('https://raw.githubusercontent.com/kjhardcore76/json/main/db.json')
        result = await result.json()
        resolve(result) 
    })
   
}