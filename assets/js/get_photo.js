const allPhotos = document.querySelectorAll('.photo-wrapper .photo');
const startCameraBtn = document.querySelector('.start-camera-btn');
const inputCamera = document.querySelector('#video-capture');

allPhotos.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})

startCameraBtn.addEventListener('click', function () {
	inputCamera.click();
})