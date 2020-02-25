const express = require('express')
const router = express.Router()

const recipes = require('../app/controllers/recipes')
const chefs = require('../app/controllers/chefs')

const admin = require('./admin')

router.use('/admin', admin)

router.get('/', recipes.index)

router.get('/about', (req, res) => {
	return res.render('about')
})

router.get('/recipes', recipes.index)

router.get('/recipes/:id', recipes.show)

router.get('/chefs', chefs.index)

module.exports = router
