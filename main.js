
difference=0;
left_wristx=0;
right_wristx=0;

function setup(){
    canvas=createCanvas(500,500);
    canvas.position(550,100);

    video=createCapture(VIDEO);
    video.size(500,500);
    video.position(50,100);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#de4b84");
    fill("#1dcff2");
    textSize(difference);
    text('Debarsita',50,400);
    
    document.getElementById("font_size").innerHTML="Font size of the text will be: "+difference+"px";
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        
        right_wristx=results[0].pose.rightWrist.x;
        left_wristx=results[0].pose.leftWrist.x;
        difference=floor(left_wristx-right_wristx);

        console.log("leftWristX=  "+left_wristx+"rightWristX=  "+right_wristx+"difference=  "+difference);
    }
}