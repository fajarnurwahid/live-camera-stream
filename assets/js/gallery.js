const allGallery = document.querySelectorAll('.gallery-wrapper .gallery');

allGallery.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})