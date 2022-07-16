var view = new Object();
    view.start = function(){
    	this.width = 1000;
    	this.height = 400;
    	this.color = "#e9e9e9";
    	this.canvas = document.createElement('canvas');
    	this.canvas.width = this.width;
    	this.canvas.height = this.height;
    	document.body.prepend(this.canvas);
    	this.c = this.canvas.getContext('2d'); 
    	this.c.fillStyle = this.color;
    	this.c.fillRect(0, 0, this.width, this.height);
    	
    	// Create button. Вот как то так реализовывал.
    	this.create_button = function(name = "Button", func = function(){alert("Button");}, x = 0, y = 0, width = 180, height = 50){
    		let height_text = height * .6;
    		let view_button = function(on = false){
    			this.c.fillStyle = on ? "#ffc500" : "#888";
    			this.c.fillRect(x, y, width, height);
    			this.c.fillStyle = on ? "#000" : this.color;
    			this.c.font = height_text+"pt sans-serif";
    			this.c.fillText(name, x + (width - this.c.measureText(name).width) / 2 , y + (height - height_text) / 2 + height_text);
    		}.bind(this);
    		view_button();
    		let move_button = function(e){
    			view_button(e.offsetX >= x && e.offsetX < x + width && e.offsetY >= y && e.offsetY < y + height);
    		}
    		this.canvas.addEventListener("mousemove", move_button);
    		let click_button = function(e){
    			if(e.offsetX >= x && e.offsetX < x + width && e.offsetY >= y && e.offsetY < y + height)func();
    		}
    		this.canvas.addEventListener("click", click_button);
    		let remove_button = function(){
    			this.c.fillStyle = this.color;
    			this.c.fillRect(x, y, width, height);
    			this.canvas.removeEventListener("mousemove", move_button);
    			this.canvas.removeEventListener("click", click_button);
    		}.bind(this);
    		return remove_button;
    	}.bind(this);
    	
    	let remove_button = this.create_button("test", function(){alert("test");}, 10, 150, 120, 50);
    	this.create_button('remove_button "test"', remove_button, 100, 10, 900, 100);
    }
    window.onload = function(){
    	view.start();
    }