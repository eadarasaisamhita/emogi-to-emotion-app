Webcam.set
({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera')

function take_snapshot()
{
   Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML=
    ' <img id="capture_image"src="'+data_uri+'"> ';
   });
}

console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/5mxzZHkpx/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
   if(error) {
       console.error(error)
   }
   else{
       console.log(results);
       document.getElementById("result_emotion_name").innerHTML=result[0].label;
       document.getElementById("result_emotion_name").innerHTML=result[1].label;
       if(results[0].label="happy"){
           document.getElementById("update_emoji").innerHTML="&#128522;"
       }
       if(results[0].label="happy"){
        document.getElementById("update_emoji").innerHTML="&#128532;"
    }
    if(results[0].label="happy"){
        document.getElementById("update_emoji").innerHTML="&#128545;"
    }
    if(results[1].label="happy"){
        document.getElementById("update_emoji").innerHTML="&#128522;"
    }
    if(results[1].label="happy"){
     document.getElementById("update_emoji").innerHTML="&#128532;"
 }
 if(results[1].label="happy"){
     document.getElementById("update_emoji").innerHTML="&#128545;"
 }
   }
}