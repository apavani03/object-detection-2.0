img = "";
Status = "";
detected_objects = [];
var object_count = 0;


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
        detected_objects = results;
        object_count = detected_objects.length;
    }
    
}

function draw(){

    if (Status != ""){
        for(i=0; i < object_count; i++ ){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            console.log(detected_objects[i]);
            object_name = detected_objects[i].label;
            console.log(object_name);
          
            
            accuracy = floor(detected_objects[i].confidence *100);
            console.log(accuracy);
            

            x = detected_objects[i].x;
            y = detected_objects[i].y;
            W = detected_objects[i].width;
            H = detected_objects[i].height;
        }
    }
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