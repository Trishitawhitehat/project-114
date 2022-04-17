function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

    function modelLoaded() {
        console.log('PoseNet Is Initialized');
    }

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
  }

  function preload() {
  }

  function draw() {
      image(video, 0, 0, 300, 300);
  }

  Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    save('filtered_image.png');
}