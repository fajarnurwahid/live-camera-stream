const toggleSidebar = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('#sidebar');
const overlay = document.querySelector('.overlay');

toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

overlay.addEventListener('click', function () {
	sidebar.classList.add('hide');
})