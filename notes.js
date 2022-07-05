const fs = require('fs')
const { title } = require('process')

/////////////////////////////////////////////version 1////////////////////////////////////
// const addNotes= (title,body) => {
//     const notes = loadNotes()
//     console.log(notes)
//     notes.push({
//         title,
//         body
//     })
//     console.log(notes)
//     saveNotes(notes)
// }

///////////////////////////////////////////version 2 filter///////////////////////////////////////////
// const addNotes= (title,body) => {
//     const notes = loadNotes()
//     const duplicateTitle = notes.filter((note)=> {
//         return note.title === title
//     })
//     console.log(duplicateTitle)
//     if(duplicateTitle.length === 0) {
//         notes.push({
//         title,
//         body
//         })
//         saveNotes(notes)
//         console.log("Save Successfuly")
//     }
//     else{
//         console.log("Error Duplicate Title")
//     }
// }

////////////////////////////////////////////////////version2 Find/////////////////////////////////
const addNotes= (title,body) => {
    const notes = loadNotes()
    console.log(notes)
    const duplicateTitle = notes.find((note)=> {
        return note.title === title
    })
    console.log(duplicateTitle)
    if(!duplicateTitle) {
        notes.push({
        title,
        body
        })
        saveNotes(notes)
        console.log("Save Successfuly")
    }
    else{
        console.log("Error Duplicate Title")
    }
}

const loadNotes= () => {
    try{
        const data = fs.readFileSync('notes.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}
const saveNotes =(note) => {
    const saveData = JSON.stringify(note)
    fs.writeFileSync('notes.json',saveData)
}

/////////////////////////////////////Remove Notes////////////////////////////////////////////

const removeNotes=(title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((el) => {
        return el.title !== title
    })
    console.log(notesToKeep)
    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log("Removed Successfuly")
    }
    else {
        console.log("Nothing to Remove")
    }
    
}

const readNotes = (title)=>{
    const notes =loadNotes()
    const foundNotes = notes.find((el)=>{
        return el.title === title
    })
    if (foundNotes){
        console.log(foundNotes.body)
    }
    else {
        console.log("There is no title found")
    }
}

const listNotes = ()=>{
    const notes = loadNotes() 
    notes.forEach(el => {
        console.log(el.title)
    });
}

module.exports={
    addNotes,
    removeNotes,
    readNotes,
    listNotes
}