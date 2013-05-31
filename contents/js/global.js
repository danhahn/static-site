$(function() {
	$("table").addClass("table table-bordered");

	var $ul = $("<div id='localNav' class='navbar'><div class='navbar-inner'><ul class='nav'></ul></div></div>");

	$(".content h2").each(function(){
		var el =$(this);
		var addID = el.html().toLowerCase().replace(/\&nbsp;/g, "_").replace(/\s+/g, "_");
		var $li = $("<li><a></a></li>").click(function(event) {
			event.stopPropagation();
			$('html, body').animate({
				scrollTop: $("#"+addID).offset().top
			}, 500);
		});
		$li.find("a").attr("href", "#"+addID).html(el.html());
		var addItem = $ul.find(".nav");
		$li.appendTo(addItem);
		el.attr("id", addID);
		var top = $("<span class='scroll-top'>&uarr;Top</span>").click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		});
		top.appendTo(el);
	});

	$ul.prependTo(".content");

	$("strong").each(function() {
		var el = $(this);
		var text = el.html();
		if(text == "Note:") {
			el.parent().addClass("alert alert-info");
		}
	});

	$("a").each(function() {
		var el = $(this);
		var url = el.attr("href");
		if(url == "example.html") {
			el.attr("target", "_blank");
		}
	});

	var localNav = $("#localNav");

	var offset = localNav.offset();

	localNav.affix({
		offset: offset.top
	});


});