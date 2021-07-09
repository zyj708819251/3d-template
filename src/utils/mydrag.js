$(".handleCreateIframeContainer").on("click", function(e) {
 	let parent = e.currentTarget;
 	//鼠标按下，计算当前元素距离可视区的距离
 	let disX = e.clientX - parent.offsetLeft
 	let disY = e.clientY - parent.offsetTop
 	document.onmousemove = function(e) {
 		//通过事件委托，计算移动的距离
 		let L = e.clientX - disX
 		let T = e.clientY - disY
 		if (L < 0) {
 			L = 0;
 		} else if (L > document.body.clientWidth - parent.offsetWidth) {
 			L = document.body.clientWidth - parent.offsetWidth;
 		}

 		if (T < 0) {
 			T = 0;
 		} else if (T > document.body.clientHeight - parent.offsetHeight) {
 			T = document.body.clientHeight - parent.offsetHeight;
 		}
 		parent.style.left = L + 'px';
 		parent.style.top = T + 'px';
 		parent.style.zIndex = '2';
 		// var id = parent.getAttribute('id')
 		// if (id == 'spfdDrag') {
 		// 	rs._serviceCall({
 		// 		"service_id": "commonappfunction.move_url_by_ie",
 		// 		"title": "视频放大",
 		// 		"x": L + 30,
 		// 		"y": T + 100
 		// 	})
 		// }
 	}
 	document.onmouseup = function(e) {
 		document.onmousemove = null
 		document.onmouseup = null
 		$('.drag-panel').css('z-index', '2')
 		parent.style.zIndex = '9999';
 	}


 })