var camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:200,
    image_format:"jpeg",
    jpeg_quality:90
});

Webcam.attach('#camera');

function take_photo(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '" + data_uri + "'>"
    })
}

console.log("ML5 Version: ", ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aFhINBly2/model.json", modelLoaded);