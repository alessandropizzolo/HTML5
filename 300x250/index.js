(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.FINESTRANUOVA = function() {
	this.initialize(img.FINESTRANUOVA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,298);


(lib.ombra = function() {
	this.initialize(img.ombra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,392,71);


(lib.SFONDO = function() {
	this.initialize(img.SFONDO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,880,639);


(lib.uomo1 = function() {
	this.initialize(img.uomo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,695);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.uomo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.uomo1();
	this.instance.setTransform(-19,-38,1.2574,1.2574);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.uomo, new cjs.Rectangle(-19,-38,378.5,873.9), null);


(lib.text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape.setTransform(243.675,47.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_1.setTransform(240.075,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAWIAAgJIAWgYIgVAAIAAgKIAkAAIAAAJIgWAYIAWAAIAAAKg");
	this.shape_2.setTransform(235.325,45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIAWIAAgXQAAgEgCgCQgCgDgEAAQgCAAgDADQgCACAAAEIAAAXIgMAAIAAgrIAMAAIAAAGIADgCIADgCIACgCIAEgBQAHAAAEAFQAEAFAAAHIAAAbg");
	this.shape_3.setTransform(230.525,45.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_4.setTransform(225.525,45.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLAcQgFgBgEgDIAEgJIAHADIAIABQAGAAADgDQADgDAAgGIAAgCQgDADgDACQgDACgFAAIgHgBIgGgEIgFgHQgBgDAAgEIAAgBQAAgFACgDQABgEADgDIAGgEIAHgBQAFAAADACIAGAEIAAgFIAMAAIAAAhQAAAGgBAEQgCAFgDADQgDACgFACQgEABgFAAQgGAAgFgBgAgDgRIgEACIgCADIgBAEIAAABQAAAEADADQADACAEAAIAEgBIAEgBIACgDIABgEIAAgBIgBgEIgCgDIgEgCIgEgBIgDABg");
	this.shape_5.setTransform(220.175,46.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAeIAAgrIALAAIAAArgAgFgSIAAgLIALAAIAAALg");
	this.shape_6.setTransform(216.35,45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAVQgFgCgEgDIAGgIIAHAEIAFABIAFAAIAAgDIAAgBIAAgBIgCgCIgDgBIgDAAIgEgCIgFgDIgCgCIgBgGIAAAAIABgFIADgFIAFgDIAFgBIAJABIAIAEIgFAJIgGgDIgGgBIgCAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIABABIABACIACABIAEACIAEABIAFACIACADQACACAAADQAAAEgCADIgDAFIgGACIgGABQgDAAgGgCg");
	this.shape_7.setTransform(213.1,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFQAAgDACgFQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_8.setTransform(208.625,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_9.setTransform(201.275,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPASQgEgEAAgIIAAgcIANAAIAAAYQAAAFABACQACACADAAQADAAACgCQACgCAAgFIAAgYIANAAIAAArIgNAAIAAgGIgCADIgCACIgDABIgEABQgIABgDgFg");
	this.shape_10.setTransform(196.3,45.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAbIgEgCIgDgDIgBgHIAAgUIgFAAIAAgLIAFAAIAAgLIAMAAIAAALIAKAAIAAALIgKAAIAAASQAAAEADAAQAEAAADgCIAAAKIgFACIgFABIgEgBg");
	this.shape_11.setTransform(192.05,45.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEQACAEAAAEIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_12.setTransform(185.575,45.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_13.setTransform(181.925,45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_14.setTransform(179.525,45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCQABgDADgBIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_15.setTransform(175.825,45.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_16.setTransform(168.675,45.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_17.setTransform(161.325,45.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAbIgEgCIgDgDIgBgHIAAgUIgFAAIAAgLIAFAAIAAgLIALAAIAAALIALAAIAAALIgLAAIAAASQAAAEAEAAQAEAAADgCIAAAKIgEACIgGABIgEgBg");
	this.shape_18.setTransform(157.15,45.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_19.setTransform(150.675,45.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgFAeIAAgrIALAAIAAArgAgFgSIAAgLIALAAIAAALg");
	this.shape_20.setTransform(144.8,45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAIAWIAAgXQAAgEgCgCQgCgDgEAAQgCAAgDADQgCACAAAEIAAAXIgMAAIAAgrIAMAAIAAAGIADgCIADgCIACgCIAEgBQAHAAAEAFQAEAFAAAHIAAAbg");
	this.shape_21.setTransform(141.075,45.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_22.setTransform(137.4,45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGAVQgEgCgDgDIgFgHQgBgEAAgFIABgIIAFgHQADgDAEgCQAFgCADAAQAHAAAEACQAEACADAEIgIAIIgEgEIgGgBIgDABIgDACIgDAEIAAAEIAAAFIADADIAEAEIADAAIAGgBIAEgEIAHAIQgDAEgEACQgEACgHAAQgDAAgFgCg");
	this.shape_23.setTransform(133.95,45.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFAeIAAgrIALAAIAAArgAgFgSIAAgLIALAAIAAALg");
	this.shape_24.setTransform(130.4,45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAWIgRgrIANAAIAJAcIAKgcIANAAIgRArg");
	this.shape_25.setTransform(126.775,45.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_26.setTransform(120.75,45);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAAbIgEgCIgDgDIgBgHIAAgUIgFAAIAAgLIAFAAIAAgLIALAAIAAALIALAAIAAALIgLAAIAAASQAAAEAFAAQADAAADgCIAAAKIgFACIgFABIgEgBg");
	this.shape_27.setTransform(117.85,45.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAIAWIAAgXQAAgEgCgCQgCgDgEAAQgCAAgDADQgCACAAAEIAAAXIgMAAIAAgrIAMAAIAAAGIADgCIADgCIACgCIAEgBQAHAAAEAFQAEAFAAAHIAAAbg");
	this.shape_28.setTransform(113.725,45.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFQAAgDACgFQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_29.setTransform(108.725,45.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLAcQgFgBgEgDIAEgJIAHADIAIABQAGAAADgDQADgDAAgGIAAgCQgDADgDACQgDACgFAAIgHgBIgGgEIgFgHQgBgDAAgEIAAgBQAAgFACgDQABgEADgDIAGgEIAHgBQAFAAADACIAGAEIAAgFIAMAAIAAAhQAAAGgBAEQgCAFgDADQgDACgFACQgEABgFAAQgGAAgFgBgAgDgRIgEACIgCADIgBAEIAAABQAAAEADADQADACAEAAIAEgBIAEgBIACgDIABgEIAAgBIgBgEIgCgDIgEgCIgEgBIgDABg");
	this.shape_30.setTransform(103.425,46.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AASAdIgGgNIgXAAIgGANIgMAAIAYg5IALAAIAYA5gAgHAFIAPAAIgIgSg");
	this.shape_31.setTransform(97.6,45.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFAeIAAgrIALAAIAAArgAgFgSIAAgLIALAAIAAALg");
	this.shape_32.setTransform(90.8,45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAdQgDgBgDgDQgDgDgBgFQgCgEAAgFQAAgGACgDQABgFADgDQADgCADgCIAIgCQAEAAADADIAGAEIAAgVIAMAAIAAA6IgMAAIAAgGIgGAFQgDACgEAAIgIgBgAgDgDIgDADIgDACIgBAGIABAEIADAFIADACIADABIAEgBIAEgCIACgFIABgEIgBgGIgCgCIgEgDIgEgBIgDABg");
	this.shape_33.setTransform(86.725,45.05);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_34.setTransform(79.225,45.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAbIgEgCIgDgDIgBgHIAAgUIgFAAIAAgLIAFAAIAAgLIAMAAIAAALIAKAAIAAALIgKAAIAAASQAAAEADAAQAEAAADgCIAAAKIgFACIgFABIgEgBg");
	this.shape_35.setTransform(75.05,45.25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_36.setTransform(70.975,45.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMAWIAAgrIAMAAIAAAJQABgEAEgDQADgDAFAAIAAAOIAAAAQgGAAgEADQgDAEAAAHIAAAQg");
	this.shape_37.setTransform(66.975,45.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_38.setTransform(60.275,45.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAIAWIAAgXQAAgEgCgCQgCgDgEAAQgCAAgDADQgCACAAAEIAAAXIgMAAIAAgrIAMAAIAAAGIADgCIADgCIACgCIAEgBQAHAAAEAFQAEAFAAAHIAAAbg");
	this.shape_39.setTransform(55.475,45.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPASQgEgEAAgIIAAgcIANAAIAAAYQAAAFACACQABACADAAQADAAACgCQACgCAAgFIAAgYIANAAIAAArIgNAAIAAgGIgCADIgCACIgDABIgEABQgHABgEgFg");
	this.shape_40.setTransform(50.4,45.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAIAWIAAgXQAAgEgCgCQgCgDgEAAQgCAAgDADQgCACAAAEIAAAXIgMAAIAAgrIAMAAIAAAGIADgCIADgCIACgCIAEgBQAHAAAEAFQAEAFAAAHIAAAbg");
	this.shape_41.setTransform(43.025,45.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIAVQgFgCgDgDQgDgDgCgEQgCgEAAgFQAAgEACgEQACgEADgDQADgDAFgCQAEgCAEAAQAFAAAFACQAEABADAEQADADACAEQACAEAAAEQAAAFgCAEIgFAHQgDADgEACQgFACgFAAQgEAAgEgCgAgEgKQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAIgDAEIAAAEIAAAFIADADIADADIAEABIAFAAIAEgEIACgDIABgFIgBgDIgDgFIgDgCIgFgBIgEABg");
	this.shape_42.setTransform(37.775,45.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGAVQgEgCgDgDIgFgHQgCgEABgFIABgIIAFgHQADgDAEgCQAEgCAEAAQAHAAAEACQAEACADAEIgIAIIgEgEIgGgBIgDABIgDACIgDAEIAAAEIAAAFIADADIAEAEIADAAIAFgBIAFgEIAHAIQgDAEgEACQgEACgHAAQgEAAgEgCg");
	this.shape_43.setTransform(32.9,45.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHAWQgEgDgDgDIgFgHQgCgEAAgFIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAACIgdAAQABADACADQADACADAAIAGgBIAFgEIAHAHQgDAEgEACQgFACgGAAQgEAAgEgBgAgFgKQgDADgBAFIASAAQAAgFgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_44.setTransform(25.675,45.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_45.setTransform(18.275,45.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_46.setTransform(14.8,45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_47.setTransform(12.425,45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgLAcQgFgBgEgDIAEgJIAHADIAIABQAGAAADgDQADgDAAgGIAAgCQgDADgDACQgDACgFAAIgHgBIgGgEIgFgHQgBgDAAgEIAAgBQAAgFACgDQABgEADgDIAGgEIAHgBQAFAAADACIAGAEIAAgFIAMAAIAAAhQAAAGgBAEQgCAFgDADQgDACgFACQgEABgFAAQgGAAgFgBgAgDgRIgEACIgCADIgBAEIAAABQAAAEADADQADACAEAAIAEgBIAEgBIACgDIABgEIAAgBIgBgEIgCgDIgEgCIgEgBIgDABg");
	this.shape_48.setTransform(8.375,46.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_49.setTransform(4.55,45);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAVAWIAAgXQAAgEgCgCQgCgDgDAAQgEAAgCADQgCACAAAEIAAAXIgLAAIAAgXQAAgEgCgCQgCgDgEAAQgDAAgCADQgCACAAAEIAAAXIgNAAIAAgrIANAAIAAAGIACgCIADgCIAEgCIAEgBQAEAAADADQADABABADQADgDAEgBQADgDAFAAQAHAAAEAFQAEAEAAAIIAAAbg");
	this.shape_50.setTransform(-0.475,45.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCQABgDADgBIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_51.setTransform(-6.875,45.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgHAeIAAggIgGAAIAAgKIAGAAIAAgDQgBgIAEgDQADgDAGAAIAFAAIAEABIAAAKIgDgBIgDAAQgEAAgBAFIAAACIAKAAIAAAKIgJAAIAAAgg");
	this.shape_52.setTransform(-10.6,44.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_53.setTransform(-17.075,45.825);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgQASQgDgEAAgIIAAgcIAMAAIAAAYQAAAFADACQABACADAAQAEAAACgCQABgCAAgFIAAgYIANAAIAAArIgNAAIAAgGIgBADIgEACIgCABIgEABQgHABgFgFg");
	this.shape_54.setTransform(-21.9,45.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAAAbIgEgCIgDgDIgBgHIAAgUIgFAAIAAgLIAFAAIAAgLIAMAAIAAALIAKAAIAAALIgKAAIAAASQAAAEADAAQAEAAADgCIAAAKIgEACIgGABIgEgBg");
	this.shape_55.setTransform(-26.1,45.25);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_56.setTransform(234.025,37.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_57.setTransform(230.525,36.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_58.setTransform(228.125,36.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_59.setTransform(224.475,37);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgKAdQgDgCgDgCQgDgDgBgFQgCgEAAgGQAAgFACgEQABgEADgDQADgDADgBIAIgBQAEAAADACIAGAEIAAgVIAMAAIAAA7IgMAAIAAgHIgGAFQgDADgEAAIgIgCgAgDgDIgDACIgDAEIgBAEIABAGIADADIADADIADABIAEgBIAEgDIACgDIABgGIgBgEIgCgEIgEgCIgEgBIgDABg");
	this.shape_60.setTransform(219.175,36.25);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_61.setTransform(211.675,37);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgIAVQgFgBgDgEQgDgDgCgEQgCgEAAgFQAAgEACgEQACgEADgDQADgDAFgCQAEgCAEAAQAFAAAFACQAEACADADQADADACAEQACAEAAAEQAAAFgCAEIgFAHQgDAEgEABQgFACgFAAQgEAAgEgCgAgEgKQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgDADIAAAEIAAAEIADAFIADACIAEABIAFAAIAEgDIACgEIABgFIgBgEIgDgDIgDgDIgFgBIgEABg");
	this.shape_62.setTransform(204.075,37);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgPASQgEgFAAgHIAAgbIANAAIAAAXQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgXIANAAIAAArIgNAAIAAgHIgCADIgCACIgDACIgEABQgHAAgEgFg");
	this.shape_63.setTransform(198.9,37.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAAcIgEgDIgDgDIgBgHIAAgUIgFAAIAAgKIAFAAIAAgMIALAAIAAAMIALAAIAAAKIgLAAIAAASQAAAEAFAAQADAAADgCIAAAKIgEADIgGAAIgEAAg");
	this.shape_64.setTransform(194.7,36.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_65.setTransform(188.225,37);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgMAXIAAgrIAMAAIAAAIQABgEAEgDQADgCAFAAIAAAMIAAAAQgGAAgEAEQgDAEAAAHIAAARg");
	this.shape_66.setTransform(184.225,36.95);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_67.setTransform(179.875,37);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHAVQgFgCgFgDIAFgIIAHAEIAGABIAEAAIACgDIAAAAIgBgCIgCgCIgDgBIgCgBIgFgBIgEgCIgEgDIgBgFIAAgBIABgGIAEgEIAFgDIAGgBIAIABIAIAFIgFAIIgGgDIgFgBIgDAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIABACIADABIABABIADABIAGACIADACIAEADQABADAAADQAAAEgBACIgEAFIgFACIgHABQgEAAgEgCg");
	this.shape_68.setTransform(175.35,37);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgHAVQgFgCgFgDIAFgIIAHAEIAGABIAEAAIACgDIAAAAIgBgCIgCgCIgDgBIgCgBIgFgBIgEgCIgEgDIgBgFIAAgBIABgGIAEgEIAFgDIAGgBIAIABIAIAFIgFAIIgGgDIgFgBIgDAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIABACIADABIABABIADABIAGACIADACIAEADQABADAAADQAAAEgBACIgEAFIgFACIgHABQgEAAgEgCg");
	this.shape_69.setTransform(171.3,37);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_70.setTransform(166.825,37);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAIAXIAAgYQAAgFgCgCQgCgCgEAAQgCAAgDACQgCACAAAFIAAAYIgMAAIAAgrIAMAAIAAAFIADgCIADgCIACgCIAEAAQAHgBAEAFQAEAEAAAIIAAAcg");
	this.shape_71.setTransform(161.875,36.95);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_72.setTransform(156.825,37);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgEAcIgGgEIAAAGIgMAAIAAg7IAMAAIAAAVIAGgEQADgCAEAAIAIABQADABADADIAEAHQACAEAAAFQAAAGgCAEIgEAIQgDACgDACQgEACgEAAQgEAAgDgDgAgDgDIgEACIgCAEIgBAEIABAGIACADIAEADIADABIAEgBIADgDIADgDIABgGIgBgEIgDgEIgDgCIgEgBIgDABg");
	this.shape_73.setTransform(151.725,36.25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_74.setTransform(145.275,36.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_75.setTransform(141.625,37.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_76.setTransform(134.475,37);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_77.setTransform(127.125,37);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAAAcIgEgDIgDgDIgBgHIAAgUIgFAAIAAgKIAFAAIAAgMIALAAIAAAMIALAAIAAAKIgLAAIAAASQABAEAEAAQADAAADgCIAAAKIgFADIgFAAIgEAAg");
	this.shape_78.setTransform(122.9,36.45);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgPASQgEgFAAgHIAAgbIANAAIAAAXQAAAEACACQABADADAAQADAAACgDQACgCAAgEIAAgXIANAAIAAArIgNAAIAAgHIgCADIgCACIgDACIgEABQgHAAgEgFg");
	this.shape_79.setTransform(118.8,37.05);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_80.setTransform(115.075,36.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_81.setTransform(111.375,37.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgIAVQgEgCgFgDIAGgIIAGAEIAGABIAFAAIABgDIAAAAIgBgCIgCgCIgDgBIgCgBIgFgBIgEgCIgEgDIgBgFIAAgBIABgGIAEgEIAFgDIAFgBIAJABIAIAFIgFAIIgGgDIgGgBIgCAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIACACIACABIABABIADABIAGACIADACIAEADQABADAAADQAAAEgBACIgEAFIgFACIgHABQgEAAgFgCg");
	this.shape_82.setTransform(107.05,37);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_83.setTransform(100.175,37.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_84.setTransform(96.675,36.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_85.setTransform(94.325,36.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_86.setTransform(90.625,37.025);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_87.setTransform(84.75,36.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAAAcIgEgDIgDgDIgBgHIAAgUIgFAAIAAgKIAFAAIAAgMIALAAIAAAMIALAAIAAAKIgLAAIAAASQAAAEAFAAQADAAADgCIAAAKIgFADIgFAAIgEAAg");
	this.shape_88.setTransform(81.85,36.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_89.setTransform(77.775,37.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgGAVQgEgBgDgEIgFgHQgBgEgBgFIACgIIAFgHQADgDAEgCQAEgCAFAAQAGAAAEACQAEACADAEIgHAIIgFgEIgFgBIgEABIgDADIgCADIgBAEIABAFIACAEIADADIAEAAIAFgBIAFgEIAIAIQgEAEgEACQgEACgGAAQgFAAgEgCg");
	this.shape_90.setTransform(73.25,37);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_91.setTransform(69.7,36.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgKAdQgDgCgDgCQgDgDgBgFQgCgEAAgGQAAgFACgEQABgEADgDQADgDADgBIAIgBQAEAAADACIAGAEIAAgVIAMAAIAAA7IgMAAIAAgHIgGAFQgDADgEAAIgIgCgAgDgDIgDACIgDAEIgBAEIABAGIADADIADADIADABIAEgBIAEgDIACgDIABgGIgBgEIgCgEIgEgCIgEgBIgDABg");
	this.shape_92.setTransform(65.625,36.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_93.setTransform(60.525,37);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgKAdQgDgCgDgCQgDgDgBgFQgCgEAAgGQAAgFACgEQABgEADgDQADgDADgBIAIgBQAEAAADACIAGAEIAAgVIAMAAIAAA7IgMAAIAAgHIgGAFQgDADgEAAIgIgCgAgDgDIgDACIgDAEIgBAEIABAGIADADIADADIADABIAEgBIAEgDIACgDIABgGIgBgEIgCgEIgEgCIgEgBIgDABg");
	this.shape_94.setTransform(55.225,36.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgKAfIgFgCIgDgFIgBgFIAAgBQAAgDABgDIAEgEIAFgDIAHgBIAFABIAFABIAAgBQAAgEgCgBQgCgCgEAAIgHABIgFABIgDgJIAHgCIAJgBQAKAAAFAFQAEAFAAAIIAAAZIgMAAIAAgFIgFAFQgDABgEAAIgGgBgAgFANQgCACAAADIAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAIAFABQADAAADgCQACgCAAgDIAAgDIgDgBIgFAAQgDAAgCABgAgBgRIgLgKIALgEIAIAOg");
	this.shape_95.setTransform(47.675,36.075);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAAAcIgEgDIgDgDIgBgHIAAgUIgFAAIAAgKIAFAAIAAgMIALAAIAAAMIALAAIAAAKIgLAAIAAASQABAEAEAAQADAAADgCIAAAKIgFADIgFAAIgEAAg");
	this.shape_96.setTransform(43.7,36.45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_97.setTransform(40.9,36.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_98.setTransform(38.525,36.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_99.setTransform(34.825,37.025);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgPASQgEgFAAgHIAAgbIAMAAIAAAXQAAAEACACQACADADAAQAEAAABgDQADgCAAgEIAAgXIAMAAIAAArIgMAAIAAgHIgDADIgDACIgCACIgEABQgIAAgDgFg");
	this.shape_100.setTransform(30,37.05);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AALAdIAAgUIgGAGQgDACgEAAIgIgCQgDgBgDgDQgDgDgBgEQgCgEAAgFQAAgGACgEQABgEADgDQADgDADgCIAIgBQAEAAADACIAGAFIAAgGIAMAAIAAA4gAgDgRIgDADIgDAEIgBAFIABAFIADADIADADIADAAIAEAAIAEgDIACgDIABgFIgBgFIgCgEIgEgDIgEgBIgDABg");
	this.shape_101.setTransform(24.675,37.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_102.setTransform(17.125,37.025);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAAAcIgEgDIgDgDIgBgHIAAgUIgFAAIAAgKIAFAAIAAgMIALAAIAAAMIALAAIAAAKIgLAAIAAASQAAAEAEAAQAEAAADgCIAAAKIgEADIgGAAIgEAAg");
	this.shape_103.setTransform(13.15,36.45);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_104.setTransform(9.075,37.025);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgFAWIgRgrIANAAIAJAcIAKgcIANAAIgRArg");
	this.shape_105.setTransform(4.375,37.025);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_106.setTransform(-0.575,37);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_107.setTransform(-4.225,36.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgEIgFgGQgCgEAAgGIACgIQABgEADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABAEIACAIIgBACIAAABIgdAAQABAEACADQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgKQgDADgBAEIASAAQAAgDgDgEQgCgCgEAAQgDAAgCACg");
	this.shape_108.setTransform(-7.925,37);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgHANIACgZIANAAIAAAAIgIAZg");
	this.shape_109.setTransform(-11.475,34.75);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_110.setTransform(-13.875,36.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_111.setTransform(-16.275,36.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_112.setTransform(-19.925,37.025);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgKAdQgDgCgDgCQgDgDgBgFQgCgEAAgGQAAgFACgEQABgEADgDQADgDADgBIAIgBQAEAAADACIAGAEIAAgVIAMAAIAAA7IgMAAIAAgHIgGAFQgDADgEAAIgIgCgAgDgDIgDACIgDAEIgBAEIABAGIADADIADADIADABIAEgBIAEgDIACgDIABgGIgBgEIgCgEIgEgCIgEgBIgDABg");
	this.shape_113.setTransform(-25.075,36.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_114.setTransform(239.45,27.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAAAcIgEgCIgDgFIgBgGIAAgUIgFAAIAAgKIAFAAIAAgMIALAAIAAAMIALAAIAAAKIgLAAIAAASQAAAEAFAAQADAAADgCIAAALIgEACIgGAAIgEAAg");
	this.shape_115.setTransform(236.55,27.65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAAAcIgEgCIgDgFIgBgGIAAgUIgFAAIAAgKIAFAAIAAgMIAMAAIAAAMIAKAAIAAAKIgKAAIAAASQAAAEAEAAQADAAADgCIAAALIgFACIgFAAIgEAAg");
	this.shape_116.setTransform(233.25,27.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgIAVQgFgBgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgDQADgEAFgBQAEgCAEAAQAFAAAFACQAEACADACQADADACAFQACAEAAAEQAAAFgCAEIgFAIQgDADgEABQgFACgFAAQgEAAgEgCgAgEgKQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgDADIAAAEIAAAEIADAFIADACIAEABIAFgBIAEgCIACgEIABgFIgBgEIgDgDIgDgDIgFgBIgEABg");
	this.shape_117.setTransform(228.925,28.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgKAdQgDgCgDgDQgDgCgBgFQgCgEAAgGQAAgFACgEQABgDADgEQADgCADgCIAIgBQAEAAADACIAGAEIAAgWIAMAAIAAA8IgMAAIAAgHIgGAGQgDACgEAAIgIgCgAgDgDIgDACIgDAEIgBAEIABAGIADADIADADIADABIAEgBIAEgDIACgDIABgGIgBgEIgCgEIgEgCIgEgBIgDABg");
	this.shape_118.setTransform(223.425,27.45);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgIAVQgFgBgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgDQADgEAFgBQAEgCAEAAQAFAAAFACQAEACADACQADADACAFQACAEAAAEQAAAFgCAEIgFAIQgDADgEABQgFACgFAAQgEAAgEgCgAgEgKQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgDADIAAAEIAAAEIADAFIADACIAEABIAFgBIAEgCIACgEIABgFIgBgEIgDgDIgDgDIgFgBIgEABg");
	this.shape_119.setTransform(218.125,28.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgMAXIAAgrIAMAAIAAAIQABgEAEgDQADgDAFABIAAAMIAAAAQgGAAgEAFQgDADAAAHIAAARg");
	this.shape_120.setTransform(213.925,28.15);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgWAdIAAg4IAMAAIAAAGIAGgFQADgCAEAAIAIABQADACADADIAEAHQACAFAAAFQAAAFgCAEIgEAHQgDADgDABQgEACgEAAQgEAAgDgCIgGgEIAAASgAgDgQIgEACIgCAEIgBAFIABAFIACADIAEACIADABIAEgBIADgCIADgDIABgFIgBgFIgDgEIgDgCIgEgCIgDACg");
	this.shape_121.setTransform(209.425,28.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAIAXIAAgYQAAgFgCgCQgCgCgEAAQgCAAgDACQgCACAAAFIAAAYIgMAAIAAgrIAMAAIAAAGIADgDIADgCIACgCIAEAAQAHgBAEAFQAEAFAAAHIAAAcg");
	this.shape_122.setTransform(201.725,28.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgIAVQgFgBgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgDQADgEAFgBQAEgCAEAAQAFAAAFACQAEACADACQADADACAFQACAEAAAEQAAAFgCAEIgFAIQgDADgEABQgFACgFAAQgEAAgEgCgAgEgKQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgDADIAAAEIAAAEIADAFIADACIAEABIAFgBIAEgCIACgEIABgFIgBgEIgDgDIgDgDIgFgBIgEABg");
	this.shape_123.setTransform(196.475,28.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgGAVQgEgBgDgDIgFgIQgBgEAAgFIABgIIAFgHQADgEAEgBQAFgCADAAQAHAAAEACQAEACADADIgIAIIgEgDIgGgBIgDABIgDADIgCADIgBAEIABAFIACAEIAEACIADABIAGgBIAEgDIAHAHQgDADgEACQgEADgHAAQgDAAgFgCg");
	this.shape_124.setTransform(191.55,28.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgHAIQAIgBgBgHIgEAAIAAgMIAMAAIAAALQAAAHgEADQgEAEgGAAg");
	this.shape_125.setTransform(185.525,30.425);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDIgFgHQgCgEAAgGIACgIQABgEADgDQADgEAEgBQAEgCAEAAQAGAAAEACQAEACACADQADADABAFIACAIIgBABIAAACIgdAAQABAFACACQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgJQgDACgBAEIASAAQAAgDgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_126.setTransform(182.075,28.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAIAXIAAgYQAAgFgCgCQgCgCgEAAQgCAAgDACQgCACAAAFIAAAYIgMAAIAAgrIAMAAIAAAGIADgDIADgCIACgCIAEAAQAHgBAEAFQAEAFAAAHIAAAcg");
	this.shape_127.setTransform(177.075,28.15);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgIAVQgFgBgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgDQADgEAFgBQAEgCAEAAQAFAAAFACQAEACADACQADADACAFQACAEAAAEQAAAFgCAEIgFAIQgDADgEABQgFACgFAAQgEAAgEgCgAgEgKQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgDADIAAAEIAAAEIADAFIADACIAEABIAFgBIAEgCIACgEIABgFIgBgEIgDgDIgDgDIgFgBIgEABg");
	this.shape_128.setTransform(171.875,28.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgIAVQgEgCgFgDIAGgIIAHAEIAFABIAFgBIABgCIAAAAIgBgCIgCgBIgDgCIgCgBIgFgBIgEgCIgDgDIgCgFIAAgBIACgGIADgEIAFgDIAFgBIAJABIAIAFIgFAIIgGgDIgGgBIgCAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIABACIABABIACABIAEABIAEACIAFACIACADQACADAAADQAAAEgCACIgDAEIgGADIgGABQgEAAgFgCg");
	this.shape_129.setTransform(167.1,28.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgMAXIAAgrIAMAAIAAAIQABgEAEgDQADgDAFABIAAAMIAAAAQgGAAgEAFQgDADAAAHIAAARg");
	this.shape_130.setTransform(163.625,28.15);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDIgFgHQgCgEAAgGIACgIQABgEADgDQADgEAEgBQAEgCAEAAQAGAAAEACQAEACACADQADADABAFIACAIIgBABIAAACIgdAAQABAFACACQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgJQgDACgBAEIASAAQAAgDgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_131.setTransform(159.325,28.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgWAdIAAg4IAMAAIAAAGIAGgFQADgCAEAAIAIABQADACADADIAEAHQACAFAAAFQAAAFgCAEIgEAHQgDADgDABQgEACgEAAQgEAAgDgCIgGgEIAAASgAgDgQIgEACIgCAEIgBAFIABAFIACADIAEACIADABIAEgBIADgCIADgDIABgFIgBgFIgDgEIgDgCIgEgCIgDACg");
	this.shape_132.setTransform(154.175,28.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDIgFgHQgCgEAAgGIACgIQABgEADgDQADgEAEgBQAEgCAEAAQAGAAAEACQAEACACADQADADABAFIACAIIgBABIAAACIgdAAQABAFACACQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgJQgDACgBAEIASAAQAAgDgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_133.setTransform(146.475,28.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgFAeIAAg7IALAAIAAA7g");
	this.shape_134.setTransform(142.775,27.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgMAXIAAgrIAMAAIAAAIQABgEAEgDQADgDAFABIAAAMIAAAAQgGAAgEAFQgDADAAAHIAAARg");
	this.shape_135.setTransform(137.725,28.15);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDIgFgHQgCgEAAgGIACgIQABgEADgDQADgEAEgBQAEgCAEAAQAGAAAEACQAEACACADQADADABAFIACAIIgBABIAAACIgdAAQABAFACACQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgJQgDACgBAEIASAAQAAgDgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_136.setTransform(133.375,28.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgWAdIAAg4IAMAAIAAAGIAGgFQADgCAEAAIAIABQADACADADIAEAHQACAFAAAFQAAAFgCAEIgEAHQgDADgDABQgEACgEAAQgEAAgDgCIgGgEIAAASgAgDgQIgEACIgCAEIgBAFIABAFIACADIAEACIADABIAEgBIADgCIADgDIABgFIgBgFIgDgEIgDgCIgEgCIgDACg");
	this.shape_137.setTransform(128.275,28.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDIgFgHQgCgEAAgGIACgIQABgEADgDQADgEAEgBQAEgCAEAAQAGAAAEACQAEACACADQADADABAFIACAIIgBABIAAACIgdAAQABAFACACQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgJQgDACgBAEIASAAQAAgDgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_138.setTransform(120.575,28.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAIAXIAAgYQAAgFgCgCQgCgCgEAAQgCAAgDACQgCACAAAFIAAAYIgMAAIAAgrIAMAAIAAAGIADgDIADgCIACgCIAEAAQAHgBAEAFQAEAFAAAHIAAAcg");
	this.shape_139.setTransform(115.575,28.15);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgIAVQgFgBgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgDQADgEAFgBQAEgCAEAAQAFAAAFACQAEACADACQADADACAFQACAEAAAEQAAAFgCAEIgFAIQgDADgEABQgFACgFAAQgEAAgEgCgAgEgKQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgDADIAAAEIAAAEIADAFIADACIAEABIAFgBIAEgCIACgEIABgFIgBgEIgDgDIgDgDIgFgBIgEABg");
	this.shape_140.setTransform(110.375,28.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgHAVQgFgCgFgDIAFgIIAHAEIAHABIADgBIACgCIAAAAIgBgCIgCgBIgDgCIgCgBIgFgBIgEgCIgEgDIgBgFIAAgBIABgGIAEgEIAFgDIAGgBIAIABIAIAFIgFAIIgGgDIgFgBIgDAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIABACIADABIABABIADABIAGACIADACIAEADQABADAAADQAAAEgBACIgEAEIgFADIgHABQgEAAgEgCg");
	this.shape_141.setTransform(105.6,28.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgMAXIAAgrIAMAAIAAAIQABgEAEgDQADgDAFABIAAAMIAAAAQgGAAgEAFQgDADAAAHIAAARg");
	this.shape_142.setTransform(102.125,28.15);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDIgFgHQgCgEAAgGIACgIQABgEADgDQADgEAEgBQAEgCAEAAQAGAAAEACQAEACACADQADADABAFIACAIIgBABIAAACIgdAAQABAFACACQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgJQgDACgBAEIASAAQAAgDgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_143.setTransform(97.825,28.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgWAdIAAg4IAMAAIAAAGIAGgFQADgCAEAAIAIABQADACADADIAEAHQACAFAAAFQAAAFgCAEIgEAHQgDADgDABQgEACgEAAQgEAAgDgCIgGgEIAAASgAgDgQIgEACIgCAEIgBAFIABAFIACADIAEACIADABIAEgBIADgCIADgDIABgFIgBgFIgDgEIgDgCIgEgCIgDACg");
	this.shape_144.setTransform(92.675,28.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgFAeIAAgrIALAAIAAArgAgFgSIAAgLIALAAIAAALg");
	this.shape_145.setTransform(86.3,27.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgKAdQgDgCgDgDQgDgCgBgFQgCgEAAgGQAAgFACgEQABgDADgEQADgCADgCIAIgBQAEAAADACIAGAEIAAgWIAMAAIAAA8IgMAAIAAgHIgGAGQgDACgEAAIgIgCgAgDgDIgDACIgDAEIgBAEIABAGIADADIADADIADABIAEgBIAEgDIACgDIABgGIgBgEIgCgEIgEgCIgEgBIgDABg");
	this.shape_146.setTransform(82.225,27.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCIAEgEIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAABAAAAQAAABABAAQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_147.setTransform(74.725,28.225);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAAAcIgEgCIgDgFIgBgGIAAgUIgFAAIAAgKIAFAAIAAgMIALAAIAAAMIALAAIAAAKIgLAAIAAASQABAEADAAQAEAAADgCIAAALIgEACIgGAAIgEAAg");
	this.shape_148.setTransform(70.75,27.65);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAAAcIgEgCIgDgFIgBgGIAAgUIgFAAIAAgKIAFAAIAAgMIAMAAIAAAMIAKAAIAAAKIgKAAIAAASQAAAEADAAQAEAAADgCIAAALIgFACIgFAAIgEAAg");
	this.shape_149.setTransform(67.4,27.65);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCQABgDADgBIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_150.setTransform(63.325,28.225);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgHAeIAAggIgGAAIAAgKIAGAAIAAgDQgBgIAEgDQADgDAGAAIAFAAIAEABIAAAKIgDgBIgDAAQgEAAgBAFIAAACIAKAAIAAAKIgJAAIAAAgg");
	this.shape_151.setTransform(59.6,27.375);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgHAVQgEgBgDgDIgFgHQgCgEAAgGIACgIQABgEADgDQADgEAEgBQAEgCAEAAQAGAAAEACQAEACACADQADADABAFIACAIIgBABIAAACIgdAAQABAFACACQADACADAAIAGgBIAFgDIAHAGQgDADgEADQgFACgGAAQgEAAgEgCgAgFgJQgDACgBAEIASAAQAAgDgDgDQgCgDgEAAQgDAAgCADg");
	this.shape_152.setTransform(53.125,28.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAIAXIAAgYQAAgFgCgCQgCgCgEAAQgCAAgDACQgCACAAAFIAAAYIgMAAIAAgrIAMAAIAAAGIADgDIADgCIACgCIAEAAQAHgBAEAFQAEAFAAAHIAAAcg");
	this.shape_153.setTransform(48.125,28.15);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgIAVQgFgBgDgDQgDgEgCgEQgCgEAAgFQAAgEACgEQACgEADgDQADgEAFgBQAEgCAEAAQAFAAAFACQAEACADACQADADACAFQACAEAAAEQAAAFgCAEIgFAIQgDADgEABQgFACgFAAQgEAAgEgCgAgEgKQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgDADIAAAEIAAAEIADAFIADACIAEABIAFgBIAEgCIACgEIABgFIgBgEIgDgDIgDgDIgFgBIgEABg");
	this.shape_154.setTransform(42.925,28.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgFAeIAAgrIALAAIAAArgAgFgSIAAgLIALAAIAAALg");
	this.shape_155.setTransform(39.05,27.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgSAWIAAgJIAWgYIgVAAIAAgKIAkAAIAAAIIgWAZIAWAAIAAAKg");
	this.shape_156.setTransform(35.575,28.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCQABgDADgBIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_157.setTransform(30.775,28.225);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgMAXIAAgrIAMAAIAAAIQABgEAEgDQADgDAFABIAAAMIAAAAQgGAAgEAFQgDADAAAHIAAARg");
	this.shape_158.setTransform(26.975,28.15);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgPASQgEgEAAgIIAAgbIANAAIAAAXQAAAEABACQACADADAAQADAAACgDQACgCAAgEIAAgXIANAAIAAArIgNAAIAAgHIgCADIgCACIgDACIgEABQgIgBgDgEg");
	this.shape_159.setTransform(22.6,28.25);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgGAVQgEgBgDgDIgFgIQgBgEgBgFIACgIIAFgHQADgEAEgBQAEgCAFAAQAGAAAEACQAEACADADIgHAIIgFgDIgFgBIgEABIgDADIgCADIgBAEIABAFIACAEIADACIAEABIAFgBIAFgDIAIAHQgEADgEACQgEADgGAAQgFAAgEgCg");
	this.shape_160.setTransform(17.9,28.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgGAeIAAgrIAMAAIAAArgAgGgSIAAgLIANAAIAAALg");
	this.shape_161.setTransform(14.35,27.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgIAVQgFgCgEgDIAGgIIAHAEIAFABIAFgBIAAgCIAAAAIAAgCIgCgBIgDgCIgCgBIgFgBIgFgCIgCgDIgBgFIAAgBIABgGIADgEIAFgDIAFgBIAJABIAIAFIgFAIIgGgDIgGgBIgCAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIABACIABABIACABIAEABIAEACIAFACIACADQACADAAADQAAAEgCACIgDAEIgGADIgGABQgDAAgGgCg");
	this.shape_162.setTransform(11.05,28.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgIAVQgFgCgEgDIAGgIIAHAEIAFABIAFgBIABgCIAAAAIgBgCIgCgBIgDgCIgDgBIgEgBIgFgCIgCgDIgBgFIAAgBIABgGIADgEIAFgDIAFgBIAJABIAIAFIgFAIIgGgDIgGgBIgCAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIABACIABABIACABIAEABIAEACIAFACIACADQACADAAADQAAAEgCACIgDAEIgGADIgGABQgDAAgGgCg");
	this.shape_163.setTransform(7,28.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgKAWIgFgDIgDgEIgBgGIAAAAQAAgEABgCQABgDADgBIAFgCIAHgBIAFAAIAFACIAAgBQAAgEgCgCQgCgCgEAAIgHAAIgFACIgDgJIAHgDIAJgBQAKAAAFAFQAEAFAAAJIAAAZIgMAAIAAgFIgFAEQgDACgEAAIgGgBgAgFAEQgCABAAADIAAABQAAAAAAABQAAABAAAAQABABAAAAQAAAAABABIAFABQADAAADgCQACgCAAgEIAAgCIgDgBIgFgBQgDAAgCACg");
	this.shape_164.setTransform(2.525,28.225);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgHANIACgZIANAAIAAAAIgIAZg");
	this.shape_165.setTransform(-0.825,25.95);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAIAXIAAgYQAAgFgCgCQgCgCgEAAQgCAAgDACQgCACAAAFIAAAYIgMAAIAAgrIAMAAIAAAGIADgDIADgCIACgCIAEAAQAHgBAEAFQAEAFAAAHIAAAcg");
	this.shape_166.setTransform(-4.525,28.15);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgQASQgDgEAAgIIAAgbIAMAAIAAAXQAAAEACACQACADADAAQAEAAABgDQADgCAAgEIAAgXIAMAAIAAArIgMAAIAAgHIgDADIgDACIgCACIgEABQgIgBgEgEg");
	this.shape_167.setTransform(-9.6,28.25);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgHAfQgEgCgDgDIgFgHQgCgEAAgGIACgJQABgDADgDQADgDAEgCQAEgCAEAAQAGAAAEACQAEACACAEQADADABADIACAJIgBACIAAACIgdAAQABAEACACQADACADAAIAGgBIAFgDIAHAGQgDAEgEACQgFACgGAAQgEAAgEgBgAgFAAQgDABgBAFIASAAQAAgEgDgCQgCgDgEAAQgDAAgCADgAgEgRIgKgKIALgEIAIAOg");
	this.shape_168.setTransform(-16.975,27.275);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgHAIQAHgBAAgHIgEAAIAAgMIAMAAIAAALQAAAHgEADQgEAEgGAAg");
	this.shape_169.setTransform(-20.675,25.975);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgIAbQgFgCgEgEQgEgEgCgFQgCgGAAgGIAAAAQAAgFACgGQACgFAEgEQAEgEAFgDQAGgCAFAAIAIABIAGACIAFACIAEAEIgIAJIgHgEQgEgCgEAAQgDAAgDABIgEAEQgDADgBADIgCAGQABAEABADQABADADADIAEAEQADABADAAQAFAAAEgCIAHgFIAIAIIgFAFIgGADIgFACIgIABQgFAAgGgDg");
	this.shape_170.setTransform(-24.65,27.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_1_copia
	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_171.setTransform(133.75,17.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgQAjIgIgFIgFgGQgCgFAAgEIAAgBQAAgFACgFQACgEAEgBQAEgEAFgBIALgBIAIAAIAIACIAAgBQAAgFgEgEQgDgEgHABIgKABIgJACIgFgOIAMgFQAGgBAIAAQAQAAAIAIQAHAHAAAPIAAAoIgTAAIAAgIQgEAEgFADQgEACgHAAIgJgBgAgIAGQgEACAAAFQAAAEADADQADACAFAAQAGAAAEgEQAEgCAAgGIAAgDIgFgDIgHgBQgGAAgDADg");
	this.shape_172.setTransform(127.875,14.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAMAkIAAgnQAAgGgDgEQgDgDgGAAQgFAAgDADQgEAEABAGIAAAnIgUAAIAAhFIAUAAIAAAJIADgDIAFgFIAEgCIAHAAQAMAAAGAGQAGAHAAAMIAAAtg");
	this.shape_173.setTransform(120.2,14.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgFQgFgFgDgHQgDgGAAgIIAAAAQAAgHADgGQADgHAFgFQAFgFAHgDQAHgCAHAAQAIAAAHACQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAFQgFAFgHACQgHADgIAAQgHAAgHgCgAgHgRQgDACgCACQgDADgBADQgBAEAAADQAAAEABADQABAEADACQACADAEACQADABADAAQAFAAADgBIAGgEIADgGIABgIIAAAAIgBgGIgEgHIgGgEQgDgBgEAAQgDAAgEABg");
	this.shape_174.setTransform(111.775,14.775);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgNAiQgHgDgHgFIAIgOQAGAFAGACQAFACAEAAQAEAAADgCQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgDgCIgEgCIgFgCIgHgCIgHgEQgDgCgCgDQgCgEAAgFIAAAAQAAgFACgEQACgFAEgCQADgDAFgCQAEgBAFAAQAGAAAHACQAHACAGAEIgIAOIgKgFIgJgCIgEABQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIABADIADACIAEACIAFABIAIADIAHAEIAEAFQACADAAAFQAAAGgCAFQgCAEgDADQgEACgFACQgFABgFAAQgHAAgIgCg");
	this.shape_175.setTransform(104.075,14.775);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgUAkIAAhFIATAAIAAAOQACgHAGgFQAFgEAJABIAAAUIgBAAQgKAAgFAGQgGAGAAAMIAAAag");
	this.shape_176.setTransform(98.45,14.6972);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgLAiQgHgDgFgFQgFgFgDgGQgCgHAAgIIAAAAQAAgHACgGQADgHAEgFQAFgFAGgDQAHgCAGAAQAJAAAGADQAHADAEAFQAEAFACAHQACAHAAAGIAAABIAAACIAAADIgwAAQACAGAEAEQAFADAGAAQAEAAAEgBQAEgCAFgEIALAKQgFAGgHAEQgHADgKAAQgHAAgGgCgAgJgQQgEAFgBAGIAdAAQgBgGgEgEQgDgFgHAAQgFAAgEAEg");
	this.shape_177.setTransform(91.475,14.775);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgkAuIAAhaIAUAAIAAAKQAEgFAFgDQAFgDAHAAQAGAAAGACQAFADAFAEQAEAEADAIQADAGAAAJQAAAJgDAFQgDAIgEAEQgFAEgFADQgGACgGAAQgHAAgFgDQgGgDgDgEIAAAegAgGgbQgDABgCADQgDADgBADQgBAEAAAEQAAAFABADQABADADACQACADADABQADACADAAQADAAADgCQADgBADgDQACgCABgDQACgDAAgFQAAgEgCgEQgBgDgCgDQgDgDgDgBQgDgBgDgBQgDABgDABg");
	this.shape_178.setTransform(83.225,15.75);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAMAkIAAgnQAAgGgDgEQgDgDgGAAQgFAAgDADQgDAEgBAGIAAAnIgTAAIAAhFIATAAIAAAJIAFgDIAEgFIAFgCIAGAAQAMAAAGAGQAGAHAAAMIAAAtg");
	this.shape_179.setTransform(70.75,14.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgJAwIAAhFIATAAIAABFgAgKgdIAAgSIAVAAIAAASg");
	this.shape_180.setTransform(64.7,13.475);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgMANQANgBgBgMIgHAAIAAgUIAUAAIAAASQAAAMgGAFQgHAGgKAAg");
	this.shape_181.setTransform(56.7,18.25);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgLAiQgHgDgFgFQgFgFgDgGQgCgHAAgIIAAAAQAAgHACgGQADgHAEgFQAFgFAGgDQAHgCAGAAQAJAAAGADQAHADAEAFQAEAFACAHQACAHAAAGIAAABIAAACIAAADIgwAAQACAGAEAEQAFADAGAAQAEAAAEgBQAEgCAFgEIALAKQgFAGgHAEQgHADgKAAQgHAAgGgCgAgJgQQgEAFgBAGIAdAAQgBgGgEgEQgDgFgHAAQgFAAgEAEg");
	this.shape_182.setTransform(51.125,14.775);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAMAkIAAgnQAAgGgDgEQgDgDgGAAQgEAAgEADQgDAEAAAGIAAAnIgUAAIAAhFIAUAAIAAAJIADgDIAFgFIAEgCIAHAAQAMAAAGAGQAGAHAAAMIAAAtg");
	this.shape_183.setTransform(43.15,14.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgFQgFgFgDgHQgDgGAAgIIAAAAQAAgHADgGQADgHAFgFQAFgFAHgDQAHgCAHAAQAIAAAHACQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAFQgFAFgHACQgHADgIAAQgHAAgHgCgAgHgRQgDACgCACQgDADgBADQgBAEAAADQAAAEABADQABAEADACQACADAEACQADABADAAQAFAAADgBIAGgEIADgGIABgIIAAAAIgBgGIgEgHIgGgEQgDgBgEAAQgDAAgEABg");
	this.shape_184.setTransform(34.725,14.775);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgJAwIAAhFIATAAIAABFgAgJgdIAAgSIATAAIAAASg");
	this.shape_185.setTransform(28.4,13.475);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgeAjIAAgOIAjgnIghAAIAAgQIA6AAIAAAOIgjAnIAjAAIAAAQg");
	this.shape_186.setTransform(22.8,14.75);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgZAdQgGgHAAgMIAAgtIATAAIAAAmQAAAHAEAEQADADAFAAQAFAAAEgDQADgEAAgHIAAgmIAUAAIAABFIgUAAIAAgKIgDAFIgFADIgEADIgHABQgLAAgHgHg");
	this.shape_187.setTransform(15.05,14.825);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgJAwIAAhfIATAAIAABfg");
	this.shape_188.setTransform(9.075,13.475);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgFQgFgFgDgHQgDgGAAgIIAAAAQAAgHADgGQADgHAFgFQAFgFAHgDQAHgCAHAAQAIAAAHACQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAFQgFAFgHACQgHADgIAAQgHAAgHgCgAgHgRQgDACgCACQgDADgBADQgBAEAAADQAAAEABADQABAEADACQACADAEACQADABADAAQAFAAADgBIAGgEIADgGIABgIIAAAAIgBgGIgEgHIgGgEQgDgBgEAAQgDAAgEABg");
	this.shape_189.setTransform(2.775,14.775);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgNAiQgHgDgHgFIAIgOQAGAFAGACQAFACAEAAQAEAAADgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgDgCIgEgCIgFgCIgHgCIgHgEQgDgCgCgDQgCgEAAgFIAAAAQAAgFACgEQACgFAEgCQADgDAFgCQAEgBAFAAQAGAAAHACQAHACAGAEIgIAOIgKgFIgJgCIgEABQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIABADIADACIAEACIAFABIAIADIAHAEIAEAFQACADAAAFQAAAGgCAFQgCAEgDADQgEACgFACQgFABgFAAQgHAAgIgCg");
	this.shape_190.setTransform(-4.875,14.775);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgQAjIgIgFIgFgGQgCgFAAgEIAAgBQAAgFACgFQACgEAEgBQAEgEAFgBIALgBIAIAAIAIACIAAgBQAAgFgEgEQgDgEgHABIgKABIgJACIgFgOIAMgFQAGgBAIAAQAQAAAIAIQAHAHAAAPIAAAoIgTAAIAAgIQgEAEgFADQgEACgHAAIgJgBgAgIAGQgEACAAAFQAAAEADADQADACAFAAQAGAAAEgEQAEgCAAgGIAAgDIgFgDIgHgBQgGAAgDADg");
	this.shape_191.setTransform(-16.025,14.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AggAuIAAhbIAUAAIAABJIAtAAIAAASg");
	this.shape_192.setTransform(-23.375,13.675);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape_193.setTransform(134.95,4.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgIAwIAAhFIASAAIAABFgAgJgdIAAgSIAUAAIAAASg");
	this.shape_194.setTransform(131.15,0.775);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAMAkIAAgnQAAgGgDgEQgDgEgGABQgEgBgEAEQgDAEgBAGIAAAnIgTAAIAAhFIATAAIAAAJIAFgDIAEgFIAFgCIAGAAQAMAAAGAGQAGAHAAAMIAAAtg");
	this.shape_195.setTransform(125.2,2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgFQgFgFgDgHQgDgGAAgIIAAAAQAAgHADgGQADgHAFgFQAFgFAHgDQAHgCAHAAQAIAAAHACQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAFQgFAFgHACQgHADgIAAQgHAAgHgCgAgHgRQgDACgCACQgDADgBADQgBAEAAADQAAAEABADQABAEADACQACADAEACQADABADAAQAFAAADgBIAGgEIADgGIABgIIAAAAIgBgGIgEgHIgGgEQgDgBgEAAQgDAAgEABg");
	this.shape_196.setTransform(116.775,2.075);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgIAwIAAhFIASAAIAABFgAgJgdIAAgSIAUAAIAAASg");
	this.shape_197.setTransform(110.45,0.775);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgdAjIAAgOIAjgnIgiAAIAAgQIA6AAIAAAOIgjAnIAjAAIAAAQg");
	this.shape_198.setTransform(104.9,2.05);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgQAjIgIgFIgFgHQgCgDAAgGIAAAAQAAgGACgEQACgEAEgBQAEgEAFgBIALgBIAIABIAIABIAAgBQAAgFgEgEQgDgEgHABIgKABIgJACIgFgPIAMgEQAGgBAIAAQAQAAAIAIQAHAHAAAPIAAAoIgTAAIAAgIQgEAEgFADQgEACgHAAIgJgBgAgIAGQgEACAAAFQAAAEADADQADACAFAAQAGAAAEgDQAEgDAAgGIAAgDIgFgDIgHgBQgGABgDACg");
	this.shape_199.setTransform(97.125,2.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgUAkIAAhFIATAAIAAAOQACgHAGgFQAFgEAJABIAAAUIgBAAQgKAAgGAGQgEAGgBAMIAAAag");
	this.shape_200.setTransform(91,1.9972);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgZAdQgGgHAAgMIAAgtIAUAAIAAAmQAAAHADAEQADADAFAAQAGAAADgDQADgEAAgHIAAgmIAUAAIAABFIgUAAIAAgKIgEAFIgEADIgFADIgHABQgKAAgHgHg");
	this.shape_201.setTransform(83.95,2.125);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgJAhQgIgCgEgFQgFgFgDgHQgCgGgBgIIAAAAQABgHACgGQADgHAFgFQAEgFAIgDQAGgCAHAAQAKAAAGADQAHADAFAFIgMANIgHgFQgEgCgFAAQgEAAgCABIgFAEQgCADgCADQgBAEAAADQAAAEABADQACAEACADQACACADACQACABAFAAQAFAAADgCIAIgFIALAMQgFAFgGAEQgHADgKAAQgHAAgGgDg");
	this.shape_202.setTransform(76.25,2.075);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgIAwIAAhFIASAAIAABFgAgJgdIAAgSIATAAIAAASg");
	this.shape_203.setTransform(70.5,0.775);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgNAiQgHgDgHgFIAIgOQAGAFAGACQAFACAEAAQAEAAADgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgDgCIgEgCIgFgCIgHgCIgHgEQgDgCgCgDQgCgEAAgFIAAAAQAAgFACgEQACgFAEgCQADgDAFgCQAEgBAFAAQAGAAAHACQAHACAGAEIgIAOIgKgFIgJgCIgEABQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIABADIADACIAEACIAFABIAIADIAHAEIAEAFQACADAAAFQAAAGgCAFQgCAEgDADQgEACgFACQgFABgFAAQgHAAgIgCg");
	this.shape_204.setTransform(65.225,2.075);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgNAiQgHgDgHgFIAIgOQAGAFAGACQAFACAEAAQAEAAADgCQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgDgCIgEgCIgFgCIgHgCIgHgEQgDgCgCgDQgCgEAAgFIAAAAQAAgFACgEQACgFAEgCQADgDAFgCQAEgBAFAAQAGAAAHACQAHACAGAEIgIAOIgKgFIgJgCIgEABQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIABADIADACIAEACIAFABIAIADIAHAEIAEAFQACADAAAFQAAAGgCAFQgCAEgDADQgEACgFACQgFABgFAAQgHAAgIgCg");
	this.shape_205.setTransform(58.675,2.075);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AAcAuIgJgUIgmAAIgIAUIgVAAIAohbIASAAIAnBbgAgMAIIAYAAIgMgdg");
	this.shape_206.setTransform(50.4,0.95);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgQAjIgIgFIgFgHQgCgDAAgGIAAAAQAAgGACgEQACgEAEgBQAEgEAFgBIALgBIAIABIAIABIAAgBQAAgFgEgEQgDgEgHABIgKABIgJACIgFgPIAMgEQAGgBAIAAQAQAAAIAIQAHAHAAAPIAAAoIgTAAIAAgIQgEAEgFADQgEACgHAAIgJgBgAgIAGQgEACAAAFQAAAEADADQADACAFAAQAGAAAEgDQAEgDAAgGIAAgDIgFgDIgHgBQgGABgDACg");
	this.shape_207.setTransform(37.275,2.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAiAkIAAgnQAAgGgDgEQgDgEgGABQgGgBgDAEQgDAEAAAGIAAAnIgTAAIAAgnQAAgGgDgEQgDgEgGABQgFgBgDAEQgEAEAAAGIAAAnIgTAAIAAhFIATAAIAAAJIAEgDIAFgFIAFgCIAHAAQAHgBAFADQAEADADAFQAEgFAGgDQAGgDAHABQALAAAGAGQAGAGAAANIAAAtg");
	this.shape_208.setTransform(27.425,2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgQAjIgIgFIgFgHQgCgDAAgGIAAAAQAAgGACgEQACgEAEgBQAEgEAFgBIALgBIAIABIAIABIAAgBQAAgFgEgEQgDgEgHABIgKABIgJACIgFgPIAMgEQAGgBAIAAQAQAAAIAIQAHAHAAAPIAAAoIgTAAIAAgIQgEAEgFADQgEACgHAAIgJgBgAgIAGQgEACAAAFQAAAEADADQADACAFAAQAGAAAEgDQAEgDAAgGIAAgDIgFgDIgHgBQgGABgDACg");
	this.shape_209.setTransform(17.125,2.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgkAuIAAhaIAUAAIAAAKQAEgFAFgDQAFgDAHAAQAGAAAGACQAFACAFAFQAEAEADAIQADAGAAAJQAAAJgDAFQgDAHgEAFQgFAEgFADQgGACgGAAQgHABgFgEQgGgDgDgEIAAAegAgGgbQgDABgCADQgDADgBADQgBADAAAFQAAAEABAEQABADADADQACACADABQADABADAAQADAAADgBQADgBADgCQACgDABgDQACgEAAgEQAAgFgCgDQgBgDgCgDQgDgDgDgBQgDgBgDgBQgDABgDABg");
	this.shape_210.setTransform(9.225,3.05);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgZAdQgGgHAAgMIAAgtIAUAAIAAAmQgBAHAEAEQADADAFAAQAFAAAEgDQADgEAAgHIAAgmIAUAAIAABFIgUAAIAAgKIgEAFIgEADIgFADIgHABQgLAAgGgHg");
	this.shape_211.setTransform(0.6,2.125);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgOAiQgHgDgFgFQgFgFgDgHQgDgGAAgIIAAAAQAAgHADgGQADgHAFgFQAFgFAHgDQAHgCAHAAQAIAAAHACQAHADAFAFQAFAFADAGQADAHAAAHQAAAHgDAHQgDAHgFAFQgFAFgHACQgHADgIAAQgHAAgHgCgAgHgRQgDACgCACQgDADgBADQgBAEAAADQAAAEABADQABAEADACQACADAEACQADABADAAQAFAAADgBIAGgEIADgGIABgIIAAAAIgBgGIgEgHIgGgEQgDgBgEAAQgDAAgEABg");
	this.shape_212.setTransform(-7.775,2.075);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgUAkIAAhFIAUAAIAAAOQACgHAFgFQAFgEAJABIAAAUIgBAAQgKAAgGAGQgEAGAAAMIAAAag");
	this.shape_213.setTransform(-14.55,1.9972);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgOAsQgJgEgGgGQgGgGgEgJQgEgIAAgLQAAgJAEgIQAEgJAGgGQAGgHAJgDQAJgEAKAAIAKABIAKACIAIAEIAHAFIgNAQIgEgEIgGgDIgGgCIgHgBQgFAAgEADQgGACgDAEQgDAEgDAFQgBAFAAAFIAAAAQAAAGABAGQADAFADAEQAEAEAFACQAFACAFAAQAMAAAHgFIAAgNIgUAAIAAgRIAnAAIAAAnQgGAGgLAEQgJAEgMAAQgKAAgJgDg");
	this.shape_214.setTransform(-22.7,0.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-29.9,-6.1,300,57), null);


(lib.sfuma4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#116350","rgba(17,99,80,0.455)","rgba(17,99,80,0)"],[0,0.722,1],-385,2,159.1,2).s().p("Eg8JhFYMB4TgAoMAAACLZMh4TAAog");
	this.shape.setTransform(1056.65,448.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sfuma4, new cjs.Rectangle(671.7,0,770,896.2), null);


(lib.sfuma3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#01462B","rgba(17,99,80,0.455)","rgba(17,99,80,0)"],[0.294,0.722,1],-313.9,2,129.7,2).s().p("EgxChFYMBiFgAoMAAACLZMhiFAAog");
	this.shape.setTransform(1175.075,448.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sfuma3, new cjs.Rectangle(861.2,0,627.8,896.2), null);


(lib.sfuma2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#01462B","rgba(1,70,43,0.455)","rgba(1,70,43,0)"],[0,0.722,1],-254.4,-288.7,103.2,121.3).s().p("EhcTAAsMBpDhbnMBPjBaQMhpCBbng");
	this.shape.setTransform(1326.35,582.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sfuma2, new cjs.Rectangle(735.6,0,1181.5,1164.1), null);


(lib.sfuma1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#01462B","rgba(1,70,43,0.455)","rgba(1,70,43,0)"],[0,0.722,1],-313.3,302.7,132.5,-123.5).s().p("Eh+SAD0MBh4hemMCatBW+Mhh4Beng");
	this.shape.setTransform(1477.075,581.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sfuma1, new cjs.Rectangle(668.8,0,1616.6000000000001,1162.3), null);


(lib.ombra_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.ombra();
	this.instance.setTransform(-275,-281,0.6584,0.6584);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ombra_1, new cjs.Rectangle(-275,-281,258.1,46.80000000000001), null);


(lib.NOTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAYIgCgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAEABIADAAIADgBIAAAFIgDABIgDAAIgFAAg");
	this.shape.setTransform(95.75,-281.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAEAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_1.setTransform(93.45,-281.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape_2.setTransform(91.675,-279.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGASIgFgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAHgCIAGgBQAHAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgGAEQgCACgFAAIgEgBgAgHACQgDACAAADIABADIACADIADABIADABIAFgBIADgCIADgDIABgEIAAgEIgFgBIgGAAQgEAAgDACg");
	this.shape_3.setTransform(88.65,-280.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWATIAAgVQABgFgDgDQgDgDgEAAIgEABIgDACIgDAEIAAAFIAAAUIgFAAIAAgVQAAgFgCgDQgDgDgEAAIgEABIgEACIgCAEIgBAFIAAAUIgFAAIAAgkIAFAAIAAAGIACgCIADgDIAEgBIADgBQAFAAADACQACACACAEIABgDIADgDIAEgBIAEgBQAHAAADAEQAEAEAAAHIAAAWg");
	this.shape_4.setTransform(83.35,-280.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHASIgEgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAGgCIAGgBQAIAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgFAEQgEACgDAAIgGgBgAgHACQgDACABADIAAADIACADIADABIAEABIADgBIAFgCIACgDIABgEIAAgEIgEgBIgHAAQgEAAgDACg");
	this.shape_5.setTransform(77.8,-280.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAGAAIAAAHIACgDIADgCIAEgCIAEAAIAGABIAGADIAEAHQACADAAAFQAAAEgCADIgEAFIgGAFQgDABgDAAIgEgBIgEgBIgDgDIgCgDIAAASgAgEgSIgEAEIgDADIgBAHIABAEIADAFIAEADIAEABIAFgBIAEgDIADgFIABgEIgBgHIgDgDIgEgEIgFgBIgEABg");
	this.shape_6.setTransform(73.625,-280.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHASIgEgEIgDgEIgBgGIAAgWIAFAAIAAAUQAAAGADADQADADAEAAIAEgBIADgCIADgEIABgFIAAgUIAFAAIAAAkIgFAAIAAgHIgFAGQgDACgEAAIgGgBg");
	this.shape_7.setTransform(68.95,-280.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgDgCgBgEQgBgDAAgEIABgGQABgEADgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgCADQgBAEgCACQgDADgDACQgEABgEAAQgDAAgEgBgAgEgMIgFADIgCAEIgBAFIABAFIACAFIAFADIAEABIAGgBIAEgDIADgFIABgFIgBgFIgEgEIgDgDIgGgBIgEABg");
	this.shape_8.setTransform(64.5,-280.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_9.setTransform(61.025,-280.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAYIgIgFIADgEIAGADQAEACADAAQAGAAADgEQAEgDAAgHIAAgDIgGAFQgDACgEAAIgHgBQgDgBgCgCQgDgCgBgEQgBgCgBgEQABgEABgDIAEgGIAFgDIAHgBIAEAAIADACIADACIADADIAAgHIAFAAIAAAdIgBAJQgBADgCACIgHAEIgHAAIgIAAgAgEgSIgEACIgDAFIgBAEIABAGIADADIAEADIAEABIAFgBIAEgDIADgDIACgFQgBgDgBgCIgDgFIgEgCIgFgBIgEABg");
	this.shape_10.setTransform(56.95,-280.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHASIgEgEIgDgEIgBgGIAAgWIAGAAIAAAUQgBAGADADQADADAEAAIAEgBIAEgCIACgEIABgFIAAgUIAFAAIAAAkIgFAAIAAgHIgFAGQgDACgEAAIgGgBg");
	this.shape_11.setTransform(50.35,-280.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGARQgEgBgDgCIADgEIAGAEIAFABQAEgBACgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAgBIgBgBIgCgCIgDgCIgDgBIgEgCIgDAAIgDgDIgBgFIABgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAEgBIAHABIAGADIgCAEIgGgCIgFgBQgCAAgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABACIACACIADACIACABIAFABIADABIADADIABAEIgBAFIgDADIgEACIgFABIgHgCg");
	this.shape_12.setTransform(46.425,-280.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgDgCgBgEQgBgDAAgEIABgGQABgEADgDIAGgEQAEgBADAAQAEAAADABIAHAEIAEAGIABAHQAAAEgCADQgBAEgCACQgDADgEACQgDABgEAAQgDAAgEgBgAgEgMIgFADIgCAEIgBAFIABAFIACAFIAFADIAEABIAGgBIAEgDIADgFIABgFIgBgFIgEgEIgDgDIgGgBIgEABg");
	this.shape_13.setTransform(40.3,-280.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AABAYIgDgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAEABIAEAAIACgBIAAAFIgDABIgEAAIgDAAg");
	this.shape_14.setTransform(36.55,-281.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGASIgFgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAHgCIAGgBQAHAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgGAEQgCACgFAAIgEgBgAgHACQgDACAAADIABADIACADIADABIADABIAEgBIAEgCIADgDIABgEIAAgEIgFgBIgGAAQgEAAgDACg");
	this.shape_15.setTransform(32.95,-280.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFASQgDgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAGgEQAEgBADAAIAFAAIAEACIADACIADACIgEAEIgFgEQgCgBgEAAIgEABIgFADIgCAEIgBAFIABAFQABADACACIAEADIAEABQAEAAADgBIAEgEIAEADQgDADgDACQgEACgFAAQgDAAgEgBg");
	this.shape_16.setTransform(29.025,-280.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAEAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_17.setTransform(26.05,-281.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_18.setTransform(24.225,-281.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAZIgEgBIgDgCIgCgEIAAAHIgGAAIAAgzIAGAAIAAAXIACgDIADgDIAEgCIAEAAIAGABIAGAEIAEAGQACACAAAFQAAAEgCAEIgEAGIgGAEQgDABgDAAIgEgBgAgEgFIgEADIgDADIgBAGIABAGIADAEIAEAEIAEABIAFgBIAEgEIADgEIABgGIgBgGIgDgDIgEgDIgFgBIgEABg");
	this.shape_19.setTransform(21.075,-281.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgDAZIgEgBIgDgCIgCgEIAAAHIgGAAIAAgzIAGAAIAAAXIACgDIADgDIAEgCIAEAAIAGABIAGAEIAEAGQACACAAAFQAAAEgCAEIgEAGIgGAEQgDABgDAAIgEgBgAgEgFIgEADIgDADIgBAGIABAGIADAEIAEAEIAEABIAFgBIAEgEIADgEIABgGIgBgGIgDgDIgEgDIgFgBIgEABg");
	this.shape_20.setTransform(16.375,-281.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHASIgEgEIgDgEIgBgGIAAgWIAFAAIAAAUQAAAGADADQADADAEAAIAEgBIADgCIADgEIABgFIAAgUIAFAAIAAAkIgFAAIAAgHIgFAGQgDACgEAAIgGgBg");
	this.shape_21.setTransform(11.7,-280.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAGAAIAAAHIACgDIADgCIAEgCIAEAAIAGABIAGADIAEAHQACADAAAFQAAAEgCADIgEAFIgGAFQgDABgDAAIgEgBIgEgBIgDgDIgCgDIAAASgAgEgSIgEAEIgDADIgBAHIABAEIADAFIAEADIAEABIAFgBIAEgDIADgFIABgEIgBgHIgDgDIgEgEIgFgBIgEABg");
	this.shape_22.setTransform(7.325,-280.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGASQgEgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAHgEQADgBADAAQAEAAADABIAHAEIAEAGIABAHQAAAEgCADQgBAEgDACQgCADgEACQgDABgEAAQgDAAgDgBgAgEgMIgFADIgDAEIgBAFIABAFIADAFIAFADIAEABIAFgBIAFgDIADgFIAAgFIAAgFIgDgEIgFgDIgFgBIgEABg");
	this.shape_23.setTransform(0.45,-280.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_24.setTransform(266.925,-287.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCAaIAAgkIAEAAIAAAkgAgCgSIAAgHIAFAAIAAAHg");
	this.shape_25.setTransform(263.9,-288.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPATIAAgEIAXgcIgWAAIAAgEIAeAAIAAADIgXAcIAXAAIAAAFg");
	this.shape_26.setTransform(261,-287.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgFgDgDQgDgDgFAAIgDABIgEACIgCAEIgBAFIAAAUIgFAAIAAgkIAFAAIAAAGIAFgFQADgCAEAAIAGABIAEADIADAFIABAGIAAAWg");
	this.shape_27.setTransform(256.875,-287.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_28.setTransform(252.575,-287.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgIAXIgIgEIACgEIAHAEQAEABADAAQAGAAADgDQAEgEAAgGIAAgFIgFAGQgEACgEAAIgHgBQgDgBgCgDQgCgBgCgEQgBgCgBgEQABgEABgEIAEgFIAFgEIAHgBIADABIAFABIACADIADADIAAgHIAFAAIAAAeIAAAHQgCAEgCACIgGADIgIACIgIgCgAgEgSIgEACIgDAEIgBAFIABAGIADADIAEACIAEABIAFgBIAEgCIADgDIACgFQAAgDgCgDIgDgEIgEgCIgFAAIgEAAg");
	this.shape_29.setTransform(248,-287.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AATAZIgGgNIgaAAIgGANIgFAAIAWgxIAFAAIAWAxgAgLAHIAWAAIgLgZg");
	this.shape_30.setTransform(242.975,-288.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_31.setTransform(235.975,-287.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_32.setTransform(232.625,-287.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAYIgCgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAFABIACAAIADgBIAAAFIgDABIgDAAIgFAAg");
	this.shape_33.setTransform(229.55,-288.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGASQgEgBgDgDIADgEIAGADIAFABQAEAAACgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAIgBgDIgCgCIgDgBIgDgBIgEgBIgDgBIgDgDIgBgEIABgFQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAEgBIAHABIAGADIgCAEIgGgDIgFgBQgCABgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABACIACACIADABIACABIAFACIADABIADADIABAEIgBAFIgDAEIgEACIgFAAIgHgBg");
	this.shape_34.setTransform(226.325,-287.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgCgCgCgEQgBgDAAgEIABgGQACgEACgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgCADQAAAEgDACQgDADgDACQgEABgEAAQgDAAgEgBgAgFgMIgEADIgCAEIgBAFIABAFIACAFIAEADIAFABIAGgBIAEgDIACgFIACgFIgCgFIgDgEIgDgDIgGgBIgFABg");
	this.shape_35.setTransform(222.35,-287.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgFgDgDQgDgDgFAAIgDABIgEACIgCAEIgBAFIAAAUIgFAAIAAgkIAFAAIAAAGIAFgFQADgCAEAAIAGABIAEADIADAFIABAGIAAAWg");
	this.shape_36.setTransform(217.925,-287.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_37.setTransform(211.525,-287.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_38.setTransform(208.475,-288.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGASQgEgCgDgDQgDgCAAgEQgCgDAAgEIACgGQAAgEADgDIAHgEQADgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgBADQgCAEgDACQgCADgDACQgEABgEAAQgDAAgDgBgAgFgMIgEADIgDAEIgBAFIABAFIAEAFIADADIAFABIAFgBIAFgDIACgFIABgFIgBgFIgCgEIgFgDIgFgBIgFABg");
	this.shape_39.setTransform(203.15,-287.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGASQgEgBgDgDIADgEIAGADIAFABQAEAAACgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAIgBgDIgCgCIgDgBIgDgBIgEgBIgDgBIgDgDIgBgEIABgFQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAEgBIAHABIAGADIgCAEIgGgDIgFgBQgCABgCABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABACIACACIADABIACABIAFACIADABIADADIABAEIgBAFIgDAEIgEACIgFAAIgHgBg");
	this.shape_40.setTransform(199.025,-287.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGASQgEgBgDgDIADgEIAGADIAFABQAEAAACgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAIgBgDIgCgCIgDgBIgDgBIgEgBIgDgBIgDgDIgBgEIABgFQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAEgBIAHABIAGADIgCAEIgGgDIgFgBQgCABgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABACIACACIADABIACABIAFACIADABIADADIABAEIgBAFIgDAEIgEACIgFAAIgHgBg");
	this.shape_41.setTransform(195.525,-287.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_42.setTransform(191.725,-287.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_43.setTransform(188.375,-287.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSAZIAAgwIAGAAIAAAHIACgCIADgDIAEgCIAEgBIAGABIAGAFIAEAFQACAEAAAEQAAAFgCACIgEAHIgGADQgDACgDAAIgEgBIgEgCIgDgCIgCgDIAAATgAgEgRIgEACIgDAFIgBAFIABAGIADAEIAEADIAEABIAFgBIAEgDIADgEIABgGIgBgFIgDgFIgEgCIgFgBIgEABg");
	this.shape_44.setTransform(184.575,-287.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgCgCgCgEQgBgDAAgEIABgGQACgEACgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgBADQgBAEgEACQgCADgDACQgEABgEAAQgDAAgEgBgAgFgMIgEADIgCAEIgCAFIACAFIADAFIADADIAFABIAGgBIAEgDIACgFIABgFIgBgFIgDgEIgDgDIgGgBIgFABg");
	this.shape_45.setTransform(177.7,-287.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgCATIgPglIAFAAIAMAeIAMgeIAHAAIgQAlg");
	this.shape_46.setTransform(173.35,-287.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCAaIAAgkIAFAAIAAAkgAgCgSIAAgHIAFAAIAAAHg");
	this.shape_47.setTransform(170.35,-288.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AABAYIgDgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAEABIAEAAIACgBIAAAFIgDABIgEAAIgDAAg");
	this.shape_48.setTransform(167.95,-288.325);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgHASIgEgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAGgCIAGgBQAIAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgFAEQgDACgEAAIgGgBgAgHACQgCACgBADIABADIACADIADABIADABIAFgBIADgCIADgDIABgEIAAgEIgEgBIgHAAQgEAAgDACg");
	this.shape_49.setTransform(164.4,-287.775);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAXATIAAgVQgBgFgCgDQgCgDgFAAIgEABIgDACIgCAEIgBAFIAAAUIgFAAIAAgVQAAgFgCgDQgCgDgFAAIgEABIgEACIgBAEIgBAFIAAAUIgGAAIAAgkIAGAAIAAAGIACgCIACgDIAEgBIADgBQAFAAADACQACACABAEIADgDIACgDIAEgBIAFgBQAFAAAFAEQADAEAAAHIAAAWg");
	this.shape_50.setTransform(159.1,-287.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_51.setTransform(154.475,-287.825);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgBADQgBAEgEACQgCADgDACQgEABgEAAQgDAAgEgBgAgFgMIgEADIgDAEIgBAFIABAFIAEAFIADADIAFABIAFgBIAFgDIACgFIABgFIgBgFIgCgEIgFgDIgFgBIgFABg");
	this.shape_52.setTransform(150.6,-287.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgFAaIAAgfIgFAAIAAgFIAFAAIAAgDQAAgGADgDQACgDAFAAIADAAIADABIAAAEIgDAAIgCgBQgGAAAAAJIAAACIALAAIAAAFIgLAAIAAAfg");
	this.shape_53.setTransform(147.125,-288.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgFgDgDQgDgDgFAAIgDABIgEACIgCAEIgBAFIAAAUIgFAAIAAgkIAFAAIAAAGIAFgFQADgCAEAAIAGABIAEADIADAFIABAGIAAAWg");
	this.shape_54.setTransform(143.575,-287.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgCAZIAAgxIAFAAIAAAxg");
	this.shape_55.setTransform(140.325,-288.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAAAYIgCgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAFABIACAAIADgBIAAAFIgDABIgDAAIgFAAg");
	this.shape_56.setTransform(135.7,-288.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_57.setTransform(132.225,-287.775);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgIAYQgFgCgEgEIADgFIAHAGQAFABAEABQAFAAADgCQADgDAAgEIgBgDIgCgDIgDgCIgHgBIgHgCIgEgDIgEgDIgBgGIABgFQABgDADgCIAFgCIAGgBQAFAAAEABQAEABAEADIgDAFIgHgFIgHgBIgEABIgDACIgCADIgBACIABAEIABADIAFABIAFACQAIACAFADQADACAAAHIgBAFIgDAFIgGACIgHABQgEAAgFgBg");
	this.shape_58.setTransform(127.85,-288.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_59.setTransform(122.525,-288.55);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgCAaIAAgkIAFAAIAAAkgAgCgSIAAgHIAFAAIAAAHg");
	this.shape_60.setTransform(120.7,-288.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_61.setTransform(115.575,-287.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_62.setTransform(112.225,-287.825);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_63.setTransform(108.525,-287.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgIAXIgIgEIADgEIAHAEQADABADAAQAGAAAEgDQADgEAAgGIAAgFIgGAGQgDACgEAAIgGgBQgEgBgCgDQgDgBgBgEQgCgCAAgEQAAgEACgEIAEgFIAGgEIAGgBIAEABIADABIAEADIACADIAAgHIAGAAIAAAeIgCAHQgBAEgDACIgGADIgHACIgIgCgAgEgSIgEACIgDAEIgBAFIABAGIADADIAEACIAEABIAFgBIAEgCIADgDIABgFQAAgDgBgDIgDgEIgEgCIgFAAIgEAAg");
	this.shape_64.setTransform(103.95,-287.25);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIAXIgIgEIADgEIAGAEQAEABADAAQAGAAADgDQAEgEAAgGIAAgFIgGAGQgDACgEAAIgHgBQgDgBgCgDQgDgBgBgEQgBgCgBgEQABgEABgEIAEgFIAFgEIAHgBIAEABIADABIADADIADADIAAgHIAFAAIAAAeIgBAHQgBAEgCACIgHADIgHACIgIgCgAgEgSIgEACIgDAEIgBAFIABAGIADADIAEACIAEABIAFgBIAEgCIADgDIACgFQgBgDgBgDIgDgEIgEgCIgFAAIgEAAg");
	this.shape_65.setTransform(99.25,-287.25);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_66.setTransform(94.975,-287.775);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_67.setTransform(91.925,-288.55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_68.setTransform(86.775,-287.775);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgFgDgDQgDgDgFAAIgDABIgEACIgCAEIgBAFIAAAUIgFAAIAAgkIAFAAIAAAGIAFgFQADgCAEAAIAGABIAEADIADAFIABAGIAAAWg");
	this.shape_69.setTransform(82.525,-287.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgGASQgEgCgDgDQgDgCAAgEQgCgDAAgEIACgGQAAgEADgDIAHgEQADgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgBADQgCAEgDACQgCADgDACQgEABgEAAQgDAAgDgBgAgFgMIgEADIgDAEIgBAFIABAFIAEAFIADADIAFABIAFgBIAFgDIACgFIABgFIgBgFIgCgEIgFgDIgFgBIgFABg");
	this.shape_70.setTransform(78.05,-287.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgCAaIAAgkIAEAAIAAAkgAgCgSIAAgHIAFAAIAAAHg");
	this.shape_71.setTransform(74.85,-288.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgPATIAAgEIAYgcIgXAAIAAgEIAeAAIAAADIgYAcIAYAAIAAAFg");
	this.shape_72.setTransform(71.95,-287.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCAaIAAgkIAFAAIAAAkgAgCgSIAAgHIAFAAIAAAHg");
	this.shape_73.setTransform(69.1,-288.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_74.setTransform(66.925,-287.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgFASQgDgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAGgEQAEgBADAAIAFAAIAEACIADACIADACIgEAEIgFgEQgCgBgEAAIgEABIgFADIgCAEIgBAFIABAFQABADACACIAEADIAEABQAEAAADgBIAEgEIAEADQgDADgDACQgEACgFAAQgDAAgEgBg");
	this.shape_75.setTransform(63.275,-287.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGASQgEgBgDgDIADgEIAGADIAFABQAEAAACgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIgBgDIgCgCIgDgBIgDgBIgEgBIgDgBIgDgDIgBgEIABgFQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAEgBIAHABIAGADIgCAEIgGgDIgFgBQgCABgCABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABACIACACIADABIACABIAFACIADABIADADIABAEIgBAFIgDAEIgEACIgFAAIgHgBg");
	this.shape_76.setTransform(59.425,-287.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgGASQgEgCgDgDQgDgCAAgEQgCgDAAgEIACgGQAAgEADgDIAHgEQADgBADAAQAEAAADABIAHAEIAEAGIABAHQAAAEgBADQgCAEgDACQgCADgEACQgDABgEAAQgDAAgDgBgAgFgMIgEADIgDAEIgBAFIABAFIAEAFIADADIAFABIAFgBIAFgDIADgFIAAgFIAAgFIgDgEIgFgDIgFgBIgFABg");
	this.shape_77.setTransform(55.45,-287.775);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAAAYIgCgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAFABIADAAIACgBIAAAFIgDABIgEAAIgEAAg");
	this.shape_78.setTransform(51.7,-288.325);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAAAYIgCgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAFABIACAAIADgBIAAAFIgDABIgDAAIgFAAg");
	this.shape_79.setTransform(48.85,-288.325);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgGASQgEgCgDgDQgDgCAAgEQgCgDAAgEIACgGQAAgEADgDIAHgEQADgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgBADQgCAEgDACQgCADgDACQgEABgEAAQgDAAgDgBgAgFgMIgEADIgDAEIgBAFIABAFIAEAFIADADIAFABIAFgBIAFgDIACgFIABgFIgBgFIgCgEIgFgDIgFgBIgFABg");
	this.shape_80.setTransform(45.2,-287.775);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgGASQgEgBgDgDIADgEIAGADIAFABQAEAAACgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAAAIgBgDIgCgCIgDgBIgDgBIgEgBIgDgBIgDgDIgBgEIABgFQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAEgBIAHABIAGADIgCAEIgGgDIgFgBQgCABgCABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABACIACACIADABIACABIAFACIADABIADADIABAEIgBAFIgDAEIgEACIgFAAIgHgBg");
	this.shape_81.setTransform(41.075,-287.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHASIgEgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAGgCIAGgBQAIAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgFAEQgEACgDAAIgGgBgAgHACQgDACABADIAAADIACADIADABIAEABIADgBIAFgCIACgDIABgEIAAgEIgEgBIgHAAQgEAAgDACg");
	this.shape_82.setTransform(35.05,-287.775);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_83.setTransform(32.225,-288.55);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_84.setTransform(30.375,-288.55);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_85.setTransform(27.375,-287.775);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgHAZIgFgEQgCgCgCgEQgCgDABgFQgBgEACgDIAEgGIAFgEIAHgBIAEABIAEACIADACIACACIAAgWIAGAAIAAA0IgGAAIAAgIIgCADIgDADIgFACIgDABQgEgBgDgBgAgEgFIgEADIgDADIgBAGIABAGIADAFIAEACIAEABIAFgBIAFgCIACgFIABgGIgBgGIgCgDIgFgDIgFgBIgEABg");
	this.shape_86.setTransform(22.8,-288.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgHASIgEgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAGgCIAGgBQAIAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgFAEQgEACgDAAIgGgBgAgHACQgDACABADIAAADIACADIADABIAEABIADgBIAFgCIACgDIABgEIAAgEIgEgBIgHAAQgEAAgDACg");
	this.shape_87.setTransform(16.25,-287.775);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAXATIAAgVQAAgFgDgDQgDgDgEAAIgEABIgDACIgCAEIgCAFIAAAUIgDAAIAAgVQgBgFgCgDQgCgDgFAAIgEABIgDACIgCAEIgBAFIAAAUIgGAAIAAgkIAGAAIAAAGIACgCIACgDIAEgBIADgBQAFAAADACQACACABAEIADgDIADgDIADgBIAFgBQAGAAAEAEQADAEAAAHIAAAWg");
	this.shape_88.setTransform(10.95,-287.825);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgCAaIAAgkIAEAAIAAAkgAgCgSIAAgHIAFAAIAAAHg");
	this.shape_89.setTransform(6.7,-288.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_90.setTransform(4.525,-287.825);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgSAZIAAgxIASAAQAEAAAEACQADAAACACIAEAGQACADAAADQAAAEgCADIgEAFIgGACIgHABIgMAAIAAASgAgMADIAMAAIAFgBIAEgCQABAAAAAAQABgBAAAAQAAgBAAAAQABAAAAgBIABgFQAAgFgEgDQgDgDgGAAIgMAAg");
	this.shape_91.setTransform(0.725,-288.45);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgCAEIAAgHIAFAAIAAAHg");
	this.shape_92.setTransform(171.475,-293.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAEAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_93.setTransform(169.7,-295.65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_94.setTransform(167.825,-295.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgHASIgEgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAGgCIAGgBQAIAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgFAEQgEACgDAAIgGgBgAgHACQgDACABADIAAADIACADIADABIAEABIADgBIAFgCIACgDIABgEIAAgEIgEgBIgHAAQgEAAgDACg");
	this.shape_95.setTransform(164.75,-294.925);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgFgDgDQgDgDgFAAIgDABIgEACIgCAEIgBAFIAAAUIgFAAIAAgkIAFAAIAAAGIAFgFQADgCAEAAIAGABIAEADIADAFIABAGIAAAWg");
	this.shape_96.setTransform(160.675,-294.975);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgCgCgCgEQgBgDAAgEIABgGQACgEACgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgCADQAAAEgDACQgDADgDACQgEABgEAAQgDAAgEgBgAgFgMIgEADIgCAEIgBAFIABAFIADAFIADADIAFABIAGgBIAEgDIACgFIACgFIgCgFIgDgEIgDgDIgGgBIgFABg");
	this.shape_97.setTransform(156.2,-294.925);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_98.setTransform(153,-295.65);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgPASIAAgDIAXgbIgWAAIAAgGIAeAAIAAAEIgYAcIAYAAIAAAEg");
	this.shape_99.setTransform(150.1,-294.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgCgCgCgEQgBgDAAgEIABgGQACgEACgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgCADQAAAEgDACQgDADgDACQgEABgEAAQgDAAgEgBgAgFgMIgEADIgCAEIgBAFIABAFIACAFIAEADIAFABIAGgBIAEgDIACgFIACgFIgCgFIgDgEIgDgDIgGgBIgFABg");
	this.shape_100.setTransform(145.85,-294.925);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAXATIAAgVQgBgFgCgDQgCgDgFAAIgEABIgDACIgCAEIgBAFIAAAUIgFAAIAAgVQAAgFgCgDQgCgDgFAAIgEABIgEACIgBAEIgBAFIAAAUIgGAAIAAgkIAGAAIAAAGIABgCIADgDIAEgBIADgBQAFAAADACQACACABAEIADgDIACgDIAEgBIAFgBQAFAAAEAEQAEAEAAAHIAAAWg");
	this.shape_101.setTransform(140.2,-294.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgGASQgEgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAHgEQADgBADAAQAEAAADABIAHAEIAEAGIABAHQAAAEgCADQgBAEgDACQgCADgEACQgDABgEAAQgDAAgDgBgAgEgMIgFADIgDAEIgBAFIABAFIADAFIAFADIAEABIAFgBIAFgDIADgFIAAgFIAAgFIgDgEIgFgDIgFgBIgEABg");
	this.shape_102.setTransform(134.55,-294.925);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_103.setTransform(131.025,-294.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAGAAIAAAIIACgEIADgCIAEgCIAEAAIAGABIAGADIAEAHQACADAAAFQAAAEgCADIgEAFIgGAFQgDABgDAAIgEgBIgEgBIgDgDIgCgDIAAASgAgEgSIgEAEIgDADIgBAHIABAEIADAFIAEADIAEABIAFgBIAEgDIADgFIABgEIgBgHIgDgDIgEgEIgFgBIgEABg");
	this.shape_104.setTransform(127.175,-294.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgHAaIgEgCIgDgEIgBgFIABgFIADgEIAFgCIAGgBIAGAAIAFACIAAgCQAAgEgDgCQgDgDgFAAIgFABIgFACIgCgEIAHgDIAFgBQAIAAAEAEQAEAEAAAGIAAAXIgFAAIAAgGIgFAFQgEACgDAAIgGgBgAgHAJQgCACgBAEIABADIACACIADACIADAAIAFgBIADgCIADgDIABgEIAAgDIgFgBIgGgBQgEAAgDACgAAAgQIgIgHIAGgDIAGAKg");
	this.shape_105.setTransform(120.4,-295.675);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AABAYIgDgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAEABIADAAIADgBIAAAFIgDABIgEAAIgDAAg");
	this.shape_106.setTransform(117,-295.475);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAEAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_107.setTransform(114.7,-295.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_108.setTransform(112.875,-295.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgGASIgFgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAHgCIAGgBQAHAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgGAEQgCACgFAAIgEgBgAgHACQgDACAAADIABADIACADIADABIADABIAFgBIADgCIADgDIABgEIAAgEIgFgBIgGAAQgEAAgDACg");
	this.shape_109.setTransform(109.8,-294.925);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgFgDgDQgDgDgFAAIgDABIgEACIgCAEIgBAFIAAAUIgFAAIAAgkIAFAAIAAAGIAFgFQADgCAEAAIAGABIAEADIADAFIABAGIAAAWg");
	this.shape_110.setTransform(105.675,-294.975);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_111.setTransform(102.6,-295.65);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgFAaIAAgfIgFAAIAAgEIAFAAIAAgEQAAgGADgDQACgDAFAAIADAAIADAAIAAAGIgDgBIgCAAQgGAAAAAHIAAAEIALAAIAAAEIgLAAIAAAfg");
	this.shape_112.setTransform(100.475,-295.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AALATIAAgVQAAgFgDgDQgDgDgFAAIgDABIgEACIgCAEIgBAFIAAAUIgFAAIAAgkIAFAAIAAAGIAFgFQADgCAEAAIAGABIAEADIADAFIABAGIAAAWg");
	this.shape_113.setTransform(94.775,-294.975);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgBADQgBAEgEACQgCADgDACQgEABgEAAQgDAAgEgBgAgFgMIgEADIgDAEIgBAFIABAFIAEAFIADADIAFABIAFgBIAFgDIACgFIABgFIgBgFIgCgEIgFgDIgFgBIgFABg");
	this.shape_114.setTransform(90.3,-294.925);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgFASQgDgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAGgEQAEgBADAAIAFAAIAEACIADACIADACIgEAEIgFgEQgCgBgEAAIgEABIgFADIgCAEIgBAFIABAFQABADACACIAEADIAEABQAEAAADgBIAEgEIAEADQgDADgDACQgEACgFAAQgDAAgEgBg");
	this.shape_115.setTransform(85.975,-294.925);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgBADQgBAEgEACQgCADgDACQgEABgEAAQgDAAgEgBgAgFgMIgEADIgDAEIgBAFIABAFIAEAFIADADIAFABIAFgBIAFgDIACgFIABgFIgBgFIgCgEIgFgDIgFgBIgFABg");
	this.shape_116.setTransform(79.5,-294.925);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_117.setTransform(76.3,-295.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgJATIAAgkIAFAAIAAAKIADgFIACgDIAEgCIAFgBIAAAGIAAAAIgGABIgEADIgCAGQgCACAAAEIAAAPg");
	this.shape_118.setTransform(74.125,-294.975);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgHASIgEgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAGgCIAGgBQAIAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgFAEQgDACgEAAIgGgBgAgHACQgCACgBADIABADIACADIADABIADABIAFgBIADgCIADgDIABgEIAAgEIgEgBIgHAAQgEAAgDACg");
	this.shape_119.setTransform(70.35,-294.925);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAAAYIgCgCIgCgDIgBgFIAAgVIgFAAIAAgFIAFAAIAAgLIAFAAIAAALIALAAIAAAFIgLAAIAAAUQAAAEABABIAFABIACAAIADgBIAAAFIgDABIgDAAIgFAAg");
	this.shape_120.setTransform(66.95,-295.475);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_121.setTransform(64.7,-295.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgFASQgDgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAGgEQAEgBADAAIAFAAIAEACIADACIADACIgEAEIgFgEQgCgBgEAAIgEABIgFADIgCAEIgBAFIABAFQABADACACIAEADIAEABQAEAAADgBIAEgEIAEADQgDADgDACQgEACgFAAQgDAAgEgBg");
	this.shape_122.setTransform(61.725,-294.925);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAEAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_123.setTransform(58.8,-295.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgCAaIAAgzIAFAAIAAAzg");
	this.shape_124.setTransform(56.925,-295.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgDAZIgEgBIgDgCIgCgDIAAAGIgGAAIAAgyIAGAAIAAAWIACgDIADgDIAEgCIAEAAIAGABIAGAEIAEAGQACACAAAFQAAAEgCAEIgEAGIgGAEQgDABgDAAIgEgBgAgEgFIgEADIgDADIgBAGIABAGIADAEIAEAEIAEABIAFgBIAEgEIADgEIABgGIgBgGIgDgDIgEgDIgFgBIgEABg");
	this.shape_125.setTransform(53.775,-295.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgDAZIgEgBIgDgCIgCgDIAAAGIgGAAIAAgyIAGAAIAAAWIACgDIADgDIAEgCIAEAAIAGABIAGAEIAEAGQACACAAAFQAAAEgCAEIgEAGIgGAEQgDABgDAAIgEgBgAgEgFIgEADIgDADIgBAGIABAGIADAEIAEAEIAEABIAFgBIAEgEIADgEIABgGIgBgGIgDgDIgEgDIgFgBIgEABg");
	this.shape_126.setTransform(49.075,-295.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgHASIgEgEIgDgEIgBgGIAAgWIAGAAIAAAUQAAAGACADQADADAEAAIAEgBIAEgDIACgDIABgFIAAgUIAFAAIAAAkIgFAAIAAgHIgFAGQgDACgEAAIgGgBg");
	this.shape_127.setTransform(44.4,-294.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAGAAIAAAIIACgEIADgCIAEgCIAEAAIAGABIAGADIAEAHQACADAAAFQAAAEgCADIgEAFIgGAFQgDABgDAAIgEgBIgEgBIgDgDIgCgDIAAASgAgEgSIgEAEIgDADIgBAHIABAEIADAFIAEADIAEABIAFgBIAEgDIADgFIABgEIgBgHIgDgDIgEgEIgFgBIgEABg");
	this.shape_128.setTransform(40.025,-294.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgHASQgDgCgDgDQgCgCgBgEQgCgDAAgEIACgGQABgEACgDIAGgEQAEgBADAAQAEAAAEABIAGAEIAEAGIABAHQAAAEgBADQgBAEgEACQgCADgDACQgEABgEAAQgDAAgEgBgAgFgMIgEADIgDAEIgBAFIABAFIAEAFIADADIAFABIAFgBIAFgDIACgFIABgFIgBgFIgCgEIgFgDIgFgBIgFABg");
	this.shape_129.setTransform(33.15,-294.925);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgCAZIAAgkIAFAAIAAAkgAgCgTIAAgFIAFAAIAAAFg");
	this.shape_130.setTransform(29.95,-295.65);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgIAXIgIgDIADgFIAHADQADACADAAQAGAAAEgEQADgDAAgHIAAgDIgGAFQgDACgEAAIgGgBQgEgBgCgDQgDgCgBgDQgCgCAAgEQAAgEACgDIAEgGIAGgDIAGgBIAEAAIADACIAEACIACADIAAgHIAGAAIAAAdIgCAIQgBAEgDACIgGADIgHABIgIgBgAgEgSIgEADIgDADIgBAGIABAFIADADIAEADIAEAAIAFAAIAEgDIADgDIABgFQAAgDgBgDIgDgDIgEgDIgFgBIgEABg");
	this.shape_131.setTransform(26.55,-294.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgIAXIgIgDIACgFIAHADQAEACADAAQAGAAAEgEQADgDAAgHIAAgDIgFAFQgEACgEAAIgHgBQgDgBgCgDQgCgCgCgDQgCgCABgEQgBgEACgDIAEgGIAFgDIAHgBIADAAIAFACIACACIADADIAAgHIAGAAIAAAdIgBAIQgCAEgDACIgFADIgIABIgIgBgAgEgSIgEADIgDADIgBAGIABAFIADADIAEADIAEAAIAFAAIAEgDIADgDIABgFQAAgDgBgDIgDgDIgEgDIgFgBIgEABg");
	this.shape_132.setTransform(21.9,-294.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgHASIgEgCIgDgDIgBgFIABgGIADgCIAFgDIAGAAIAGAAIAFABIAAgBQAAgFgDgDQgDgCgFAAIgFABIgFABIgCgEIAGgCIAGgBQAIAAAEAEQAEADAAAIIAAAVIgFAAIAAgFIgFAEQgEACgDAAIgGgBgAgHACQgDACABADIAAADIACADIADABIAEABIADgBIAFgCIACgDIABgEIAAgEIgEgBIgHAAQgEAAgDACg");
	this.shape_133.setTransform(17.5,-294.925);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgGARQgEAAgDgDIADgEIAGAEIAFABQAEgBACgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAgBIgBgCIgCgBIgDgCIgDgBIgEgCIgDAAIgDgDIgBgFIABgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAEgBIAHABIAGADIgCAEIgGgCIgFgBQgCAAgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIACABIADACIACAAIAFACIADABIADADIABAEIgBAFIgDADIgEACIgFABIgHgCg");
	this.shape_134.setTransform(13.725,-294.95);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgGARQgEAAgDgDIADgEIAGAEIAFABQAEgBACgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAgBAAgBIgBgCIgCgBIgDgCIgDgBIgEgCIgDAAIgDgDIgBgFIABgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEgCIAEgBIAHABIAGADIgCAEIgGgCIgFgBQgCAAgCABQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIABADIACABIADACIACAAIAFACIADABIADADIABAEIgBAFIgDADIgEACIgFABIgHgCg");
	this.shape_135.setTransform(10.225,-294.95);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgFASIgGgEIgEgGQgBgEAAgEIABgHIAEgGQACgCADgCQADgBADAAQAEAAADABQAEACACACQACADABAEIABAGIAAABIAAABIgcAAIACAFIADAEIAEADIADAAQAEAAADgBIAFgEIADADIgGAFQgEACgFAAQgDAAgDgBgAgDgNIgEADIgDAEIgBAFIAXAAIgBgFIgCgEIgEgDIgFgBIgDABg");
	this.shape_136.setTransform(6.425,-294.925);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AASAZIAAgoIgSAaIAAAAIgRgaIAAAoIgGAAIAAgxIAGAAIARAaIASgaIAGAAIAAAxg");
	this.shape_137.setTransform(1.225,-295.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NOTA, new cjs.Rectangle(-3.5,-300,286.2,24), null);


(lib.foto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.SFONDO();
	this.instance.setTransform(-259,-46,0.4474,0.4474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foto, new cjs.Rectangle(-259,-46,393.8,285.9), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak9BoIAAjPIJ7AAIAADPg");
	mask.setTransform(31.75,10.375);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00624A").s().p("AgFAlIAAg2IAUgCQAVAAgBAUQAAAJgEAGQgGAGgJAAIgMgBIAAAQgAAEgKIAAAXIALAAQALAAAAgMQAAgMgMAAIgKABgAhkARQgFgGAAgKQAAgJAFgFQAHgGAJAAQALAAAGAGQAGAFAAAJQAAAKgGAGQgGAGgLAAQgJAAgHgGgAhgABQAAANAMAAQANAAAAgNQAAgMgNAAQgMAAAAAMgACgAJQAAgLASgBIALAAIAAgBQAAgHgJAAQgHAAgIACIgBgIQAJgCAJAAQAQAAAAAPIAAAYQgNACgJAAQgQAAAAgNgACxAEQgIAAAAAFQAAAGAJAAIALgBIAAgLgAApAJQAAgLASgBIALAAIAAgBQAAgHgJAAQgIAAgIACIgBgIQAJgCAIAAQASAAAAAPIAAAYQgOACgJAAQgPAAAAgNgAA6AEQgJAAABAFQAAAGAIAAIAMgBIAAgLgAg3AHIAAgZIAKAAIAAAXQAAAJAJAAIAMgBIAAgfIAJAAIAAAmQgJACgOAAQgRAAAAgPgAi9AOQgJgIAAgNQAAgNAJgIQAJgIAPAAQALAAAIACIgCAKIgRgDQgKAAgGAGQgGAFAAAJQAAAIAFAGQAGAGAJAAQAIAAAJgDIAAgLIgVAAIAAgKIAfAAIAAAbQgOAGgNAAQgOAAgIgIgACQAVIAAgWQAAgJgKAAQgFAAgEABIAAAFIAAAZIgJAAIAAgWQAAgJgKAAIgJABIAAAeIgJAAIAAgmQAGgCAOAAQAJAAADADQAHgDAKAAQAQAAAAAQIAAAYgAiEAVIAAgmQAOgCAKAAIAAAKIgOAAIAAAeg");
	this.shape.setTransform(42.2,7.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00624A").s().p("AgBAOIAAgTIACAAIAAATgAgBgKIAAgDIADAAIAAADg");
	this.shape_1.setTransform(61.875,14.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00624A").s().p("AAGALIAAgMQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgBAAIgCABIgBACIgBADIAAALIgDAAIAAgUIADAAIAAAEIADgEIADgBIADABIADACQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAABIABADIAAAMg");
	this.shape_2.setTransform(60.125,14.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00624A").s().p("AgEAKIgDgCIgCgEIgBgEIABgDIACgEIAEgCIADgBIAEABIADACIADAEIABADIgBAEIgDAEIgDACIgEABgAgCgGIgDABIgBADIgBACIABADIABADIADABIACABIADgBIACgBIACgDIAAgDIAAgCIgCgDIgCgBIgDgBg");
	this.shape_3.setTransform(57.625,14.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00624A").s().p("AgBAOIAAgTIACAAIAAATgAgBgKIAAgDIADAAIAAADg");
	this.shape_4.setTransform(55.825,14.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00624A").s().p("AgIAKIAAgCIANgPIgMAAIAAgCIAQAAIAAACIgNAPIANAAIAAACg");
	this.shape_5.setTransform(54.175,14.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00624A").s().p("AgDAKIgCgBIgCgCIgBgDIABgDIACgBIACgBIADAAIAEAAIACAAIAAAAQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAIgDABIgCABIgBgDIADgBIAEgBQAEAAACADQACABAAAFIAAALIgDAAIAAgDIgDADIgEABgAgEABQAAABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAACIABABIACABIACAAIACAAIACgBQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIABgCIAAgCIgGgBQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_6.setTransform(51.85,14.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00624A").s().p("AgFALIAAgUIADAAIAAAGIACgDIABgCIACgBIADgBIAAAEIgBAAIgDABIgCACIgBACIgBAEIAAAIg");
	this.shape_7.setTransform(50.075,14.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00624A").s().p("AgDAKIgCgCIgCgCIgBgEIAAgLIADAAIAAAKIABAFQABAAAAABQABAAAAAAQABAAABAAQAAABAAAAIACgBIACgBIABgCIABgDIAAgKIADAAIAAATIgDAAIAAgDIgDACIgDABg");
	this.shape_8.setTransform(47.9,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00624A").s().p("AgCAKIgEgCIgCgEIgBgEIABgDIACgEIAEgCIADgBIAFABIADADIgCACIgCgCIgEgBIgCABIgCABIgBADIgCACIACADIABADIACABIACABIAEgBIACgCIACACIgDADIgFABg");
	this.shape_9.setTransform(45.6,14.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00624A").s().p("AgBAOIAAgTIACAAIAAATgAgBgKIAAgDIADAAIAAADg");
	this.shape_10.setTransform(43.925,14.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00624A").s().p("AgDAKIgEgCIACgDIADACIADABIADgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgCIgBgBIgEgBIgEgBIgBgBIgBgDIABgCIABgCIACgBIACgBIAEABIAEACIgCACIgGgCIgCABIgBACIAAAAIABABIABABIABABIABABIADAAIACAAIABACIABACIAAABIgBACIgBACIgCABIgDABg");
	this.shape_11.setTransform(42.375,14.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00624A").s().p("AgDAKIgEgCIACgDIADACIADABIADgBIABgCIAAgCIgBgBIgGgCIgBAAIgCgBIgBgDIABgCIABgCIACgBIACgBIAEABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIgBACIgGgCIgCABIgBACIAAAAIAAABIABABIACABIACABIACAAIACAAIABACIABACIAAABIgBACIgBACIgCABIgEABg");
	this.shape_12.setTransform(40.4,14.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00624A").s().p("AALAOIgEgIIgOAAIgDAIIgDAAIAMgbIACAAIANAbgAgFAEIALAAIgGgOg");
	this.shape_13.setTransform(37.875,14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C8D300").s().p("AgTgGIAnAAIglANQgCgGAAgHg");
	this.shape_14.setTransform(7.07,11.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C8D300").s().p("AgTAHIAmgXIgYAhQgIgDgGgHg");
	this.shape_15.setTransform(7.8,12.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C8D300").s().p("AADAUIgLgBIARgmIgDAng");
	this.shape_16.setTransform(9.375,13.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C8D300").s().p("AgRgEIAjAAIgFAJg");
	this.shape_17.setTransform(13.925,11.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C8D300").s().p("AgRgNIAjARIgLAKg");
	this.shape_18.setTransform(12.95,12.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C8D300").s().p("AgJgSIATAgIgMAFg");
	this.shape_19.setTransform(11.6,13.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIADIADgFIAKAAIAEAFg");
	this.shape_20.setTransform(9.325,10.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKADIAGgFIAKAAIAEAFg");
	this.shape_21.setTransform(11.95,10);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAIIAFgPIAFAPg");
	this.shape_22.setTransform(10.45,9.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E94E1D").s().p("AgzAfQAGgYAWgRQAXgSAegBIAWAAIgUATQgOgDgPACQgTADgPALQgOALgFARg");
	this.shape_23.setTransform(10.375,7.5875);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(5.1,4.2,57,11.7), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak9BoIAAjPIJ7AAIAADPg");
	mask.setTransform(31.75,10.375);

	// Livello_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8D300").s().p("AgTgGIAnAAIglANQgCgGAAgHg");
	this.shape.setTransform(7.07,11.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8D300").s().p("AgTAHIAmgXIgYAhQgIgDgGgHg");
	this.shape_1.setTransform(7.8,12.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C8D300").s().p("AADAUIgLgBIARgmIgDAng");
	this.shape_2.setTransform(9.375,13.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C8D300").s().p("AgRgEIAjAAIgFAJg");
	this.shape_3.setTransform(13.925,11.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C8D300").s().p("AgRgNIAjARIgLAKg");
	this.shape_4.setTransform(12.95,12.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C8D300").s().p("AgJgSIATAgIgMAFg");
	this.shape_5.setTransform(11.6,13.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIADIADgFIAKAAIAEAFg");
	this.shape_6.setTransform(9.325,10.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKADIAGgFIAKAAIAEAFg");
	this.shape_7.setTransform(11.95,10);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFAIIAFgPIAFAPg");
	this.shape_8.setTransform(10.45,9.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E94E1D").s().p("AgzAfQAGgYAWgRQAXgSAegBIAWAAIgUATQgOgDgPACQgTADgPALQgOALgFARg");
	this.shape_9.setTransform(10.375,7.5875);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(5.1,4.5,10.6,10.8), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ak9BoIAAjPIJ7AAIAADPg");
	mask_1.setTransform(31.75,10.375);

	// Livello_3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00624A").s().p("AgFAlIAAg2IAUgCQAVAAgBAUQAAAJgEAGQgGAGgJAAIgMgBIAAAQgAAEgKIAAAXIALAAQALAAAAgMQAAgMgMAAIgKABgAhkARQgFgGAAgKQAAgJAFgFQAHgGAJAAQALAAAGAGQAGAFAAAJQAAAKgGAGQgGAGgLAAQgJAAgHgGgAhgABQAAANAMAAQANAAAAgNQAAgMgNAAQgMAAAAAMgACgAJQAAgLASgBIALAAIAAgBQAAgHgJAAQgHAAgIACIgBgIQAJgCAJAAQAQAAAAAPIAAAYQgNACgJAAQgQAAAAgNgACxAEQgIAAAAAFQAAAGAJAAIALgBIAAgLgAApAJQAAgLASgBIALAAIAAgBQAAgHgJAAQgIAAgIACIgBgIQAJgCAIAAQASAAAAAPIAAAYQgOACgJAAQgPAAAAgNgAA6AEQgJAAABAFQAAAGAIAAIAMgBIAAgLgAg3AHIAAgZIAKAAIAAAXQAAAJAJAAIAMgBIAAgfIAJAAIAAAmQgJACgOAAQgRAAAAgPgAi9AOQgJgIAAgNQAAgNAJgIQAJgIAPAAQALAAAIACIgCAKIgRgDQgKAAgGAGQgGAFAAAJQAAAIAFAGQAGAGAJAAQAIAAAJgDIAAgLIgVAAIAAgKIAfAAIAAAbQgOAGgNAAQgOAAgIgIgACQAVIAAgWQAAgJgKAAQgFAAgEABIAAAFIAAAZIgJAAIAAgWQAAgJgKAAIgJABIAAAeIgJAAIAAgmQAGgCAOAAQAJAAADADQAHgDAKAAQAQAAAAAQIAAAYgAiEAVIAAgmQAOgCAKAAIAAAKIgOAAIAAAeg");
	this.shape_24.setTransform(42.2,7.875);

	var maskedShapeInstanceList = [this.shape_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(22.4,4.2,39.7,7.3999999999999995), null);


(lib.FINNUOV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_1
	this.instance = new lib.FINESTRANUOVA();
	this.instance.setTransform(0,0,0.585,0.585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FINNUOV, new cjs.Rectangle(0,0,117,174.4), null);


(lib.tesxt2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// FlashAICB
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(-60.6,-250.75,3.6165,3.6165,0,0,0,31.8,10.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00624A").s().p("AgFAzIAAhJIALAAIAABJgAgFgkIAAgOIALAAIAAAOg");
	this.shape.setTransform(47.8,-235.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00624A").s().p("AASAmIAAguQAAgHgCgEQgEgHgIAAIgGABQgGACgDAEQgEAEgBAEIgBALIAAAmIgMAAIAAhJIALAAIAAAKQAGgGAGgDQAGgDAGAAQAQAAAFALQADAGABALIAAAvg");
	this.shape_1.setTransform(42.45,-234.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00624A").s().p("AgYAeQgJgLAAgSQgBgRAKgLQAKgMAOAAQAPAAAKAKQAJAKAAASQAAARgIAMQgJAMgRAAQgQAAgIgKgAgPgTQgGAJAAALQAAAMAGAIQAFAIAKAAQAMAAAFgJQAEgKABgKQAAgLgEgGQgFgLgNAAQgKAAgFAJg");
	this.shape_2.setTransform(34.55,-234.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00624A").s().p("AgGAzIAAhJIANAAIAABJgAgGgkIAAgOIANAAIAAAOg");
	this.shape_3.setTransform(29.2,-235.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00624A").s().p("AgeAlIAAgKIArg0IgoAAIAAgLIA5AAIAAAKIgrA0IAsAAIAAALg");
	this.shape_4.setTransform(24.075,-234.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00624A").s().p("AgcAhQgGgGgBgJQAAgLAHgGQAHgEAKgCIATgCQAEgBACgDIABgFQAAgGgFgDQgEgDgIAAQgJAAgFAFQgCADgBAGIgLAAQAAgNAJgGQAIgGALAAQAMABAJAEQAIAFAAALIAAAqIABAEQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIABAAIACAAIAAAJIgEABIgFAAQgGAAgDgEIgCgHQgDAFgIAEQgGAEgIgBQgLAAgHgGgAAIABIgHACIgGABIgLADQgFADAAAHQAAAFAEAEQAEADAFAAQAHAAAFgDQALgFAAgMIAAgJIgHABg");
	this.shape_5.setTransform(16.9,-234.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00624A").s().p("AgRAmIAAhJIAMAAIAAAMQABgDAFgGQAGgFAHAAIABAAIADAAIAAANIgCAAIgCAAQgJAAgFAGQgFAGAAAIIAAAqg");
	this.shape_6.setTransform(10.875,-234.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00624A").s().p("AgaAcQgCgGAAgKIAAgxIAMAAIAAAwQAAAGACADQAEAHAIAAQAMAAAFgMQACgGAAgKIAAgkIAMAAIAABJIgLAAIAAgLIgGAHQgHAGgJAAQgQAAgGgKg");
	this.shape_7.setTransform(4.2,-234.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00624A").s().p("AgWAdQgJgLAAgQQAAgSAKgMQAJgLAOABQANAAAIAGQAHAGACAPIgMAAQgBgHgEgEQgEgFgJAAQgLAAgFALQgDAIgBALQABAKAEAIQAFAIAJAAQAIAAAFgFQAEgEACgJIAMAAQgCAPgJAHQgIAHgNAAQgOAAgIgLg");
	this.shape_8.setTransform(-3.1,-234.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00624A").s().p("AgGAzIAAhJIANAAIAABJgAgGgkIAAgOIANAAIAAAOg");
	this.shape_9.setTransform(-8.25,-235.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00624A").s().p("AgXAgQgHgIAAgLIAMAAQAAAHADADQAFAGALAAQAHAAAFgDQAGgDAAgGQAAgFgEgDIgLgDIgKgDQgJgCgFgCQgIgFAAgJQAAgLAIgGQAHgHANAAQARAAAHAKQAFAGAAAIIgMAAQAAgFgDgDQgFgFgKAAQgHAAgEADQgDACAAAFQAAAFAFADIAIADIAHACQAOADAFACQAHAFAAAKQAAAKgHAHQgIAIgQAAQgQAAgHgIg");
	this.shape_10.setTransform(-13.275,-234.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00624A").s().p("AgXAgQgHgIAAgLIAMAAQAAAHADADQAFAGALAAQAHAAAFgDQAGgDAAgGQAAgFgEgDIgLgDIgKgDQgJgCgFgCQgIgFAAgJQAAgLAIgGQAHgHANAAQARAAAHAKQAFAGAAAIIgMAAQAAgFgDgDQgFgFgKAAQgHAAgEADQgDACAAAFQAAAFAFADIAIADIAHACQAOADAFACQAHAFAAAKQAAAKgHAHQgIAIgQAAQgQAAgHgIg");
	this.shape_11.setTransform(-20.325,-234.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00624A").s().p("AAfAzIgLgeIgnAAIgLAeIgPAAIAnhlIAPAAIAlBlgAAQAJIgQgsIgPAsIAfAAg");
	this.shape_12.setTransform(-28.525,-235.575);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(-60.6,-250.75,3.6165,3.6165,0,0,0,31.8,10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00624A").s().p("AhOBPIAAidICdAAIAACdg");
	this.shape_13.setTransform(-137.8985,-251.8354,3.6165,3.6165);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak9BoIAAjPIJ7AAIAADPg");
	this.shape_14.setTransform(-60.7776,-250.4793,3.6165,3.6165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Livello_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00624A").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_15.setTransform(46.875,-191.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00624A").s().p("AgWAuQgGgCgFgDQgEgEgDgFQgCgFAAgHIAAgBQAAgHADgGQADgGAFgCQAEgEAHgCQAHgCAIAAQAHAAAFACIAKACIAAgBQAAgJgFgEQgFgEgJAAQgHAAgGABIgMAEIgHgUIAQgGQAIgCALAAQAWAAAKALQAKAKAAATIAAA1IgaAAIAAgKQgFAGgHADQgFADgKAAQgHAAgFgCgAgMAJQgEADAAAGQAAAGAEADQADADAHAAQAIAAAGgFQAGgEAAgIIAAgEIgIgDIgJgBQgIAAgFAEg");
	this.shape_16.setTransform(39.025,-195.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00624A").s().p("AAQAvIAAgzQAAgJgEgFQgEgEgIAAQgHAAgEAEQgFAFABAJIAAAzIgaAAIAAhcIAaAAIAAAOIAEgGIAHgFIAGgDIAJgBQAPAAAIAJQAJAJgBAQIAAA7g");
	this.shape_17.setTransform(28.8,-195.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00624A").s().p("AgTAtQgJgEgHgHQgHgGgEgJQgDgJAAgKIAAAAQAAgJADgJQAEgJAHgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAGQAHAHADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgHAHgJAEQgJADgLAAQgKAAgJgDgAgJgXQgFACgDAEQgDADgCAFQgBAEAAAFQAAAFABAFIAFAIIAIAGQAEACAFAAQAGAAAEgCQAFgCADgEIAFgIIABgKIAAAAQAAgEgCgFQgBgFgEgDQgDgEgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_18.setTransform(17.625,-195.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00624A").s().p("AgRAtQgKgDgKgIIAMgRQAHAFAIADQAHADAGAAQAGAAACgCQADgCAAgDIAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgCIgGgDIgGgCIgKgEQgFgCgEgDQgEgCgDgEQgCgGAAgGIAAgBQAAgGADgGQACgFAFgEQAFgEAGgCQAGgCAGAAQAJAAAJADQAJADAIAFIgKASIgOgHQgHgCgFAAQgDABgDABQgCACAAADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAEAEIAFACIAIACIAKAEQAFACAEADQAEACACAFQADAEAAAHQAAAIgDAGQgDAFgFAEQgEAEgHABQgGACgIAAQgJAAgKgDg");
	this.shape_19.setTransform(7.375,-195.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00624A").s().p("AgbAvIAAhcIAaAAIAAATQADgKAHgFQAHgGAMABIAAAbIgBAAQgNAAgIAIQgHAIAAAQIAAAig");
	this.shape_20.setTransform(-0.05,-195.1321);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00624A").s().p("AgQAtQgIgEgHgGQgGgGgEgJQgDgJgBgLIAAAAQAAgJADgJQAEgJAGgGQAGgHAIgEQAJgDAJAAQAMAAAIAEQAJAEAGAHQAFAHADAJQADAJgBAJIAAAEIAAADIg/AAQABAJAHAFQAGAEAHAAQAHAAAFgCQAFgCAGgFIAPANQgGAIgKAFQgJAEgNAAQgJAAgKgDgAgMgVQgGAFgBAJIAnAAQgBgIgFgGQgGgFgIAAQgHAAgFAFg");
	this.shape_21.setTransform(-9.4,-195.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00624A").s().p("AgwA9IAAh4IAaAAIAAAOQAFgHAHgEQAHgEAJAAQAJAAAHADQAIADAGAGQAGAGADAJQAEAJAAAMQAAAMgEAHQgDAJgGAHQgGAGgIADQgHADgJAAQgJAAgHgEQgHgEgFgGIAAAogAgIgkQgEABgDAEIgFAIQgCAFAAAGQAAAGACAEQACAEADAEQADADAEACQAEACAEAAQAEAAAEgCQAEgCAEgDIAFgHQABgFAAgGQAAgGgBgFIgFgIQgEgEgEgBQgEgCgEAAQgEAAgEACg");
	this.shape_22.setTransform(-20.325,-193.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00624A").s().p("AAQAvIAAgzQAAgJgEgFQgEgEgIAAQgHAAgEAEQgEAFgBAJIAAAzIgaAAIAAhcIAaAAIAAAOIAGgGIAFgFIAHgDIAJgBQAPAAAJAJQAHAJABAQIAAA7g");
	this.shape_23.setTransform(-36.95,-195.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00624A").s().p("AgMA/IAAhcIAZAAIAABcgAgNgnIAAgXIAbAAIAAAXg");
	this.shape_24.setTransform(-44.975,-196.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00624A").s().p("AgQARQARgBgBgQIgJAAIAAgbIAaAAIAAAXQAAARgIAHQgIAIgPAAg");
	this.shape_25.setTransform(-55.6,-190.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00624A").s().p("AgQAtQgJgEgGgGQgHgGgDgJQgDgJAAgLIAAAAQAAgJACgJQAEgJAGgGQAGgHAJgEQAIgDAJAAQAMAAAIAEQAJAEAGAHQAFAHADAJQACAJAAAJIAAAEIAAADIg/AAQABAJAHAFQAGAEAHAAQAHAAAFgCQAFgCAGgFIAPANQgGAIgKAFQgJAEgNAAQgJAAgKgDgAgMgVQgFAFgCAJIAnAAQgBgIgGgGQgEgFgJAAQgHAAgFAFg");
	this.shape_26.setTransform(-63.05,-195.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00624A").s().p("AAQAvIAAgzQAAgJgEgFQgEgEgIAAQgGAAgFAEQgFAFABAJIAAAzIgaAAIAAhcIAaAAIAAAOIAEgGIAGgFIAHgDIAJgBQAPAAAIAJQAIAJAAAQIAAA7g");
	this.shape_27.setTransform(-73.7,-195.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00624A").s().p("AgTAtQgJgEgHgHQgHgGgEgJQgDgJAAgKIAAAAQAAgJADgJQAEgJAHgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAGQAHAHADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgHAHgJAEQgJADgLAAQgKAAgJgDgAgJgXQgFACgDAEQgDADgCAFQgBAEAAAFQAAAFABAFIAFAIIAIAGQAEACAFAAQAGAAAEgCQAFgCADgEIAFgIIABgKIAAAAQAAgEgCgFQgBgFgEgDQgDgEgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_28.setTransform(-84.875,-195.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00624A").s().p("AgMA/IAAhcIAZAAIAABcgAgNgnIAAgXIAbAAIAAAXg");
	this.shape_29.setTransform(-93.225,-196.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00624A").s().p("AgoAuIAAgSIAwg0IguAAIAAgWIBOAAIAAATIguA0IAuAAIAAAVg");
	this.shape_30.setTransform(-100.7,-195.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00624A").s().p("AghAmQgJgJAAgQIAAg7IAbAAIAAAyQAAAKAEAFQAEAEAHAAQAHAAAFgEQAEgFAAgKIAAgyIAbAAIAABcIgbAAIAAgOIgFAGIgGAFQgDACgDABIgJABQgPAAgIgJg");
	this.shape_31.setTransform(-111.025,-194.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00624A").s().p("AgMA/IAAh9IAZAAIAAB9g");
	this.shape_32.setTransform(-118.975,-196.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00624A").s().p("AgTAtQgJgEgHgHQgHgGgEgJQgDgJAAgKIAAAAQAAgJADgJQAEgJAHgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAGQAHAHADAJQAEAIAAAKQAAAKgEAJQgDAJgHAGQgHAHgJAEQgJADgLAAQgKAAgJgDgAgJgXQgFACgDAEQgDADgCAFQgBAEAAAFQAAAFABAFIAFAIIAIAGQAEACAFAAQAGAAAEgCQAFgCADgEIAFgIIABgKIAAAAQAAgEgCgFQgBgFgEgDQgDgEgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_33.setTransform(-127.325,-195.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00624A").s().p("AgRAtQgKgDgKgIIAMgRQAHAFAIADQAHADAGAAQAGAAACgCQADgCAAgDIAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAIgEgCIgGgDIgGgCIgKgEQgFgCgEgDQgEgCgDgEQgCgGAAgGIAAgBQAAgGADgGQACgFAFgEQAFgEAGgCQAGgCAGAAQAJAAAJADQAJADAIAFIgKASIgOgHQgHgCgFAAQgDABgDABQgCACAAADQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAEAEIAFACIAIACIAKAEQAFACAEADQAEACACAFQADAEAAAHQAAAIgDAGQgDAFgFAEQgEAEgHABQgGACgIAAQgJAAgKgDg");
	this.shape_34.setTransform(-137.525,-195.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00624A").s().p("AgWAuQgGgCgFgDQgEgEgDgFQgCgFAAgHIAAgBQAAgHADgGQADgGAFgCQAEgEAHgCQAHgCAIAAQAHAAAFACIAKACIAAgBQAAgJgFgEQgFgEgJAAQgHAAgGABIgMAEIgHgUIAQgGQAIgCALAAQAWAAAKALQAKAKAAATIAAA1IgaAAIAAgKQgFAGgHADQgFADgKAAQgHAAgFgCgAgMAJQgEADAAAGQAAAGAEADQADADAHAAQAIAAAGgFQAGgEAAgIIAAgEIgIgDIgJgBQgIAAgFAEg");
	this.shape_35.setTransform(-152.325,-195.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00624A").s().p("AgrA9IAAh5IAbAAIAABhIA8AAIAAAYg");
	this.shape_36.setTransform(-162.125,-196.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tesxt2, new cjs.Rectangle(-175.6,-288,232.89999999999998,103.19999999999999), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Livello_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00624A").s().p("AAAAVIgDgCIgCgCIgBgGIAAgPIgEAAIAAgIIAEAAIAAgJIAJAAIAAAJIAIAAIAAAIIgIAAIAAAOQAAABAAAAQAAABAAAAQABABAAAAQABAAABAAIAEgBIAAAHIgDACIgEAAIgDAAg");
	this.shape.setTransform(-704.775,-43.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00624A").s().p("AgEAXIAAghIAJAAIAAAhgAgEgOIAAgIIAJAAIAAAIg");
	this.shape_1.setTransform(-707,-43.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00624A").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_2.setTransform(-708.85,-41.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00624A").s().p("AgIARIgDgCIgDgEIAAgEIAAAAIABgFIACgCIAEgCIAGgBIAEABIADABIAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQgCgBgDAAIgFAAIgFACIgCgIIAGgCIAGAAQAIAAAEADQADAEAAAHIAAATIgJAAIAAgEIgEADIgFABIgFAAgAgDADQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIAEABQACAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAIAAgCIgCgBIgEAAQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_3.setTransform(-711.65,-42.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00624A").s().p("AAQARIAAgSIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBACAAADIAAASIgJAAIAAgSIgBgFQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQAAAAgBAAQgBACAAADIAAASIgKAAIAAghIAKAAIAAAFIABgCIADgBIACgCIAEAAQADAAACABIADAEIAFgEQADgBADAAQAFAAADADQAEADAAAGIAAAVg");
	this.shape_4.setTransform(-716.425,-42.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00624A").s().p("AgHARIgFgCIgCgEIAAgEIAAAAIABgFIACgCIAFgCIAFgBIAEABIADABIAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgBgCAAIgFAAIgFACIgCgIIAGgCIAHAAQAHAAAEADQADAEAAAHIAAATIgJAAIAAgEIgEADIgFABIgEAAgAgEADQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIAEABQACAAACgCQAAAAABgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgCIgCgBIgEAAQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_5.setTransform(-721.35,-42.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00624A").s().p("AgQAWIAAgrIAJAAIAAAFIAEgEQADgBACAAQADAAADABIAFADIAEAGIABAHIgBAHIgEAFQgCADgDABIgGABQgCAAgDgCIgEgDIAAAOgAgDgMIgCABIgBADIgBAEIABAEIABACIACACIADABIADgBIACgCIADgCIAAgEIAAgEIgDgDIgCgBIgDgBIgDABg");
	this.shape_6.setTransform(-725.2,-42.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00624A").s().p("AgMAOQgCgDAAgGIAAgVIAJAAIAAASQAAADABACQABAAAAABQABAAAAAAQABABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCAAgDIAAgSIAJAAIAAAhIgJAAIAAgFIgCACIgCACIgCABIgDAAQgGAAgDgDg");
	this.shape_7.setTransform(-729.35,-42.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00624A").s().p("AgGAQIgGgEQgCgCgCgDQgBgDAAgEIAAAAQAAgDABgDQACgDACgCIAGgEQADgCADAAQAEAAADACIAGADIAEAGIABAGIgBAHIgEAFIgGAEQgDACgEAAQgDAAgDgCgAgDgIIgCACIgCADIgBADIABAEIACACIADADIACAAIAEAAIADgCIABgDIABgEIAAAAIgBgDIgBgDIgDgCIgEAAIgDAAg");
	this.shape_8.setTransform(-733.425,-42.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00624A").s().p("AgJARIAAghIAJAAIAAAHQABgDADgCQACgCAEAAIAAAKIAAAAQgFAAgDADQgCADAAAFIAAAMg");
	this.shape_9.setTransform(-736.65,-42.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00624A").s().p("AgIAWIgHgDIADgHIAFACIAHABQADAAADgDQACgCABgEIAAgCIgGAEIgEABIgHgBIgEgDQgDgCgBgDIgBgFIABgHIAEgFIAEgDIAHgBQACAAACABIAFAEIAAgFIAKAAIAAAaIgBAIQgBADgDACIgGADIgHABIgIAAgAgCgNIgDACIgCACIAAAEQAAADACACQACACADAAIADgBIADgBIACgCIABgDIgBgEIgCgCIgDgCIgDAAIgCAAg");
	this.shape_10.setTransform(-740.3,-42.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00624A").s().p("AgMAOQgCgDAAgGIAAgVIAJAAIAAASQAAADACACQAAAAAAABQABAAAAAAQABABABAAQAAAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBABAAQABgCAAgDIAAgSIAJAAIAAAhIgJAAIAAgFIgCACIgCACIgCABIgDAAQgGAAgDgDg");
	this.shape_11.setTransform(-746.2,-42.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00624A").s().p("AgFAQIgIgEIAEgGIAGADIAEABIADgBIABgCIAAgBIgCgBIgCgBIgCgBIgDgBIgEgCIgCgCIgBgEIABgEIADgEIAEgCIADAAIAHABIAGACIgEAHIgFgCIgEgBIgBABIgBABIAAACIACABIABAAIADABIADACIADABIADACIABAEIgBAFIgDAEIgEACIgFAAIgGgBg");
	this.shape_12.setTransform(-749.775,-42.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00624A").s().p("AgHARIgFgCIgCgEIAAgEIAAAAIABgFIACgCIAFgCIAFgBIAEABIADABIAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgBgCAAIgFAAIgFACIgCgIIAGgCIAHAAQAHAAAEADQADAEAAAHIAAATIgJAAIAAgEIgEADIgFABIgEAAgAgEADQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIAEABQACAAACgCQAAAAABgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgCIgCgBIgEAAQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_13.setTransform(-755.1,-42.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00624A").s().p("AAGARIAAgSQAAgDgCgCQAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgCACAAADIAAASIgJAAIAAghIAJAAIAAAFIACgCIACgBIACgCIADAAQAFAAADADQADAEAAAFIAAAVg");
	this.shape_14.setTransform(-758.875,-42.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00624A").s().p("AgEAXIAAghIAJAAIAAAhgAgEgOIAAgIIAJAAIAAAIg");
	this.shape_15.setTransform(-761.75,-43.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00624A").s().p("AgEAQIgGgEIgDgFQgCgDAAgEIAAAAQAAgDACgDIADgFIAGgEQADgCADAAQAFAAADACIAGAEIgGAGIgEgCIgEgBIgCAAIgDACIgCADIAAADIAAAEIACADIADACIACAAIAFgBIADgCIAGAFIgGAFQgDACgFAAIgGgCg");
	this.shape_16.setTransform(-764.475,-42.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00624A").s().p("AgEAXIAAghIAJAAIAAAhgAgEgOIAAgIIAJAAIAAAIg");
	this.shape_17.setTransform(-767.25,-43.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00624A").s().p("AgEARIgMghIAJAAIAHAWIAIgWIAKAAIgOAhg");
	this.shape_18.setTransform(-770.1,-42.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00624A").s().p("AgLAWQgEgEAAgGIAAgVIAKAAIAAASQAAADABACQABABAAAAQABAAAAABQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgCAAgDIAAgSIAKAAIAAAhIgKAAIAAgFIgCACIgCACIgCABIgDAAQgFAAgDgCgAgBgNIgIgHIAIgDIAFAKg");
	this.shape_19.setTransform(-775.85,-43.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00624A").s().p("AgEAXIAAghIAJAAIAAAhgAgEgOIAAgIIAJAAIAAAIg");
	this.shape_20.setTransform(-778.7,-43.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00624A").s().p("AgRAWIAAgrIAKAAIAAAFIAEgEQACgBADAAQADAAADABIAFADIAEAGIABAHIgBAHIgEAFQgCADgDABIgGABQgDAAgCgCIgEgDIAAAOgAgCgMIgDABIgCADIgBAEIABAEIACACIADACIACABIADgBIADgCIACgCIAAgEIAAgEIgCgDIgDgBIgDgBIgCABg");
	this.shape_21.setTransform(-781.7,-42.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00624A").s().p("AgHARIgFgCIgCgEIgBgEIAAAAIABgFIADgCIAFgCIAFgBIADABIAEABIAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgBgCAAIgFAAIgEACIgDgIIAGgCIAHAAQAHAAADADQAEAEAAAHIAAATIgJAAIAAgEIgEADIgFABIgEAAgAgEADQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIAEABQACAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgCIgDgBIgDAAQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_22.setTransform(-787.75,-42.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00624A").s().p("AgEAXIAAghIAJAAIAAAhgAgEgOIAAgIIAJAAIAAAIg");
	this.shape_23.setTransform(-790.45,-43.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00624A").s().p("AgOARIAAgHIARgSIgQAAIAAgIIAcAAIAAAHIgRASIARAAIAAAIg");
	this.shape_24.setTransform(-793.175,-42.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00624A").s().p("AAGARIAAgSQAAgDgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgCACAAADIAAASIgJAAIAAghIAJAAIAAAFIACgCIACgBIACgCIADAAQAFAAADADQADAEAAAFIAAAVg");
	this.shape_25.setTransform(-796.875,-42.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00624A").s().p("AgFAQIgGgDIgDgGIgBgHIAAAAQgBgDACgDQABgDACgCIAFgEQAEgCADAAQADAAAEACIAFAEIADAGIABAGIAAABIAAABIgXAAIADAFQACACADAAIADgBIAFgDIAFAFIgFAFQgEACgEAAQgDAAgEgCgAgEgHQgCACAAADIAOAAQgBgDgCgCQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgCACg");
	this.shape_26.setTransform(-800.8,-42.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00624A").s().p("AgIAWIgHgDIADgHIAFACIAGABQAEAAADgDQADgCgBgEIAAgCIgEAEIgFABIgHgBIgEgDQgDgCgBgDIgBgFIABgHIAEgFIAEgDIAHgBQACAAADABIAEAEIAAgFIAJAAIAAAaIgBAIQgBADgCACIgGADIgHABIgIAAgAgCgNIgDACIgCACIAAAEQAAADACACQACACADAAIAEgBIACgBIABgCIABgDIgBgEIgBgCIgCgCIgEAAIgCAAg");
	this.shape_27.setTransform(-804.9,-42.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00624A").s().p("AgHARIgFgCIgCgEIgBgEIAAAAIABgFIADgCIAFgCIAFgBIADABIAEABIAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgCgBgCAAIgFAAIgEACIgDgIIAGgCIAHAAQAHAAADADQAEAEAAAHIAAATIgJAAIAAgEIgEADIgFABIgEAAgAgEADQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQABABAAAAIAEABQACAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgCIgDgBIgDAAQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_28.setTransform(-808.9,-42.925);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00624A").s().p("AgFAGQAFgBAAgFIgDAAIAAgJIAJAAIAAAIQAAAGgDACQgDADgFAAg");
	this.shape_29.setTransform(-811.675,-44.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00624A").s().p("AgEAXIAAgtIAJAAIAAAtg");
	this.shape_30.setTransform(-813.4,-43.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00624A").s().p("AgEAXIAAghIAJAAIAAAhgAgEgOIAAgIIAJAAIAAAIg");
	this.shape_31.setTransform(-817.2,-43.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00624A").s().p("AgJARIAAghIAJAAIAAAHQABgDADgCQACgCAEAAIAAAKIgBAAQgEAAgDADQgCADAAAFIAAAMg");
	this.shape_32.setTransform(-819.3,-42.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00624A").s().p("AgRAWIAAgrIAKAAIAAAFIAEgEQADgBADAAQACAAADABIAFADIADAGIABAHIgBAHIgDAFQgCADgDABIgFABQgDAAgDgCIgEgDIAAAOgAgCgMIgDABIgCADIgBAEIABAEIACACIADACIACABIADgBIADgCIABgCIABgEIgBgEIgBgDIgDgBIgDgBIgCABg");
	this.shape_33.setTransform(-822.8,-42.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00624A").s().p("AgGAQIgGgEQgCgCgCgDQgBgDAAgEIAAAAQAAgDABgDQACgDACgCIAGgEQADgCADAAQAEAAADACIAGADIAEAGIABAGIgBAHIgEAFIgGAEQgDACgEAAQgDAAgDgCgAgDgIIgCACIgCADIgBADIABAEIACACIADADIACAAIAEAAIADgCIABgDIABgEIAAAAIgBgDIgBgDIgDgCIgEAAIgDAAg");
	this.shape_34.setTransform(-827.125,-42.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00624A").s().p("AgEAQIgGgEIgDgFQgCgDAAgEIAAAAQAAgDACgDIADgFIAGgEQADgCADAAQAFAAADACIAGAEIgGAGIgEgCIgEgBIgCAAIgDACIgCADIAAADIAAAEIACADIADACIACAAIAFgBIADgCIAGAFIgGAFQgDACgFAAIgGgCg");
	this.shape_35.setTransform(-830.975,-42.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00624A").s().p("AgIAVQgEgCgEgEIAFgGIAHADQADACACAAIAFgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgCIgBgBIgDgCIgDgBIgGgCIgFgCIgDgDIgBgFIABgGIAEgEQACgCACgBIAGgBIAJACQAEABADADIgFAHIgGgDIgFgBIgEABQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAABIAAAAIAAACIACABIADABIADABIAGACIAFACIACAEIABAFIgBAGQgBACgCACQgCACgDAAIgHABIgJgBg");
	this.shape_36.setTransform(-834.825,-43.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Livello_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-660.05,-43.45,1.1812,1.1812,0,0,0,31.7,10.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00624A").s().p("AhOBPIAAidICdAAIAACdg");
	this.shape_37.setTransform(-685.3355,-43.7876,1.1812,1.1812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-837.8,-55.6,215.29999999999995,24.5), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [350];
	// timeline functions:
	this.frame_350 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(350).call(this.frame_350).wait(8));

	// bordo
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},351).wait(7));

	// Livello_6
	this.instance = new lib.tesxt2();
	this.instance.setTransform(503.1,388,1,1,0,0,0,291.2,27.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(278).to({_off:false},0).wait(72).to({_off:true},1).wait(7));

	// bianco
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAFQOIgJAAMAAAggaIAJAA");
	this.shape_1.setTransform(0.175,103.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A3bUUIAAoKMAAAggaIAAgDMAu3AAAMAAAAong");
	this.shape_2.setTransform(150.625,129.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("EAZAAlbIAAAFIi/AAEgY/glfIAKAAEgY1AlgIgKAA");
	this.shape_3.setTransform(159.7,240.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A3bT9MAAAgnzIAAgGMAu3AAAMAAAAn5g");
	this.shape_4.setTransform(150.625,127.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},278).to({state:[{t:this.shape_4},{t:this.shape_3}]},72).to({state:[]},1).wait(7));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(1247.15,342.2,1.2727,1.2727,0,0,0,131.8,43.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(350).to({x:1162.15,y:692.2},0).to({_off:true},1).wait(7));

	// box_logo
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A3YDFIAAmIMAuxAAAIAAGIg");
	this.shape_5.setTransform(150.25,232.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A48GDIAAsEMAx5AAAIAAMEg");
	this.shape_6.setTransform(160.2,561.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},350).to({state:[]},1).wait(7));

	// NOTA
	this.instance_2 = new lib.NOTA();
	this.instance_2.setTransform(148.45,500.95,1,1,0,0,0,132.4,16);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},0).to({alpha:1},8).to({_off:true},233).wait(7));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(247.85,317.9,1,1,0,0,0,206.4,169.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86).to({_off:false},0).wait(1).to({regX:108.4,regY:22.7,x:149.85,y:163.7,alpha:0.4477},0).wait(1).to({y:161.25,alpha:0.6019},0).wait(1).to({y:159.6,alpha:0.7061},0).wait(1).to({y:158.35,alpha:0.7837},0).wait(1).to({y:157.4,alpha:0.8436},0).wait(1).to({y:156.65,alpha:0.8904},0).wait(1).to({y:156.05,alpha:0.9268},0).wait(1).to({y:155.6,alpha:0.9548},0).wait(1).to({y:155.25,alpha:0.9753},0).wait(1).to({y:155.05,alpha:0.9893},0).wait(1).to({y:154.9,alpha:0.9974},0).wait(1).to({regX:206.4,regY:169.7,x:247.85,y:301.9,alpha:1},0).wait(1).to({regX:108.4,regY:22.7,x:149.85,y:154.9},0).wait(251).to({regX:206.4,regY:169.7,x:247.85,y:301.9},0).to({_off:true},1).wait(7));

	// sfumatura_copia_copia
	this.instance_4 = new lib.sfuma2();
	this.instance_4.setTransform(-46.8,743.8,0.5331,0.5878,-90,0,0,590.5,581.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(75).to({_off:false},0).to({regX:590.1,regY:581.7,scaleX:0.3379,scaleY:0.3725,x:26.25,y:509.4,alpha:1},12).wait(263).to({y:562.9},0).to({_off:true},1).wait(7));

	// sfumatura_copia
	this.instance_5 = new lib.sfuma1();
	this.instance_5.setTransform(352.9,701.05,0.5331,0.5878,-90,0,0,808,581.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({_off:false},0).to({regX:807.9,regY:581.7,scaleX:0.3379,scaleY:0.3725,x:279.7,y:482.25,alpha:1},12).wait(263).to({y:535.75},0).to({_off:true},1).wait(7));

	// sfumatura_copia
	this.instance_6 = new lib.sfuma3();
	this.instance_6.setTransform(167.7,608.3,0.5331,0.5878,-90,0,0,384.7,448);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({regX:384.4,regY:448.2,scaleX:0.3379,scaleY:0.3725,x:162.25,y:423.4,alpha:1},12).wait(263).to({y:476.9},0).to({_off:true},1).wait(7));

	// sfumatura
	this.instance_7 = new lib.sfuma4();
	this.instance_7.setTransform(167.7,615.8,0.5912,0.5878,-90,0,0,384.9,448);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(75).to({_off:false},0).to({regX:384.5,regY:448.2,scaleX:0.3748,scaleY:0.3725,x:162.25,y:409.2,alpha:1},12).wait(263).to({y:462.7},0).to({_off:true},1).wait(7));

	// Livello_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AHqvZINVBPIAASxIkjKeIoQAVg");
	var mask_graphics_44 = new cjs.Graphics().p("ALivZIIxBPIAASxIjAKeIlbAVg");
	var mask_graphics_45 = new cjs.Graphics().p("AJRvZILFBPIAASxIjzKeIm3AVg");
	var mask_graphics_46 = new cjs.Graphics().p("AIlvZILxBPIAASxIkBKeInTAVg");
	var mask_graphics_47 = new cjs.Graphics().p("AILvZIMMBPIAASxIkLKeInjAVg");
	var mask_graphics_48 = new cjs.Graphics().p("AH7vZIMcBPIAASxIkQKeIntAVg");
	var mask_graphics_49 = new cjs.Graphics().p("AHzvZIMkBPIAASxIkTKeInyAVg");
	var mask_graphics_50 = new cjs.Graphics().p("AHwvZIMnBPIAASxIkUKeIn0AVg");
	var mask_graphics_51 = new cjs.Graphics().p("AHdvZIM2BPIAASxIkZKeIn9AVg");
	var mask_graphics_52 = new cjs.Graphics().p("AHPvZINCBPIAASxIkdKeIoFAVg");
	var mask_graphics_53 = new cjs.Graphics().p("AHEvZINLBPIAASxIkgKeIoKAVg");
	var mask_graphics_54 = new cjs.Graphics().p("AG9vZINRBPIAASxIkiKeIoNAVg");
	var mask_graphics_55 = new cjs.Graphics().p("AG6vZINTBPIAASxIkjKeIoPAVg");
	var mask_graphics_56 = new cjs.Graphics().p("AG5vZINUBPIAASxIkjKeIoQAVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:134.3064,y:96.3722}).wait(44).to({graphics:mask_graphics_44,x:129.9282,y:96.3722}).wait(1).to({graphics:mask_graphics_45,x:130.1603,y:96.3722}).wait(1).to({graphics:mask_graphics_46,x:130.2304,y:96.3722}).wait(1).to({graphics:mask_graphics_47,x:130.2716,y:96.3722}).wait(1).to({graphics:mask_graphics_48,x:130.2964,y:96.3722}).wait(1).to({graphics:mask_graphics_49,x:130.3098,y:96.3722}).wait(1).to({graphics:mask_graphics_50,x:130.2745,y:96.3722}).wait(1).to({graphics:mask_graphics_51,x:129.9375,y:96.3722}).wait(1).to({graphics:mask_graphics_52,x:129.6861,y:96.3722}).wait(1).to({graphics:mask_graphics_53,x:129.5045,y:96.3722}).wait(1).to({graphics:mask_graphics_54,x:129.3823,y:96.3722}).wait(1).to({graphics:mask_graphics_55,x:129.3123,y:96.3722}).wait(1).to({graphics:mask_graphics_56,x:129.3314,y:96.3722}).wait(302));

	// donna
	this.instance_8 = new lib.uomo();
	this.instance_8.setTransform(273.55,73.75,0.1674,0.1674,0,0,0,103.9,171.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).wait(1).to({regX:170.2,regY:398.9,x:265.2,y:107.45},0).wait(1).to({x:258.25,y:105.85},0).wait(1).to({x:253.4,y:104.75},0).wait(1).to({x:249.65,y:103.85},0).wait(1).to({x:246.6,y:103.2},0).wait(1).to({x:244.1,y:102.6},0).wait(1).to({x:242,y:102.15},0).wait(1).to({x:240.25,y:101.7},0).wait(1).to({x:238.8,y:101.4},0).wait(1).to({x:237.55,y:101.1},0).wait(1).to({x:236.5,y:100.85},0).wait(1).to({x:235.7,y:100.7},0).wait(1).to({x:235.05,y:100.55},0).wait(1).to({x:234.55,y:100.4},0).wait(1).to({x:234.2,y:100.35},0).wait(1).to({x:234,y:100.3},0).wait(1).to({regX:104.2,regY:171.4,x:222.85,y:62.15},0).to({regX:104.1,scaleX:0.1791,scaleY:0.1791,x:208.4,y:56.95},229).wait(68));

	// ombra
	this.instance_9 = new lib.ombra_1();
	this.instance_9.setTransform(682.3,496.25,1.0884,1.0884,0,0,0,400.7,72.7);
	this.instance_9.alpha = 0;
	this.instance_9.compositeOperation = "multiply";
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({regX:400.8,regY:72.8,scaleX:1.1194,scaleY:1.1194,x:702.75,y:509.3,alpha:1},17).to({regX:400.9,regY:72.9,scaleX:0.9564,scaleY:0.9564,x:617.25,y:443.05},268).wait(32).to({regX:400.7,regY:72.5,scaleX:1,scaleY:1,x:642.7,y:451.5},0).to({_off:true},1).wait(10));

	// finestra (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AAAAHIAAgNIAAAAIAAANg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ag1A5IAAhxIBrAAIAABxg");
	var mask_1_graphics_15 = new cjs.Graphics().p("Ag1g4IBrgBIAAByIhrABg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Ag1g+IBrAAIAAB9IhrAAg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Ag1hMIBrAAIAACZIhrAAg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ag1hnIBrgBIAADQIhrABg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Ag1iTIBrgDIAAEqIhrADg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Ag1jWIBrgFIAAGyIhrAFg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Ag1kzIBrgIIAAJvIhrAIg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Ag1mvIBrgMIAANrIhrAMg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Ag1osIBrgPIAARoIhrAPg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Ag1qJIBrgSIAAUlIhrASg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Ag1rLIBrgUIAAWrIhrAUg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Ag1r4IBrgWIAAYHIhrAWg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Ag1sTIBrgXIAAY+IhrAXg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Ag1shIBrgXIAAZaIhrAXg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Ag1smIBrgXIAAZkIhrAXg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Ag1snIBrgXIAAZmIhrAXg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AjpsUIHTg9IAAZmInTA9g");
	var mask_1_graphics_32 = new cjs.Graphics().p("AkrsUIJXg9IAAZmIpXA9g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AlZsXIKzg3IAAZmIqzA3g");
	var mask_1_graphics_34 = new cjs.Graphics().p("Al8saIL5gxIAAZmIr5Axg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AmZsdIMzgrIAAZmIszArg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AmwsgINhglIAAZmIthAlg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AnEsjIOJgfIAAZmIuJAfg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AnUsmIOpgZIAAZmIupAZg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AnispIPFgTIAAZmIvFATg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AnusrIPdgPIAAZmIvdAPg");
	var mask_1_graphics_41 = new cjs.Graphics().p("An3stIPvgLIAAZmIvvALg");
	var mask_1_graphics_42 = new cjs.Graphics().p("An/svIP/gHIAAZmIv/AHg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AoFswIQLgFIAAZmIwLAFg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AoKsxIQVgDIAAZmIwVADg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AoNsyIQbgBIAAZmIwbABg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AoPsyIQfgBIAAZmIwfABg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AoQM0IAA5nIQhAAIAAZng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_1,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_2,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_3,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_4,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_5,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_6,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_7,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_8,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_9,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_10,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_11,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_12,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_13,x:239.4702,y:69.1483}).wait(1).to({graphics:mask_1_graphics_14,x:239.0215,y:69.133}).wait(1).to({graphics:mask_1_graphics_15,x:239.0215,y:69.1326}).wait(1).to({graphics:mask_1_graphics_16,x:239.0211,y:69.1281}).wait(1).to({graphics:mask_1_graphics_17,x:239.0197,y:69.1159}).wait(1).to({graphics:mask_1_graphics_18,x:239.0179,y:69.0925}).wait(1).to({graphics:mask_1_graphics_19,x:239.0143,y:69.0538}).wait(1).to({graphics:mask_1_graphics_20,x:239.0094,y:68.9963}).wait(1).to({graphics:mask_1_graphics_21,x:239.0026,y:68.9152}).wait(1).to({graphics:mask_1_graphics_22,x:238.9936,y:68.8082}).wait(1).to({graphics:mask_1_graphics_23,x:238.986,y:68.701}).wait(1).to({graphics:mask_1_graphics_24,x:238.9801,y:68.6205}).wait(1).to({graphics:mask_1_graphics_25,x:238.9765,y:68.5629}).wait(1).to({graphics:mask_1_graphics_26,x:238.9743,y:68.5246}).wait(1).to({graphics:mask_1_graphics_27,x:238.9725,y:68.5008}).wait(1).to({graphics:mask_1_graphics_28,x:238.972,y:68.4886}).wait(1).to({graphics:mask_1_graphics_29,x:238.9716,y:68.4841}).wait(1).to({graphics:mask_1_graphics_30,x:239.0162,y:69.5191}).wait(1).to({graphics:mask_1_graphics_31,x:237.6751,y:69.6352}).wait(1).to({graphics:mask_1_graphics_32,x:237.1896,y:69.6209}).wait(1).to({graphics:mask_1_graphics_33,x:236.8489,y:69.5925}).wait(1).to({graphics:mask_1_graphics_34,x:236.5861,y:69.561}).wait(1).to({graphics:mask_1_graphics_35,x:236.3742,y:69.5286}).wait(1).to({graphics:mask_1_graphics_36,x:236.1992,y:69.498}).wait(1).to({graphics:mask_1_graphics_37,x:236.0529,y:69.4696}).wait(1).to({graphics:mask_1_graphics_38,x:235.9305,y:69.4431}).wait(1).to({graphics:mask_1_graphics_39,x:235.8274,y:69.4197}).wait(1).to({graphics:mask_1_graphics_40,x:235.7406,y:69.3985}).wait(1).to({graphics:mask_1_graphics_41,x:235.6699,y:69.381}).wait(1).to({graphics:mask_1_graphics_42,x:235.6119,y:69.3661}).wait(1).to({graphics:mask_1_graphics_43,x:235.5665,y:69.354}).wait(1).to({graphics:mask_1_graphics_44,x:235.5322,y:69.3445}).wait(1).to({graphics:mask_1_graphics_45,x:235.5084,y:69.3382}).wait(1).to({graphics:mask_1_graphics_46,x:235.494,y:69.3342}).wait(1).to({graphics:mask_1_graphics_47,x:235.6839,y:69.444}).wait(311));

	// FINESTRA_NUOVA
	this.instance_10 = new lib.FINNUOV();
	this.instance_10.setTransform(212.9,69.45,0.8318,0.8318,0,0,0,58.6,87.1);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31).to({regX:58.5,regY:87.2,x:220.45,y:69.4},0).wait(1).to({x:223.2,y:69.35},0).wait(1).to({x:225.1},0).wait(1).to({x:226.6,y:69.3},0).wait(1).to({x:227.75},0).wait(1).to({x:228.75,y:69.25},0).wait(1).to({x:229.6},0).wait(1).to({x:230.3,y:69.2},0).wait(1).to({x:230.85},0).wait(1).to({x:231.35},0).wait(1).to({x:231.75},0).wait(1).to({x:232.1},0).wait(1).to({x:232.35},0).wait(1).to({x:232.55},0).wait(1).to({x:232.65},0).wait(1).to({x:232.75},0).wait(1).to({regX:58.6,regY:87.1,x:232.9,y:69.05},0).to({regY:87,scaleX:0.913,scaleY:0.913,x:234.35,y:66.5},243).to({_off:true},58).wait(10));

	// foto
	this.instance_11 = new lib.foto();
	this.instance_11.setTransform(-56.35,23.5,1.0486,1.0066,0,0,0,-270.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:-62.1,regY:97,scaleX:1.0218,scaleY:0.9809,x:161.45,y:119.45},0).wait(1).to({scaleX:1.0114,scaleY:0.971,x:161.05,y:119},0).wait(1).to({scaleX:1.0037,scaleY:0.9636,x:160.75,y:118.65},0).wait(1).to({scaleX:0.9974,scaleY:0.9575,x:160.5,y:118.4},0).wait(1).to({scaleX:0.992,scaleY:0.9523,x:160.35,y:118.15},0).wait(1).to({scaleX:0.9871,scaleY:0.9477,x:160.15,y:117.9},0).wait(1).to({scaleX:0.9828,scaleY:0.9435,x:159.95,y:117.75},0).wait(1).to({scaleX:0.9789,scaleY:0.9397,x:159.85,y:117.6},0).wait(1).to({scaleX:0.9752,scaleY:0.9362,x:159.7,y:117.4},0).wait(1).to({scaleX:0.9718,scaleY:0.933,x:159.6,y:117.25},0).wait(1).to({scaleX:0.9687,scaleY:0.9299,x:159.45,y:117.15},0).wait(1).to({scaleX:0.9657,scaleY:0.9271,x:159.35,y:117.05},0).wait(1).to({scaleX:0.9629,scaleY:0.9244,x:159.25,y:116.85},0).wait(1).to({scaleX:0.9602,scaleY:0.9218,x:159.1,y:116.75},0).wait(1).to({scaleX:0.9577,scaleY:0.9194,x:159.05,y:116.65},0).wait(1).to({scaleX:0.9553,scaleY:0.9171,x:158.95,y:116.55},0).wait(1).to({scaleX:0.9529,scaleY:0.9148,x:158.85,y:116.45},0).wait(1).to({scaleX:0.9507,scaleY:0.9127,x:158.75,y:116.35},0).wait(1).to({scaleX:0.9486,scaleY:0.9107,x:158.7,y:116.25},0).wait(1).to({scaleX:0.9466,scaleY:0.9087,x:158.6,y:116.2},0).wait(1).to({scaleX:0.9446,scaleY:0.9068,x:158.55,y:116.05},0).wait(1).to({scaleX:0.9427,scaleY:0.905,x:158.45,y:116},0).wait(1).to({scaleX:0.9409,scaleY:0.9032,x:158.4,y:115.9},0).wait(1).to({scaleX:0.9391,scaleY:0.9015,x:158.35,y:115.85},0).wait(1).to({scaleX:0.9374,scaleY:0.8999,x:158.3,y:115.8},0).wait(1).to({scaleX:0.9357,scaleY:0.8983,x:158.2,y:115.7},0).wait(1).to({scaleX:0.9341,scaleY:0.8968,x:158.15,y:115.65},0).wait(1).to({scaleX:0.9325,scaleY:0.8953,x:158.1,y:115.55},0).wait(1).to({scaleX:0.931,scaleY:0.8938,x:158.05,y:115.5},0).wait(1).to({scaleX:0.9295,scaleY:0.8924,x:158,y:115.4},0).wait(1).to({scaleX:0.9281,scaleY:0.891,x:157.9},0).wait(1).to({scaleX:0.9267,scaleY:0.8897,y:115.3},0).wait(1).to({scaleX:0.9254,scaleY:0.8884,x:157.85,y:115.25},0).wait(1).to({scaleX:0.924,scaleY:0.8871,x:157.75,y:115.2},0).wait(1).to({scaleX:0.9227,scaleY:0.8859,y:115.15},0).wait(1).to({scaleX:0.9215,scaleY:0.8847,x:157.7,y:115.05},0).wait(1).to({scaleX:0.9203,scaleY:0.8835,x:157.65},0).wait(1).to({scaleX:0.9191,scaleY:0.8823,x:157.6,y:115},0).wait(1).to({scaleX:0.9179,scaleY:0.8812,x:157.55,y:114.95},0).wait(1).to({scaleX:0.9167,scaleY:0.8801,x:157.5,y:114.85},0).wait(1).to({scaleX:0.9156,scaleY:0.879,x:157.45,y:114.8},0).wait(1).to({scaleX:0.9145,scaleY:0.878,x:157.4,y:114.75},0).wait(1).to({scaleX:0.9135,scaleY:0.877,x:157.35,y:114.7},0).wait(1).to({scaleX:0.9124,scaleY:0.8759,y:114.65},0).wait(1).to({scaleX:0.9114,scaleY:0.875,x:157.3,y:114.6},0).wait(1).to({scaleX:0.9104,scaleY:0.874,x:157.25},0).wait(1).to({scaleX:0.9094,scaleY:0.8731,y:114.55},0).wait(1).to({scaleX:0.9084,scaleY:0.8721,x:157.2,y:114.5},0).wait(1).to({scaleX:0.9075,scaleY:0.8712,x:157.15,y:114.45},0).wait(1).to({scaleX:0.9066,scaleY:0.8703,x:157.1,y:114.4},0).wait(1).to({scaleX:0.9057,scaleY:0.8695},0).wait(1).to({scaleX:0.9048,scaleY:0.8686,x:157.05,y:114.35},0).wait(1).to({scaleX:0.9039,scaleY:0.8678,x:157,y:114.3},0).wait(1).to({scaleX:0.9031,scaleY:0.867,x:156.95},0).wait(1).to({scaleX:0.9022,scaleY:0.8662,y:114.2},0).wait(1).to({scaleX:0.9014,scaleY:0.8654,x:156.9},0).wait(1).to({scaleX:0.9006,scaleY:0.8646,x:156.85,y:114.15},0).wait(1).to({scaleX:0.8998,scaleY:0.8638},0).wait(1).to({scaleX:0.899,scaleY:0.8631,x:156.8,y:114.1},0).wait(1).to({scaleX:0.8983,scaleY:0.8624,y:114.05},0).wait(1).to({regX:-270.6,regY:0.7,scaleX:0.8975,scaleY:0.8616,x:-30.4,y:30.95},0).to({regX:-270.8,scaleX:0.7727,scaleY:0.7418,x:-10.45,y:34.05},254).to({_off:true},33).wait(10));

	// stageBackground
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_8.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(358));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-238.7,38.5,1633.1000000000001,736.8);
// library properties:
lib.properties = {
	id: 'BB4C11D17D1A4199AD804A49B4EBB488',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/FINESTRANUOVA.png?1715007685351", id:"FINESTRANUOVA"},
		{src:"images/ombra.png?1715007685351", id:"ombra"},
		{src:"images/SFONDO.jpg?1715007685351", id:"SFONDO"},
		{src:"images/uomo1.png?1715007685351", id:"uomo1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BB4C11D17D1A4199AD804A49B4EBB488'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;