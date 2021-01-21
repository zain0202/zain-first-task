const { Console, clear } = require('console')
const fs = require('fs')
const yargs = require ('yargs')
fs.writeFileSync('./notes.txt', 'my name is zain')
fs.writeFileSync('note.txt','i live in jordan')
require('./utils.js')
const name = 'zain'
console.log(name)
const notesFunctions= require('./notes.js');
const msg =notesFunctions.getNotes()
console.log(msg)
const validator = require('validator')
console.log(validator.isURL('https://mead.io'))
const chalk = require('chalk')
const { UV_FS_O_FILEMAP } = require('constants')
const { argv0, title } = require('process')
const notes = require('./notes.js')
console.log(chalk.bgBlack.bold.inverse('success'))
const greenMsg = chalk.green.bold('ssuccess')
console.log(greenMsg)
console.log(process.argv)
const command = process.argv[2]
if (command === 'add') {
    console.log('Adding note!')
}
yargs.version('16.2.0')
yargs.command({
command: 'add',
describe: 'add a new note',
builder: {
    title: {
        describe: 'note title',
        demandOption: true,
        type: 'string'
    }
},
body: {
    describe: 'Note body',
    demandOption: true,
type: 'string'
},
handler: function (argv) {
   notes.addNote(Argv.title, argv.body)
}})
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string' 
        }
    },
handler: function (argv){
    notes.removeNote(argv.title)

}})
yargs.command({
    command: 'list', 
discribe: 'List your notes',
handler: function () {
console.log('listing out all note')    
}
})
yargs.command({
    command: 'read',
    describe: 'read a note',
handler: function (){
    console.log('reading a note')
}
}
)
 
 if (command == 'add'){console .log('adding note')} else if(command == 'remove')
 {console.log('removing note!')}








 





 

