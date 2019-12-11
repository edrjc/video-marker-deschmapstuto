const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey

async function robot(content){
	await fetchContentFromWikipedia(content)
	//sanitizeContent(content)
	//breakContentIntoSentences(content)

	async function fetchContentFromWikipedia(content){
		const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
		const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
		const wikipediaResponse = await wikipediaAlgorithm.pipe(content.searchTerm)
		content.sourceContentOriginal = wikipediaResponse.get().content
	}
}

module.exports = robot
