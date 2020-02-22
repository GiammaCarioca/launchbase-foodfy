const Recipe = require('../models/Recipe')

module.exports = {
	index(req, res) {
		Recipe.all(function(recipes) {
			return res.render('admin/recipes/index', { recipes })
		})
	},
	create(req, res) {
		return res.render('admin/recipes/create')
	},
	post(req, res) {
		const keys = Object.keys(req.body)

		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Please, fill all the fields!')
			}
		}

		Recipe.create(req.body, function(recipe) {
			return res.redirect(`/admin/recipes/${recipe.id}`)
		})
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

			return res.render('admin/recipes/show', { recipe })
		})
	},
	edit(req, res) {
		Recipe.find(req.params.id, function(recipe) {
			if (!recipe) return res.send('Recipe not found!')

			recipe.image_url = recipe.image_url
			recipe.title = recipe.title
			recipe.author = recipe.author
			recipe.ingredients = recipe.ingredients.toString().split(',')
			recipe.preparation = recipe.preparation.toString().split(',')
			recipe.information = recipe.information

			return res.render('admin/recipes/edit', { recipe })
		})
	},
	put(req, res) {
		const keys = Object.keys(req.body)

		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Please, fill all the fields!')
			}
		}

		Recipe.update(req.body, function() {
			return res.redirect(`/admin/recipes/${req.body.id}`)
		})
	},
	delete(req, res) {
		Recipe.delete(req.body.id, function() {
			return res.redirect('/admin/recipes')
		})
	}
}
