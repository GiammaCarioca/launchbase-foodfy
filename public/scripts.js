const cards = document.getElementsByClassName('card')

for (let card of cards) {
	card.addEventListener('click', function() {
		console.log('clicou no card')
	})
}

// const showHides = document.querySelectorAll('h4')

// for (showHide of showHides) {
// 	let selector = document.querySelectorAll('.topic-content')

// 	showHide.addEventListener('click', function() {
// 		if (showHide.innerHTML === 'MOSTRAR') {
// 			alert('cliquei no mostrar')
// 		} else if (showHide.innerHTML === 'ESCONDER') {
// 			alert('cliquei no esconder')
// 		}
// 	})
// }
