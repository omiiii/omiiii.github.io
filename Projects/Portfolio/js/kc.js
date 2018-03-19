var kc = function(callback) {
	var kc= {
			addEvent:function ( obj, type, fn, ref_obj )
			{
				if (obj.addEventListener)
					obj.addEventListener( type, fn, false );
				else if (obj.attachEvent)
				{
					// IE
					obj["e"+type+fn] = fn;
					obj[type+fn] = function() { obj["e"+type+fn]( window.event,ref_obj ); }
					obj.attachEvent( "on"+type, obj[type+fn] );
				}
			},
	        input:"",
	        pattern:"3838404037393739666513",
	        load: function(link) {
				this.addEvent(document,"keydown", function(e,ref_obj) {
					if (ref_obj) kc = ref_obj; // IE
					kc.input+= e ? e.keyCode : event.keyCode;
					if (kc.input.length > kc.pattern.length) kc.input = kc.input.substr((kc.input.length - kc.pattern.length));
					if (kc.input == kc.pattern) {
                    kc.code(link);
					kc.input="";
                   	return;
                    }
            	},this);
           this.iphone.load(link);

				},
	        code: function(link) { window.location=link},
	        iphone:{
	                start_x:0,
	                start_y:0,
	                stop_x:0,
	                stop_y:0,
	                tap:false,
	                capture:false,
					orig_keys:"",
	                keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP","TAP"],
	                code: function(link) { kc.code(link);},
	                load: function(link){
									this.orig_keys = this.keys;
	    							kc.addEvent(document,"touchmove",function(e){
	                          if(e.touches.length == 1 && kc.iphone.capture==true){
	                            var touch = e.touches[0];
	                                kc.iphone.stop_x = touch.pageX;
	                                kc.iphone.stop_y = touch.pageY;
	                                kc.iphone.tap = false;
	                                kc.iphone.capture=false;
	                                kc.iphone.check_direction();
	                                }
	                                });
	                        kc.addEvent(document,"touchend",function(evt){
	                                if (kc.iphone.tap==true) kc.iphone.check_direction(link);
	                                },false);
	                        kc.addEvent(document,"touchstart", function(evt){
	                                kc.iphone.start_x = evt.changedTouches[0].pageX;
	                                kc.iphone.start_y = evt.changedTouches[0].pageY;
	                                kc.iphone.tap = true;
	                                kc.iphone.capture = true;
	                                });
	                                },
	                check_direction: function(link){
	                        x_magnitude = Math.abs(this.start_x-this.stop_x);
	                        y_magnitude = Math.abs(this.start_y-this.stop_y);
	                        x = ((this.start_x-this.stop_x) < 0) ? "RIGHT" : "LEFT";
	                        y = ((this.start_y-this.stop_y) < 0) ? "DOWN" : "UP";
	                        result = (x_magnitude > y_magnitude) ? x : y;
	                        result = (this.tap==true) ? "TAP" : result;

	                        if (result==this.keys[0]) this.keys = this.keys.slice(1,this.keys.length);
	                        if (this.keys.length==0) {
								this.keys=this.orig_keys;
								this.code(link);
								}
	                        }
	                }
	}

	typeof callback === "string" && kc.load(callback);
	if(typeof callback === "function")  {
		kc.code = callback;
		kc.load();
	}

	return kc;
}
