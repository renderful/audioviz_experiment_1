// create webgl renderer
var renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var dogTexture = PIXI.Texture.fromImage("thatboy.png");
var dog = new PIXI.Sprite(dogTexture);

dog.position.x = window.innerWidth/2;
dog.position.y = window.innerHeight/2;

dog.scale.x = 2;
dog.scale.y = 2;
dog.anchor.x = 0.5;
dog.anchor.y = 0.5;

// create a filter
var bloomFilter = new PIXI.filters.BloomFilter();
bloomFilter.blur = 100;
var pixelateFilter = new PIXI.filters.PixelateFilter();
var twistFilter = new PIXI.filters.TwistFilter();
twistFilter.angle = 2;
 
// set the filter
stage.filters = [bloomFilter, pixelateFilter, twistFilter];
// stage.filters = [bloomFilter];

stage.addChild(dog);
var i = 0;

function animate() {
    dog.rotation += 0.01;
    i += 0.01;

    renderer.render(stage);

    requestAnimationFrame(animate);

    console.log(meter.volume);
    twistFilter.angle = meter.volume * 10;
    // twistFilter.angle = Math.abs(Math.sin(i));
    // twistFilter.angle = Math.sin(i);
}