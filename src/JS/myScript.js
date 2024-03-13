function loadData(data){
	if(data=='btn1'){
		document.getElementById('img1').src="./images/img2.jfif";
		document.getElementById('para1').innerHTML="IPHONE XS SMALL description";
	}
	else if(data=='btn2'){
		document.getElementById('img1').src="./images/img3.jfif";
		document.getElementById('para1').innerHTML="IPHONE XS MAX SMALL description";
	}
	else if(data=='btn3'){
		document.getElementById('img1').src="./images/img4.jfif";
		document.getElementById('para1').innerHTML="IPHONE 8s plus SMALL description";
	}
	else if(data=='btn4'){
		document.getElementById('img1').src="./images/img5.jfif";
		document.getElementById('para1').innerHTML="IPHONE SE SMALL description";
	}
}

function priceforloop(){
	var phones=["Iphone XS - $1349","Iphone XS - $1349","Iphone XS - $999","Iphone 8 plus - $599","Iphone SE - $399"];
	
	for(i=0,len=phones.length,list="Phone avg price<br>";i<len;i++){
		list += phones[i]+"<br>";
	}
	
	document.getElementById('para1').innerHTML=list;
}