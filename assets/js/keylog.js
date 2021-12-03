const allKeylog = document.querySelectorAll('.keylog-wrapper .keylog');

allKeylog.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})