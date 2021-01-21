//const { Console } = require('console')
const fs = require('fs')
//const book = {
    //title: 'Ego is the Enemy'
//author: 'ryan holiday' 
//}
//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json',bookJSON)
//const dataBuffer = fs.readFileSync('1-json.json')
//const dataJSON = dataBuffer.toString()
//const data = JSON.parse(dataJSON)
//console.log(data.title)


const dataBuffer = fs.readFileSync("1-json.json")
const  datajson = dataBuffer.toString()
const user = JSON.parse(datajson)

user.name = 'zain alramahi'
user.age = 18

const userjson = JSON.stringify(user)
fs.writeFileSync('./1-json.json', userjson)