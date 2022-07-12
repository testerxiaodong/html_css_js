import thenFS from 'then-fs'


thenFS
    .readFile('./files/01.txt', 'utf8')
    .then((r1) => {
        console.log(r1)
        return thenFS.readFile('./files/02.txt', 'utf8')
    })
    .then((r2) => {
        console.log(r2)
        return thenFS.readFile('./files/03.txt', 'utf8')
    })
    .then((r3) => {
        console.log(r3)

    })
    .catch((err)=> {
        console.log(err)
    })