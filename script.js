/*---------- Mobile menu ----------*/
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('#links');
const foSolid = document.querySelector('.fa-solid');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('hidden');
	foSolid.classList.toggle('fa-xmark');
});

links.forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.toggle('hidden');
		foSolid.classList.toggle('fa-xmark');
	})
})
/*---------- testimonial ----------*/