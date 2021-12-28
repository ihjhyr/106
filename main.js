//https://teachablemachine.withgoogle.com/models/v7qIZ4oHK/
function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('//https://teachablemachine.withgoogle.com/models/v7qIZ4oHK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}