const Chef = require('../models/Chef')

module.exports = {
	index(req, res) {
		Chef.all(function(chefs) {
			let page = req.originalUrl == '/chefs' ? 'chefs' : 'admin/chefs/index'

			return res.render(page, { chefs })
		})
	}
}
