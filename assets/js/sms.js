const allSMS = document.querySelectorAll('.sms-wrapper .sms');

allSMS.forEach((item, idx)=> {
	item.style.setProperty('--d', idx+1);
})