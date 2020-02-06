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

	return res.render('home', { recipes: recipesFiltered })
})

server.get('/about', (req, res) => {
	return res.render('about')
})

server.get('/recipes', (req, res) => {
	return res.render('recipes', { recipes })
})

server.get('/recipes/:index', (req, res) => {
	const { index: recipeIndex } = req.params

	const recipe = recipes[recipeIndex]

	if (!recipe) return res.send('Recipe not found')

	return res.render('recipe', { recipe })
})

server.listen(5001, function() {
	console.log('server is running')
})
