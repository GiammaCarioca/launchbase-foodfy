const express = require('express')
const router = express.Router()
const recipes = require('./app/controllers/recipes')

router.get('/', (req, res) => {
	return res.render('user/home')
})

router.get('/about', (req, res) => {
	return res.render('user/about')
})

router.get('/recipes', (req, res) => {
	return res.render('user/recipes')
})

router.get('/recipes/:index', (req, res) => {
	const { index: recipeIndex } = req.params

	const recipe = recipes[recipeIndex]

	if (!recipe) return res.send('Recipe not found')

	return res.render('user/recipe', { recipe })
})

router.get('/admin/recipes', recipes.index)
router.get('/admin/recipes/create', recipes.create)
router.get('/admin/recipes/:id', recipes.show)
router.get('/admin/recipes/:id/edit', recipes.edit)
router.post('/admin/recipes', recipes.post)
router.put('/admin/recipes', recipes.put)
router.delete('/admin/recipes', recipes.delete)

module.exports = router
