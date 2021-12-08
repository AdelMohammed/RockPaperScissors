var opt = ['https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png','https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png','https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png']
var op1_count = 0;
var op2_count = 0; 
var op3_count = 0;
var rk = document.createElement('img');
var pr = document.createElement('img');
var ss = document.createElement('img');
var tx1 = document.createElement('p'); 
var rnd_img = document.createElement('img');
var yr_ply = '';
var yr_scr = 0;
var cmp_scr = 0;
function opt_1(){
	yr_ply = 'https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png'
	op1_count = 1
	if (op2_count == 1 || op3_count == 1){
		pr.remove();
		ss.remove();
	}
	var cmp_ply= opt[Math.floor((Math.random()) * 3)]
	rk.setAttribute('src',"https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png")
	rk.setAttribute('id','rockImg');
	rk.setAttribute('width','75px');
	rk.setAttribute('height','75px');
	document.getElementById('results').appendChild(rk);
	document.getElementById('rockImg').style.transform = "rotate(90deg)"
	document.getElementById('rockImg').style.borderRadius = "100%"
	tx1.setAttribute('id', 'par');
	document.getElementById('results').appendChild(tx1);
	document.getElementById('par').style.display = 'inline';
	document.getElementById('par').innerHTML = "VS"
	rnd_img.setAttribute('src', cmp_ply);
	rnd_img.setAttribute('id','rndImg');
	rnd_img.setAttribute('width','75px');
	rnd_img.setAttribute('height','75px');
	document.getElementById('results').appendChild(rnd_img)
	document.getElementById('rndImg').style.transform = "rotate(90deg)"
	document.getElementById('rndImg').style.borderRadius = "100%"
	if (yr_ply == cmp_ply){
		document.getElementById('result_text').innerHTML = "it's a draw!";
		document.getElementById('result_text').style.backgroundColor = 'gray'; 
	}
	else if (yr_ply == 'https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png' & cmp_ply == 'https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
document.getElementById("yr_scr").innerHTML = "You : <br>" + yr_scr;
	}
	else if (yr_ply == 'https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png' & cmp_ply == 'https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
		document.getElementById('yr_scr').innerHTML = "You : <br>" + yr_scr;
	}
	else if (yr_ply == 'https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png' & cmp_ply == 'https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
		document.getElementById('yr_scr').innerHTML = "You : <br>" + yr_scr;
	}
	else{
		document.getElementById('result_text').innerHTML = 'You Lost..';
		document.getElementById('result_text').style.backgroundColor = '#f70d1a';
		document.getElementById('result_text').style.borderColor = '#f70d1a';
		cmp_scr += 1;
document.getElementById("cmp_scr").innerHTML =
"Computer : <br>" + cmp_scr;
	}
}
function opt_2(){
	yr_ply = 'https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png'
	op2_count = 1
	if (op1_count == 1 || op3_count == 1){
		rk.remove();
		ss.remove();
	}
	var cmp_ply= opt[Math.floor((Math.random()) * 3)]
	pr.setAttribute('src',"https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png")
	pr.setAttribute('id','paperImg');
	pr.setAttribute('width','75px');
	pr.setAttribute('height','75px');
	document.getElementById('results').appendChild(pr);
	document.getElementById('paperImg').style.transform = "rotate(90deg)"
	document.getElementById('paperImg').style.borderRadius = "100%"
	tx1.setAttribute('id', 'par');
	document.getElementById('results').appendChild(tx1);
	document.getElementById('par').style.display = 'inline';
	document.getElementById('par').innerHTML = "VS"
	rnd_img.setAttribute('src', cmp_ply);
	rnd_img.setAttribute('id','rndImg');
	rnd_img.setAttribute('width','75px');
	rnd_img.setAttribute('height','75px');
	document.getElementById('results').appendChild(rnd_img)
	document.getElementById('rndImg').style.transform = "rotate(90deg)"
	document.getElementById('rndImg').style.borderRadius = "100%"
	if (yr_ply == cmp_ply){
		document.getElementById('result_text').innerHTML = "it's a draw!";
		document.getElementById('result_text').style.backgroundColor = 'gray';
	}
	else if (yr_ply == 'https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png' & cmp_ply == 'https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
		document.getElementById('yr_scr').innerHTML = "You : <br>" + yr_scr;
	}
	else if (yr_ply == 'https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png' & cmp_ply == 'https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
		document.getElementById('yr_scr').innerHTML = "You : <br>" + yr_scr;
	}
	else if (yr_ply == 'https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png' & cmp_ply == 'https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
		document.getElementById('yr_scr').innerHTML = "You : <br>" + yr_scr;
	}
	else{
		document.getElementById('result_text').innerHTML = 'You Lost..';
		document.getElementById('result_text').style.backgroundColor = '#f70d1a';
		document.getElementById('result_text').style.borderColor = '#f70d1a';
		cmp_scr += 1;
		document.getElementById('cmp_scr').innerHTML = "Computer : <br>" + cmp_scr;
	}
}
function opt_3(){
	yr_ply = 'https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png'
	op3_count = 1
	if (op1_count == 1 || op2_count == 1){
		rk.remove();
		pr.remove();
	}
	var cmp_ply= opt[Math.floor((Math.random()) * 3)]
	ss.setAttribute('src',"https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png")
	ss.setAttribute('id','scissorsImg');
	ss.setAttribute('width','75px');
	ss.setAttribute('height','75px');
	document.getElementById('results').appendChild(ss);
	document.getElementById('scissorsImg').style.transform = "rotate(90deg)"
	document.getElementById('scissorsImg').style.borderRadius = "100%"
	tx1.setAttribute('id', 'par');
	document.getElementById('results').appendChild(tx1);
	document.getElementById('par').style.display = 'inline';
	document.getElementById('par').innerHTML = "VS";
	rnd_img.setAttribute('src', cmp_ply);
	rnd_img.setAttribute('id','rndImg');
	rnd_img.setAttribute('width','75px');
	rnd_img.setAttribute('height','75px');
	document.getElementById('results').appendChild(rnd_img)
	document.getElementById('rndImg').style.transform = "rotate(90deg)"
	document.getElementById('rndImg').style.borderRadius = "100%"
	if (yr_ply == cmp_ply){
		document.getElementById('result_text').innerHTML = "it's a draw!";
		document.getElementById('result_text').style.backgroundColor = 'gray';
	}
	else if (yr_ply == 'https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png' & cmp_ply == 'https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
		document.getElementById('yr_scr').innerHTML = "You : <br>" + yr_scr;
	}
	else if (yr_ply == 'https://www.clipartkey.com/mpngs/b/109-1094404_rock-paper-scissors-clipart.png' & cmp_ply == 'https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
		document.getElementById('yr_scr').innerHTML = "You : <br>" + yr_scr;
	}
	else if (yr_ply == 'https://www.pinclipart.com/picdir/big/51-511436_rock-paper-scissors-dell-clipart.png' & cmp_ply == 'https://toppng.com/uploads/preview/rock-paper-scissors-circle-11562962494dqcjusyikw.png'){
		document.getElementById('result_text').innerHTML = 'You won!';
		document.getElementById('result_text').style.backgroundColor = 'lightgreen';
		document.getElementById('result_text').style.borderColor = 'green';
		yr_scr += 1;
		document.getElementById('yr_scr').innerHTML = "You : <br>" + yr_scr;
	}
	else{
		document.getElementById('result_text').innerHTML = 'You Lost..';
		document.getElementById('result_text').style.backgroundColor = '#f70d1a';
		document.getElementById('result_text').style.borderColor = '#f70d1a';
		cmp_scr += 1;
		document.getElementById('cmp_scr').innerHTML = "Computer : <br>" + cmp_scr;
	}
}