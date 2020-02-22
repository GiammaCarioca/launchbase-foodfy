const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
	index(req, res) {
		db.query(`SELECT * FROM recipes`, function(err, results) {
			if (err) return res.send('Database Error!')

			return res.render('admin/index', { recipes: results.rows })
		})
	},
	create(req, res) {
		return res.render('admin/create')
	},
	post(req, res) {
		const keys = Object.keys(req.body)

		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Please, fill all the fields!')
			}
		}

		const query = `
      INSERT INTO recipes (
        image,
				title,
				ingredients,
				preparation,
				information,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `

		const values = [
			req.body.image_url,
			req.body.title,
			req.body.ingredients,
			req.body.preparation,
			req.body.information,
			date(Date.now()).iso
		]

		db.query(query, values, function(err, results) {
			if (err) return res.send('Database Error!')

			return res.redirect(`/admin/recipes/${results.rows[0].id}`)
		})
	},
	show(req, res) {
		return
	},
	edit(req, res) {
		return
	},
	put(req, res) {
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

		return
	},
	delete(req, res) {
		return
	}
}
