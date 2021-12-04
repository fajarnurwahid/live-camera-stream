function callModal(toggleModal) {
	const toggleBtnModal = document.querySelector(toggleModal);
	const modal = document.querySelector(`.modal${toggleBtnModal.dataset.target}`);
	const closeBtn = modal.querySelector('.close-btn');

	toggleBtnModal.addEventListener('click', function () {
		modal.classList.add('show');
	})

	closeBtn.addEventListener('click', function () {
		modal.classList.remove('show');	
	})
}