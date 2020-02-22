module.exports = {
	index(req, res) {
		return res.render('admin/index')
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
