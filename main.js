img = "";
Load_Status = "";
detected_objects = [];
var object_count = 0;

function preload() {
    img = loadImage("girl_dog.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    detect_now = ml5.objectDetector("cocossd", modelLoaded);
    video = createCapture(VIDEO);
    video.hide();


    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("number_of_objects").innerHTML = "Number of objects detected:0";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Load_Status = true;
   
}

function gotResult(error, results) {

    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        detected_objects = results;
        object_count = detected_objects.length;
    }

}

function draw() {

    image(video, 0, 0, 400, 400);

    if (Load_Status != ""){
        detect_now.detect(video, gotResult); // ml5.objectDetector("cocossd", modelLoaded).detect();
        for(i=0; i < object_count; i++ ){

            red_color = Math.floor(Math.random(0,255)*100);
            blue_color = Math.floor(Math.random(0,255)*100);
            green_color = Math.floor(Math.random(0,255)*100);

            console.log("red color" + red_color);
            console.log("blue color" + blue_color);
            console.log("green color" + green_color);

            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected : " + object_count;

            console.log(detected_objects[i]);
            object_name = detected_objects[i].label;
            console.log(object_name);
          
            
            accuracy = floor(detected_objects[i].confidence *100);
            console.log(accuracy);
            

            x = detected_objects[i].x;
            y = detected_objects[i].y;
            W = detected_objects[i].width;
            H = detected_objects[i].height;

            fill(red_color,green_color,blue_color);
            text(object_name + " "+ accuracy + "%", x,y);
            noFill();
            stroke(red_color,green_color,blue_color);
            rect(x,y,W,H);
          
        }
    }

   
   
}