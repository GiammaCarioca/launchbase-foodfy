const express = require('express')
const router = express.Router()

const admin = require('./admin')

router.use('/admin', admin)

router.get('/', (req, res) => {
	return res.render('home')
})

router.get('/about', (req, res) => {
	return res.render('about')
})

router.get('/recipes', (req, res) => {
	return res.render('recipes')
})

router.get('/recipes/:index', (req, res) => {
	const { index: recipeIndex } = req.params

	const recipe = recipes[recipeIndex]

	if (!recipe) return res.send('Recipe not found')

	return res.render('recipe', { recipe })
})

module.exports = router
