import thenFs from 'then-fs'


console.log('A')
async function getFile(fpath) {
    console.log('B')
    const r1 = await thenFs.readFile('./files/01.txt', 'utf8')
    const r2 = await thenFs.readFile('./files/02.txt', 'utf8')
    const r3 = await thenFs.readFile('./files/03.txt', 'utf8')
    console.log(r1, r2, r3)
    console.log('D')
}

getFile()
console.log('C')
