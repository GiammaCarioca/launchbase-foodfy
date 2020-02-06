const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
	express: server,
	autoescape: false,
	noCache: true
})

server.get('/', (req, res) => {
	let recipesFiltered = []

	for (let i = 0; i < 6; i++) {
		recipesFiltered.push(recipes[i])
	}

	return res.render('home', { items: recipes })
})

server.get('/about', (req, res) => {
	return res.render('about')
})

server.get('/recipes', (req, res) => {
	let recipesFiltered = []

	for (let i = 0; i < 6; i++) {
		const obj = recipes[i]
		obj.index = 1
		recipesFiltered.push(obj)
	}

	return res.render('recipes', { items: recipesFiltered })
})

server.get('/recipes/:index', (req, res) => {
	const { index: recipeIndex } = req.params

	const recipe = recipes[recipeIndex]

	if (!recipe) return res.send('Recipe not found')

	return res.render('recipe', { item: recipe })
})

server.listen(5001, function() {
	console.log('server is running')
})
