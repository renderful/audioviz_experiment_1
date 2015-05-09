// create webgl renderer
var renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var dogTexture = PIXI.Texture.fromImage("thatboy.png");

var dogs = [];
var number_of_dogs = 3;

var bloomFilter = new PIXI.filters.BloomFilter();
bloomFilter.blur = 100;
var pixelateFilter = new PIXI.filters.PixelateFilter();
var twistFilter = new PIXI.filters.TwistFilter();
twistFilter.angle = 2;
twistFilter.offset.x = 0.3;
twistFilter.offset.y = 0.6;

// create number_of_dogs sprites
for(i = 0; i < number_of_dogs; i++) {
    var dog = new PIXI.Sprite(dogTexture);

    // if (i == 1) {
        dog.blendMode = PIXI.BLEND_MODES.ADD
    // }

    dog.position.x = window.innerWidth/2 * (i+1)/2;
    dog.position.y = window.innerHeight/2;

    dog.scale.x = 2;
    dog.scale.y = 2;
    dog.anchor.x = 0.5;
    dog.anchor.y = 0.5;

     
    // set the filter
    dog.filters = [bloomFilter, twistFilter];
    // stage.filters = [bloomFilter];

    dogs.push(dog);

    stage.addChild(dog);
}

var r = 0;

function animate() {
    dogs[0].rotation += 0.01;
    dogs[1].rotation -= 0.01;
    dogs[2].rotation += 0.002;
    r += 0.01;

    renderer.render(stage);

    requestAnimationFrame(animate);

    if(meter.volume > 0.3) {
        stage.filters = [pixelateFilter];
    }

    twistFilter.angle = meter.volume * 15;
    // twistFilter.angle = Math.abs(Math.sin(i));
    // twistFilter.angle = Math.sin(i);
}