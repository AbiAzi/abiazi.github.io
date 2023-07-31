(function(window){
  var n= ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i=0;i<n.length;i++){
      var c = n[i].charAt(0);
        if(c == "J"|| c =="j"){
          byeSpeaker.Goodbye(n[i]);
          }
        else {
          helloSpeaker.Hello(n[i]);
          }
     }
     window.n = n;
})(window);
