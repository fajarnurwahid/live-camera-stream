const allContacts = document.querySelectorAll('.contact-wrapper .contact');

allContacts.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})