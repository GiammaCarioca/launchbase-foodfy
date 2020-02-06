const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
	card.addEventListener('click', function(e) {
		modalOverlay.classList.add('active')

		const receipt = this.children

		createCard(receipt)
	})
}

function createCard([image, title, author]) {
	modalOverlay.querySelector('img').src = image.src
	modalOverlay.querySelector('img').alt = title.textContent
	modalOverlay.querySelector('h3').innerHTML = title.textContent
	modalOverlay.querySelector('p').innerHTML = author.textContent
}

document.addEventListener('click', function(e) {
	if (e.target.matches('#close-modal') || e.target.matches('.modal-overlay')) {
		modalOverlay.classList.remove('active')
	}
})
