img = "";
Status = "";

function preload(){
 img = loadImage("girl_dog.jpg");
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
detect_now = ml5.objectDetector("cocossd", modelLoaded);

document.getElementById("status").innerHTML = "Status : Detecting Objects"

}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    detect_now.detect(img, gotResult); 
}
function gotResult(error, results){

    if (error){
        console.log(error);
    }
    else {
        console.log(results);
    }
    
}

function draw(){

    image(img,0,0,400,400);
   fill("#f9f753");
   text("girl",50,70);
   noFill();
   stroke("#e5ac00");
    rect(30,60,300,300);

    fill("#f9f753");
    text("dog",120,120);
    noFill();
   stroke("#e5ac00");
   rect(100, 90, 300, 320 ); 
}   