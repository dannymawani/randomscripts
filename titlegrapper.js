function () {
	var returnValue = false;
	
	jQuery('h1').each(function() {
		if(jQuery(this).text().toLowerCase().match(/(404 side ikke fundet)/gi) != null) {
			returnValue = true;
		}
	});
	
	return returnValue;
}