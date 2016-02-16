
	nextImg=function(el, noofimgs){
		
		var
		i=parseInt(el.src.split('/').reverse()[0]) ;
		
		el.src=(i>=noofimgs)? 'img/1shot.png': 'img/'+(++i)+'shot.png' ;
	}