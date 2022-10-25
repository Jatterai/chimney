const form = document.querySelector('.help__form');
const alert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const inputs = form.querySelectorAll('input');
	const values = {};
	inputs.forEach((e) => {
		if (e['value']) values[e['name']] = e['value'];
	})

	alert.innerHTML =
		`<p>Теперь я знаю, что вас зовут ${values.name}<br>А ваш номер - ${values.phone}!</p>`;

	setTimeout(() => {
		alert.classList.add('opened');
	}, 0);


	setTimeout(() => {
		alert.classList.remove('opened');
	}, 3000);
})