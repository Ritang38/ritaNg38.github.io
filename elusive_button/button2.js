const runningbtn = document.getElementById('button')

runningbtn.addEventListener('mouseover',function(){
	const randomTop = Math.random() * (window.innerHeight - runningbtn.offsetHeight);
	const randomLeft = Math.random() * (window.innerWidth - runningbtn.offsetWidth);
	runningbtn.style.top = randomTop + 'px';
	runningbtn.style.left = randomLeft +'px';
})