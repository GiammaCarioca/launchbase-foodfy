const cards = document.getElementsByClassName('card')

for (let card of cards) {
	card.addEventListener('click', function() {
		console.log('clicou no card')
	})
}
