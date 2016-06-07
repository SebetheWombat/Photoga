var imageSrc = {
	'birds' : ['images/sparrow.jpg','images/chickadee.jpg','images/duck.jpg','images/nuthatch.jpg','images/whiteThroatedSparrow.jpg','images/junco.jpg',
	'images/goldfinch.jpg','images/goldfinch1.jpg','images/sparrow1.jpg','images/chippingSparrow.jpg'],
	'landscape' : ['images/baldRock.jpg','images/montpellierSunset.jpg','images/baldMtn.jpg','images/barrettsCove1.jpg','images/camdenHills.jpg',
	'images/camdenHills1.jpg'],
	'manMade' : ['images/rumford.jpg','images/camden.jpg','images/beechHill.jpg','images/vtChurchDark.jpg','images/montpellierVT.jpg','images/vtchurch.jpg','images/vtBridge.jpg',
	'images/vtBridge1.jpg','images/camdenChuch.jpg'],
	'reptAmphib' :['images/snake.jpg'],
	'plants' : ['images/burrs.jpg'],
	'miscNature' : ['images/ice.jpg','images/fire.jpg']
};
var loadIt;

function loadAll(){
	
	var idNum = 1;
	var track = 0;
	var closedDiv = true;
	$("#container").append("<div class='row' id='1'>");
	for(topic in imageSrc){
		for(var i = 0; i < imageSrc[topic].length; i++){
		closedDiv = false;
		loadIt = "#" + idNum.toString();
		$(loadIt).append("<div class='col-sm-2'><img src='" + imageSrc[topic][i] + "' alt='' class='img-thumbnail'></div>")
		console.log(loadIt);
		track++;
		if(track%6==0){
			idNum++;
			$("#container").append("</div><div class='row' id='" + idNum.toString() + "'>");
			closedDiv = true;
		}
	}
	}
	if(!closedDiv){
		$("#container").append("</div>");
	}
	openUp();
}

function toLoad(topic){
	var track = 0;
	var idNum = 1;
	var closedDiv = true;
	$("#container").append("<div class='row' id='1'>");
	for(var i = 0; i < imageSrc[topic].length; i++){
		closedDiv = false;
		loadIt = "#" + idNum.toString();
		$(loadIt).append("<div class='col-sm-2'><img src='" + imageSrc[topic][i] + "' alt='' class='img-thumbnail'></div>")
		console.log(loadIt);
		track++;
		if(track%6==0){
			idNum++;
			$("#container").append("</div><div class='row' id='" + idNum.toString() + "'>");
			closedDiv = true;
		}
	}
	if(!closedDiv){
		$("#container").append("</div>");
	}
	openUp();
}
$('#bird').click(function(){
	$(".row").remove();
	toLoad('birds');
});
$('#land').click(function(){
	$(".row").remove();
	toLoad('landscape');
});
$('#man').click(function(){
	$(".row").remove();
	toLoad('manMade');
});
$('#rept').click(function(){
	$(".row").remove();
	toLoad('reptAmphib');
});
$('#plant').click(function(){
	$(".row").remove();
	toLoad('plants');
});
$('#nat').click(function(){
	$(".row").remove();
	toLoad('miscNature');
});
$("#all").click(function(){
	$(".row").remove();
	loadAll();
});
$(".dropdown").mouseover(function(){
	$(".dropdown-menu").show();
});
$(".dropdown-menu").mouseout(function(){
	$(".dropdown-menu").hide();
});
function openUp(){
	$('.img-thumbnail').click(function(e){
		e.preventDefault;
		var links = $(this).attr("src");
		$("#content").html("<img src='" + links + "'>");
		$("#popup").show();
	});
}
$("#popup").click(function(){
	$(this).hide();
});

loadAll();