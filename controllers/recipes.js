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
