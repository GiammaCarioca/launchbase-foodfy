const Recipe = require('../models/Recipe')

module.exports = {
	index(req, res) {
		const { filter } = req.query

		if (filter) {
			Recipe.findBy(filter, function(recipes) {
				return res.render('results', { recipes, filter })
			})
		} else {
			Recipe.all(function(recipes) {
				let page = req.originalUrl == '/' ? 'home' : 'recipes'

				return res.render(page, { recipes })
			})
		}
	},
	show(req, res) {
		Recipe.find(req.params.id, function(recipe) {
			if (!recipe) return res.send('Recipe not found!')

			recipe.image_url = recipe.image_url
			recipe.title = recipe.title
			recipe.author = recipe.author
			recipe.ingredients = recipe.ingredients.toString().split(',')
			recipe.preparation = recipe.preparation.toString().split(',')
			recipe.information = recipe.information

			return res.render('recipe', { recipe })
		})
	}
}
