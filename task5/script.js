let input = document.querySelector('input'),
	btn = document.querySelector('button'),
	duplicateField = document.querySelector('#duplicateField');

input.addEventListener('input', () => {
	duplicateField.textContent = input.value;
});

btn.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(input.value);
	input.value = "";
	duplicateField.textContent = "";
});