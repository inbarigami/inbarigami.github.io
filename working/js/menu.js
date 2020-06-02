$(document).ready(function(){
	$('.navbar-toggler').click(function(){
		  $navicon = $(this).find('#nav-icon');
		$navicon.toggleClass('open');
	});
});
