noseX = 0;
noseY = 0;


function preload(){
    Mostash = loadImage('https://i.postimg.cc/2yNw72m9/3-RXu-Oj-moustache-clipart-transparent.png');
}

function setup(){
    canvas = createCanvas(320,240);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320,240);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0,0,320,240);
    image(Mostash, noseX, noseY, 75, 50);
}

function takeSnapshot(){
    save("hi.png");
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("X position of nose:"+results[0].pose.nose.x);
        console.log("Y position of nose:"+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 35;
        noseY = results[0].pose.nose.y - 10;
    }
}
