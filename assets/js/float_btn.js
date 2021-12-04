function floatBtn(first_icon, last_icon) {
	const floatBtn = document.querySelector('.float-btn');
	const listBtn = floatBtn.querySelector('.list-button');
	const icon = floatBtn.querySelector('i');

	floatBtn.addEventListener('click', function () {
		listBtn.classList.toggle('show');

		if(listBtn.classList.contains('show')) {
			icon.classList.replace(first_icon, last_icon);
		} else {
			icon.classList.replace(last_icon, first_icon);
		}
	})
}


