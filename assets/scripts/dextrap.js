$(function() {
	$(function() {
		$(".btn-sandwich").prepend('<div class="btn-sandwich-row"></div><div class="btn-sandwich-row"></div><div class="btn-sandwich-row"></div>');
	});
	var navVisible = false;
	$(".btn-sandwich").click(function(){
		var $this = $(this);
		var $nav = $this.parent('.navbar-header').next('.nav');
		if (navVisible) {
			$nav.css("display", "none");
		  navVisible = false;
		  return
		}
		$nav.css("display", "block");
		navVisible = true;
	});
});