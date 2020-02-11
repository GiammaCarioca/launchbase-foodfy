const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res) {
	return res.render('admin/index', { recipes: data.recipes })
}

exports.show = function(req, res) {
	const { id: recipeIndex } = req.params

	const recipe = data.recipes[recipeIndex]

	if (!recipe) return res.send('Recipe not found')

	return res.render('admin/recipe', { recipe })
}

exports.create = function(req, res) {
	return res.render('admin/create')
}

exports.post = function(req, res) {
	const keys = Object.keys(req.body)

	for (key of keys) {
		if (req.body[key] == '') {
			return res.send('Please, fill all the fields!')
		}
	}

	let {
		image_url,
		title,
		author,
		ingredients,
		preparation,
		information
	} = req.body

	const id = Number(data.recipes.length)

	data.recipes.push({
		id,
		image_url,
		title,
		author,
		ingredients,
		preparation,
		information
	})

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if (err) return res.send('Write file error!')

		return res.redirect(`/admin/recipes/${id}`)
	})
}

exports.edit = function(req, res) {
	const { id } = req.params

	const foundRecipe = data.recipes.find(function(recipe) {
		return id == recipe.id
	})

	if (!foundRecipe) return res.send('Recipe not found!')

	const recipe = {
		...foundRecipe
	}

	return res.render('admin/edit', { recipe })
}

exports.put = function(req, res) {
	const { id } = req.body
	let index = 0

	const foundRecipe = data.recipes.find(function(recipe, foundIndex) {
		if (id == recipe.id) {
			index = foundIndex
			return true
		}
	})

	if (!foundRecipe) return res.send('Recipe not found!')

	const recipe = {
		...foundRecipe,
		...req.body,
		id: Number(req.body.id)
	}

	data.recipes[index] = recipe

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if (err) return res.send('Write error!')

		return res.redirect(`/admin/recipes/${id}`)
	})
}

exports.delete = function(req, res) {
	const { id } = req.body

	const filteredRecipes = data.recipes.filter(function(recipe) {
		return recipe.id != id
	})

	data.recipes = filteredRecipes

	fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
		if (err) return res.send('Write error!')

		return res.redirect(`/admin/recipes`)
	})
}
