window.onload = function () {

	new Swiper('.certification-slider', {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 6,
		observer: true,
		observeParents: true,

		navigation: {
			prevEl: '.certification-block .swiper-button-prev',
			nextEl: '.certification-block .swiper-button-next'
		},

		breakpoints: {
			450: {
				slidesPerView: 1.4
			},
			650: {
				slidesPerView: 2
			},
			900: {
				slidesPerView: 3
			},
			1099: {
				slidesPerView: 4
			},
			1279: {
				slidesPerView: 5
			}
		}
	});

	let checkbox = document.querySelector('.form__checkbox');

	checkbox.onclick = function () {
		document.querySelector('.form__label span').classList.toggle('form__checkbox_show');
	}


} //!END ONLOAD