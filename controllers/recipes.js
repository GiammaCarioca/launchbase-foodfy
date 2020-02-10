const { recipes } = require('../data')

exports.index = function(req, res) {
	return res.render('admin/index', { recipes })
}

exports.show = function(req, res) {
	const { id: recipeIndex } = req.params

	const recipe = recipes[recipeIndex]

	if (!recipe) return res.send('Recipe not found')

	return res.render('admin/recipe', { recipe })
}

exports.create = function(req, res) {
	return res.render('admin/create')
}

exports.edit = function(req, res) {
	const { id } = req.params

	const foundRecipe = recipes.find(function(recipe) {
		return id == recipe.id
	})

	if (!foundRecipe) return res.send('Recipe not found!')

	const recipe = {
		...foundRecipe
	}

	return res.render('admin/edit', { recipe })
}
