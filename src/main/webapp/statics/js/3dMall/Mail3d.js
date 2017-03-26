/*!
* 	Mail3d.js
*********************************************/

$(function () {
	//顶部通栏
	if (jGet('Mall3dSlider')) {
		if ($('#Mall3dSlider').find('.item').length > 1) {
			$("#Mall3dSlider").scrollable({circular:true}).navigator({navi: "#Mall3dSliderPager",indexed:true}).autoscroll({
				interval: 2000,autoplay:true
			});
		};
	};
	
});
