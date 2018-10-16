const WIDTH = 800;
const HEIGHT = 600; 

const N = 10;
var cities = [];
var best = [];

function setup() {
    frameRate(10);
    createCanvas(WIDTH, HEIGHT);
    for(var i = 0; i < N; i++){
        var city = createVector(random(0,WIDTH), random(0, HEIGHT));
        cities.push(city);
    }

    best = cities.slice();
}

function drawCities(isBest, arr){
    if(isBest){
        stroke(255, 255, 0);
    }else {
        stroke(34, 100, 99);
    }
    
    strokeWeight(1);
    beginShape(LINES);
    for(var i = 0; i < N -1; i++){
        vertex(arr[i].x, arr[i].y)
        vertex(arr[i+1].x, arr[i+1].y)
    }
    endShape();
}

function swap(arr, i, j){
    var s = arr[i];
    arr[i] = arr[j];
    arr[j] = s;
}

function totalDistance(arr){
    var d = 0;
    for(var i = 0; i < N - 1; i++){
        d += dist(arr[i].x, arr[i].y, arr[i+1].x, arr[i+1].y )
    }
    return d;
}

function draw() {
    background(51);
    for(var i = 0; i< N; i++){
        fill(255);
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }
    
    drawCities(false, cities);
    drawCities(true, best);

    var i = floor(random(1,N-1));
    var j = floor(random(1,N-1));
    swap(cities, i, j);

    if(totalDistance(cities) < totalDistance(best)){
        console.log(totalDistance(best));
        best = cities.slice();
    }
    
}