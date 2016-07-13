$(document).ready(function(){
	lang=$('#lang').text();
	if(lang==='es'){
		text=["Desarrollador  de software.", "Desarrollador web."]
	}else if(lang==='en'){
		text=["Software developer.", "Web developer."]
	}else{
		text=["Software garatzailea.", "Web garatzailea."]
	}
	$(function(){
		$(".subtitle").typed({
			strings: text,// ^1000 para parar xx milisegundos
			typeSpeed: 20, // typing speed
			backDelay: 500, // pause before backspacing
			loop: true, // loop on or off (true or false)
			loopCount: false, // number of loops, false = infinite
		});
	});
	
});
function scrollTo(){
	$("#experiencia").ScrollTo({
			duration: 2600,
			durationMode: 'all'
	});
	//$(window).scrollTo(document.getElementById('twenty'), 800);
}



