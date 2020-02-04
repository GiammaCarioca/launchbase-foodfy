const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
	card.addEventListener('click', function(e) {
		modalOverlay.classList.add('active')

		const receipt = {
			title: e.target.closest('.card').childNodes[3].textContent,
			image: e.target.closest('.card').childNodes[1].src,
			author: e.target.closest('.card').childNodes[5].textContent
		}

		createCard(receipt)
	})
}

function createCard(receipt) {
	modalOverlay.querySelector('img').src = receipt.image
	modalOverlay.querySelector('h3').innerHTML = receipt.title
	modalOverlay.querySelector('p').innerHTML = receipt.author
}

document.addEventListener('click', function(e) {
	if (e.target.matches('#close-modal') || e.target.matches('.modal-overlay')) {
		modalOverlay.classList.remove('active')
	}
})
