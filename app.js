//core modules
const fs = require('fs');
fs.writeFileSync('notes.txt','hello');

console.log(fs.readFileSync('notes.txt').toString())

fs.appendFileSync('notes.txt',', world');
console.log(fs.readFileSync('notes.txt').toString())


//my own module
const data = require('./data');
console.log('sum: ' + data.sum(3,3));
console.log(data.name1)

//npm module
/**
 * npm init -y
 * npm i validator
 * npm i --> node modules
 */
// let validator= require('validator');
// const { argv } = require('process');
// console.log(validator.isEmail('yasmin@gmail.com'))
// console.log(validator.isEmail('yasmin'))


///argv
// const arg = process.argv[2];
// if (arg === 'add'){
//     console.log('add item')
// }
// else if (arg=== 'remove') {
//     console.log('remove item')
// }
// else {
//     console.log('error')
// }

///yargs
const yargs =require('yargs');

////////////////////version.1

// yargs.command({
//     command: 'add',
//     describe: 'Add notes',
//     handler: ()=> {
//         console.log('Add note')
//     }
// })

// yargs.command({
//     command: 'remove',
//     describe: 'Remove notes',
//     handler: ()=> {
//         console.log('Remove note')
//     }
// })

// yargs.command({
//     command: 'read',
//     describe: 'Read notes',
//     handler: ()=> {
//         console.log('Read note')
//     }
// })

// yargs.command({
//     command: 'list',
//     describe: 'List notes',
//     handler: ()=> {
//         console.log('List notes')
//     }
// })

//////////////////////version.2
// yargs.command({
//     command: 'add',
//     describe: 'Add notes',
//     builder:{
//         title:{
//             describe:'this is the title description in add command',
//             demandOption:true,
//             type: 'string'
//         },
//         boby:{
//             describe:'this is the body description in add command',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler: ()=> {
//         console.log('Add notessss test')
//     }
// })

// yargs.command({
//     command: 'remove',
//     describe: 'Remove notes',
//     builder:{
//         title:{
//             describe:'this is the title description in remove command',
//             demandOption:true,
//             type: 'string'
//         }
//     },
//     handler: ()=> {
//         console.log('Remove note')
//     }
// })

// yargs.command({
//     command: 'read',
//     describe: 'Read notes',
//     builder:{
//         describe:'this is the title description in read command',
//         demandOption:true,
//         type: 'string'
//     },
//     handler: ()=> {
        
//     }
// })

// yargs.command({
//     command: 'list',
//     describe: 'List notes',
//     handler: ()=> {
//         console.log('List notes')
//     }
// })



//// version.3
const notes = require('./notes')
yargs.command({
    command: 'add',
    describe: 'Add notes',
    builder:{
        title:{
            describe:'this is the title description in add command',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'this is the body description in add command',
            demandOption:true,
            type:'string'
        }
    },
    handler: ()=> {
        notes.addNotes(yargs.argv.title,yargs.argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove notes',
    builder:{
        title:{
            describe:'this is the title description in remove command',
            demandOption:true,
            type: 'string'
        }
    },
    handler: ()=> {
        notes.removeNotes(yargs.argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder:{
       title:{
            describe:'this is the title description in read command',
            demandOption:true,
            type: 'string'
       } 
    },
    handler: ()=> {
        notes.readNotes(yargs.argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: ()=> {
        notes.listNotes()
    }
})

yargs.parse()