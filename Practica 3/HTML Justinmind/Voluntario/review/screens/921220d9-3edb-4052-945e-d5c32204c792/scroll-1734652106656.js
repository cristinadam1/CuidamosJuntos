(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-921220d9-3edb-4052-945e-d5c32204c792 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);