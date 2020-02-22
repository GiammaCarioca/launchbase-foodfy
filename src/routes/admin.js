const express = require('express')
const router = express.Router()

const chefs = require('../app/controllers/chefs')
const recipes = require('../app/controllers/recipes')

// Rotas de chefs
router.get('/chefs', chefs.index)
router.post('/chefs', chefs.post)

// Rotas de receitas
router.get('/recipes', recipes.index)
router.get('/recipes/create', recipes.create)
router.get('/recipes/:id', recipes.show)
router.get('/recipes/:id/edit', recipes.edit)
router.post('/recipes', recipes.post)
router.put('/recipes', recipes.put)
router.delete('/recipes', recipes.delete)

module.exports = router
