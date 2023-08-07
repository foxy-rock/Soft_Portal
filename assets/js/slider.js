const slider1 = document.querySelectorAll('.swiper1');

const swiper = new Swiper('.swiper1', {
	slidesPerView: 1,
	pagination: {
		el: '.pag-1',
	},
});

const slider2 = document.querySelectorAll('.swiper2');

const swiper2 = new Swiper('.swiper2', {
	slidesPerView: 1,
	pagination: {
		el: '.pag-2',
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		1074: {
			slidesPerView: 4,
		},
		796: {
			slidesPerView: 3,
		},
		560: {
			slidesPerView: 2,
		}
	}
});

const slider3 = document.querySelectorAll('.swiper3');

const swiper3 = new Swiper('.swiper3', {
	slidesPerView: 1,
	pagination: {
		el: '.pag-3',
	},
	}
);