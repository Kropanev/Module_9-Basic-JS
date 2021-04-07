let link = document.querySelector('#link');

link.addEventListener('click', (e) => {
	let content = prompt('Введите текст:');

	e.preventDefault();
	
	link.textContent = content;
});