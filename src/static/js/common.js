$(document).ready(function () {


});

new Swiper('.license-slider', {
	loop: true,
	spaceBetween: 120,
	slidesPerView: 5,
	navigation: {
		nextEl: '.license-block .swiper-button-next',
		prevEl: '.license-block .swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	breakpoints: {
		499: {
			slidesPerView: 1,
			spaceBetween: 0
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1099: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1599: {
			slidesPerView: 4,
			spaceBetween: 20
		},
		1919: {
			spaceBetween: 10,
			slidesPerView: 5
		}
	}
});


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
			// 767: {
			// 	slidesPerView: 3
			// },
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
}