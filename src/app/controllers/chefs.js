const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
	index(req, res) {
		return
	},
	create(req, res) {
		return
	},
	post(req, res) {
		const keys = Object.keys(req.body)

		for (key of keys) {
			if (req.body[key] == '') {
				return res.send('Please, fill all the fields!')
			}
		}

		const query = `
      INSERT INTO chefs (
        name,
        avatar_url,
        created_at
      ) VALUES ($1, $2, $3)
      RETURNING id
    `

		const values = [req.body.name, req.body.avatar_url, date(Date.now()).iso]

		db.query(query, values, function(err, results) {
			if (err) return res.send('Database Error!')

			return res.redirect(`/admin/chefs/${results.rows[0].id}`)
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
