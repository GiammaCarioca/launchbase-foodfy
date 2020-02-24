const Chef = require('../models/Chef')

module.exports = {
	index(req, res) {
		Chef.all(function(chefs) {
			return res.render('admin/chefs/index', { chefs })
		})
	},
	create(req, res) {
		return res.render('admin/chefs/create')
	},
	post(req, res) {
		const keys = Object.keys(req.body)

		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Please, fill all the fields!')
			}
		}

		Chef.create(req.body, function(chef) {
			return res.redirect(`/admin/chefs/${chef.id}`)
		})
	},
	show(req, res) {
		Chef.find(req.params.id, function(chef) {
			if (!chef) return res.send('Chef not found!')

			Chef.ownRecipes(function(allRecipes) {
				const recipes = allRecipes.filter(recipe => recipe.chef_id == chef.id)

				return res.render('admin/chefs/show', { chef, recipes })
			})
		})
	},
	edit(req, res) {
		Chef.find(req.params.id, function(chef) {
			if (!chef) return res.send('Chef not found!')

			chef.name = chef.name
			chef.avatar_url = chef.avatar_url

			return res.render('admin/chefs/edit', { chef })
		})
	},
	put(req, res) {
		const keys = Object.keys(req.body)

		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Please, fill all the fields!')
			}
		}

		Chef.update(req.body, function() {
			return res.redirect(`/admin/chefs/${req.body.id}`)
		})
	},
	delete(req, res) {
		Chef.delete(req.body.id, function() {
			return res.redirect('/admin/chefs')
		})
	}
}
