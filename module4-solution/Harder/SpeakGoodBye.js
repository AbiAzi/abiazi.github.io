(function(window){
  var byeSpeaker = {};
  byeSpeaker.name = "speak";
  var speakWord = "Good Bye";

  byeSpeaker.Goodbye = function speak(n) {
  console.log(speakWord + " " + n);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
