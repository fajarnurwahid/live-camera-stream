const allPhotos = document.querySelectorAll('.photo-wrapper .photo');

allPhotos.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})

floatBtn('bxs-camera-plus', 'bx-x');

callModal('.front-btn');
callModal('.back-btn');