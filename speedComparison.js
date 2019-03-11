

const fs = require('fs')
const {now} = require('perf_hooks').performance
const parsers = {}


console.time("Loading Lepzulnag's TOML")
parsers.Lepzulnag = require('./@lepzulnag/parser')
console.timeEnd("Loading Lepzulnag's TOML")

// console.time("Loading Iarna's TOML")
// parsers.Iarna = require('./@iarna/toml')
// console.timeEnd("Loading Iarna's TOML")

// console.time("Loading Ltd's TOML")
// parsers.Ltd = require('./@ltd/index')
// console.timeEnd("Loading Ltd's TOML")


// console.time("Loading Bombadil")
// parsers.Bombadil = require('@sgarciac/bombadil')
// parsers.Bombadil = new parsers.Bombadil.TomlReader
// parsers.Bombadil.parse = parsers.Bombadil.readToml
// console.timeEnd("Loading Bombadil")


for (let file of ['sampleA.toml']) {
	console.log('\n\n>> '+ file)
	let content = String(fs.readFileSync(file))

	for (let name in parsers) {
		let parser = parsers[name]
		console.log('\n> '+name)

		console.time('First round')
		let result = parser.parse(content, 0.5, '\r\n')
		console.timeEnd('First round')

		// if (name == 'Lepzulnag')
		// 	console.log(result)

		console.time('Second round')
		parser.parse(content, 0.5, '\r\n')
		console.timeEnd('Second round')


		const parse = () => parser.parse(content, 0.5, '\r\n')

		const iterations = 1000

		const start = now()
		for (let i=0; i < iterations; i++)
			parse()
		console.log('Warm: '+ ((now() - start) / iterations) + 'ms')
	}
}
