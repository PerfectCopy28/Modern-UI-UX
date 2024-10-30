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
const userTexts = document.getElementsByClassName('user-text');
const userPics = document.getElementsByClassName('user-pic');

function showReview() {
	for(let userPic of userPics){
		userPic.classList.remove('active-pic');
	}
	for(let userText of userTexts){
		userText.classList.remove('active-text');
	}

	let i = Array.from(userPics).indexOf(event.target);
	userPics[i].classList.add('active-pic');
	userTexts[i].classList.add('active-text');
}

/*---------- pircing ----------*/
const toggleBtn = document.getElementById('toggleBtn');

const card_1_front = document.querySelector('#card_1_front');
const card_1_back = document.querySelector('#card_1_back');

toggleBtn.addEventListener('change', () => {
	card_1_front.classList.toggle('rotate-y-180');
	card_1_back.classList.toggle('rotate-y-180');
})
const card_2_front = document.querySelector('#card_2_front');
const card_2_back = document.querySelector('#card_2_back');

toggleBtn.addEventListener('change', () => {
	card_2_front.classList.toggle('rotate-y-180');
	card_2_back.classList.toggle('rotate-y-180');
})
const card_3_front = document.querySelector('#card_3_front');
const card_3_back = document.querySelector('#card_3_back');

toggleBtn.addEventListener('change', () => {
	card_3_front.classList.toggle('rotate-y-180');
	card_3_back.classList.toggle('rotate-y-180');
})