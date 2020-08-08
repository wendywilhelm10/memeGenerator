const form = document.querySelector('#memeForm');
const imageMeme = document.querySelector('#image');
const topText = document.querySelector('#topText');
const botText = document.querySelector('#botText');
const memes = document.querySelector('#memes');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	addMeme();
	imageMeme.value = '';
	topText.value = '';
	botText.value = '';
});

memes.addEventListener('click', function(e) {
	if (e.target.className === 'remove') {
		console.log(e.target.parentElement);
		e.target.parentElement.remove();
	}
});

function addMeme() {
	const newDiv = document.createElement('div');
	newDiv.classList.add('imageDiv');

	const newImage = document.createElement('img');
	newImage.src = imageMeme.value;
	newDiv.appendChild(newImage);

	const newDivTop = document.createElement('div');
	newDivTop.classList.add('textOnTop');
	newDivTop.innerText = topText.value;
	newDiv.appendChild(newDivTop);

	const newDivBot = document.createElement('div');
	newDivBot.classList.add('textOnBot');
	newDivBot.innerText = botText.value;
	newDiv.appendChild(newDivBot);

	const newDivRemove = document.createElement('div');
	newDivRemove.classList.add('remove');
	newDivRemove.innerText = 'X';
	newDiv.appendChild(newDivRemove);
	memes.appendChild(newDiv);
}
