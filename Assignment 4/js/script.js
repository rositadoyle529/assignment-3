
$('document').ready();
$(".readless").hide();

function togglereadmore(e){
	 e.preventDefault();
	 $(".hide").toggle();
	 $(".readmore").hide();
	 $(".readless").show();
};
		$(".hide").hide();
		$(".readmore").click(togglereadmore);

function togglereadless(e){
	 e.preventDefault();
	 $(".hide").toggle();
	 $(".readless").hide();
	 $(".readmore").show();
};

		$(".hide").hide();

		$(".readless").click(togglereadless);

function togglelearnmore(e){
	 e.preventDefault();
	 $(".hide").toggle();
	 $(".learnmore").hide();
};

		$(".hide").hide();

		$(".learnmore").click(togglelearnmore);

		$(".button blue").click(bluetime);

		function bluetime(e){
			e.preventDefault();
		}

