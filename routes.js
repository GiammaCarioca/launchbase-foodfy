const express = require('express')
const router = express.Router()
const {
	index,
	create,
	show,
	edit,
	post,
	put,
	delete: destroy
} = require('./controllers/recipes')

const { recipes } = require('./data')

router.get('/', (req, res) => {
	let recipesFiltered = []

	for (let i = 0; i < 6; i++) {
		recipesFiltered.push(recipes[i])
	}

	return res.render('user/home', { recipes: recipesFiltered })
})

router.get('/about', (req, res) => {
	return res.render('user/about')
})

router.get('/recipes', (req, res) => {
	return res.render('user/recipes', { recipes })
})

router.get('/recipes/:index', (req, res) => {
	const { index: recipeIndex } = req.params

	const recipe = recipes[recipeIndex]

	if (!recipe) return res.send('Recipe not found')

	return res.render('user/recipe', { recipe })
})

router.get('/admin/recipes', index)
router.get('/admin/recipes/create', create)
router.get('/admin/recipes/:id', show)
router.get('/admin/recipes/:id/edit', edit)
// router.post('/admin/recipes', post)
// router.put('/admin/recipes', put)
// router.delete('/admin/recipes', destroy)

module.exports = router
