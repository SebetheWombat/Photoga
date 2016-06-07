function scrollBack(){
	$("#backArrow").click(function(){
		var curPhoto = $(".curSlide");
		var prevPhoto = curPhoto.prev();
		if(prevPhoto.length === 0){
			prevPhoto = $(".photoSlide").last();
		}
		curPhoto.hide().removeClass("curSlide");
		prevPhoto.fadeIn(300).addClass("curSlide");
	});
}
function scrollForward(){
	$("#rightArrow").click(function(){
		var curPhoto = $(".curSlide");
		var nextPhoto = curPhoto.next();
		if(nextPhoto.length === 0){
			nextPhoto = $(".photoSlide").first();
		}
		curPhoto.hide().removeClass("curSlide");
		nextPhoto.fadeIn(300).addClass("curSlide");
	});
}

$(document).ready(function(){
	scrollForward();
	scrollBack();
});