const getNotes = function ()  {
return 'your notes...'
}
const addNote = function (title, body){
const note = loadNotes()
const duplicateNotes = notes.filter(function(note){
    return note.title == title 
})



notes.push({
title: title,
body: body
})

saveNotes(notes)}


const removeNote = function (title) {
    const notes = loadNotes ()
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    } 
    )
    saveNotes(notesToKeepS)
}



const saveNotes = function (notes) {
const dataJSON = JSON.stringify(notes)
fs.writFileSync('notes.json', dataJSON)
}




const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

}  catch (e) {
    return[]
}
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
