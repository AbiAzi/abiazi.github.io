(function(window){
    var helloSpeaker = {};
    helloSpeaker.name = "speak";
    var speakWord = "Hello";

    helloSpeaker.Hello = function speak(n) {
    console.log(speakWord + " " + n);
    }

    window.helloSpeaker = helloSpeaker;

})(window);
