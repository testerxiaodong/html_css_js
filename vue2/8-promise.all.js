import thenFS from 'then-fs'

const promiseArr = [
    thenFS.readFile('./files/01.txt', 'utf8'),
    thenFS.readFile('./files/02.txt', 'utf8'),
    thenFS.readFile('./files/03.txt', 'utf8')
]

// Promise.all(promiseArr)
//     .then(([r1, r2, r3]) => {
//         console.log(r1, r2, r3)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })

Promise.race(promiseArr)
    .then(result => {
        console.log(result)
    })