// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var message = res.firstName + " " + res.LastName
            if (res.likesChineseFood) {
              message += " Likes Chinese food";
            }
            else {
              message += " doesn't like chinese food"
            }
            message += " and uses ";
            message += res.numberOfDisplay;
            message += " display for coding.";

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + message + "!</h2>";
            });
      });
  }
);




