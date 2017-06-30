$(function() {
	$('#menu_button').on('click', function() {
		if (! $('#menu_products').is(':visible')) {
			$('#overlay_dark').fadeIn(300);
			$('#menu_products').fadeIn(300).slideDown();
		}
	});

	$('#menu_products_close').on('click', function() {
		if ($('#menu_products').is(':visible')) {
			$('#overlay_dark').fadeOut(300);
			$('#menu_products').fadeOut(300).slideUp();
		}
	});
});