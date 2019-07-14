

const ION = require('./@lepzulnag/parser.js')
const fs = require('fs')

let file = 'sampleA.ion'
// let file = 'B.json'

// console.log(ION.parseFile(file))
ION.parseFile(file, (err, data) => {
	console.log(err || data)
})
// let content = fs.readFileSync(file)

// try {
	// console.log(parse(content))
// }
// catch (error) {
// 	const {column, row} = error.loc
// 	console.log('/!\\ '+error.msg+' ('+row+':'+column+')')
// }