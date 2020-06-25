$(document).ready (function() {
  $( "#cloud" ).animate({ "top": "+=30px" }, "slow" );
  $( "#predskazaniye" ).animate({ "top": "+=30px" }, "slow" );
  $( "#predskazaniye" ).animate({ "top": "-=30px" }, "slow");
  $( "#cloud" ).animate({ "top": "-=30px" }, "slow", arguments.callee);
	$("#cloud").on('click', function() { 
		$(".sessiapred").css("display", "block");
		$(".anket").css("display", "block");
		$(".answer").css("display", "none");
		$("#pgg").css("display", "block");
		$("#closer").css("display", "none");
		
	});
	$("#predskazaniye").on('click', function() {
		$(".sessiapred").css("display", "block"); 
	});
	$(".close").on('click', function() { 
		$(".sessiapred").css("display", "none"); 
	});
	$("#pgg").on('click', function() { 
			$(".anket").css("display", "none");
			$(".answer").css("display", "block");
			$("#pgg").css("display", "none");
			$("#closer").css("display", "block");
	});
	$("#closer").on('click', function() { 
			$(".anket").css("display", "block");
			$(".answer").css("display", "none");
			$("#pgg").css("display", "block");
			$("#closer").css("display", "none");
	});
	
});

