const allNotifications = document.querySelectorAll('.notification-wrapper .notification');

allNotifications.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})