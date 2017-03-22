(function(window, undefined){
	var document = window.document;

	var nc = {
		Debug:false,
		minit:function(param, callback){
			$.Debug = param.debug;
			$.IFLock = param.lock;

			if(callback){
				callback(true);//执行回调函数
			}
		}
	}

	window.nc = window.$ = nc;
})(window);