const allRecording = document.querySelectorAll('.recording-wrapper .recording');

allRecording.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})

callModal('.record');