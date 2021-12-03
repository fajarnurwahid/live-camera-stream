const allCall = document.querySelectorAll('.call-wrapper .call');

allCall.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})