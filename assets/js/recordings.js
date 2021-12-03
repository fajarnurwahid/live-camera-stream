const allRecording = document.querySelectorAll('.recording-wrapper .recording');
const startRecordBtn = document.querySelector('.start-record-btn');
const inputAudio = document.querySelector('#audio-capture');

allRecording.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})

startRecordBtn.addEventListener('click', function () {
	inputAudio.click();
})

