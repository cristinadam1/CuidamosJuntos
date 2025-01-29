(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-1d768963-065e-4b7e-9897-31055f00fb7a .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);