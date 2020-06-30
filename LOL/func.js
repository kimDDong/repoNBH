var $list = [];

$(function () {
  //Attaching DOM element to varibles
  var $ingredientsList = $("#ingredientsList");
  var $myInput = $("#myInput");
  var $notification = $("#notification");

  //Counting amount of items in the list
  //To display or hide notification
  var displayNotification = function() {
    if(!$ingredientsList.children().length){
      // $notification.css("display", "block");
      $notification.fadeIn("fast");
    } else {
      $notification.css("display", "none")
    }
  }

  //Attaching event handler to the add button
  $("#ingredientAdd").on("click", function() {

    //Returning false if the input is empty
    if(!$myInput.val() || !ingredients.includes($myInput.val())) {
      //---------------------------------------------------//
      // add reaction func
      //---------------------------------------------------//
      return false;
    }
    if($list.includes($myInput.val())){
      displayNotification();
      //---------------------------------------------------//
      // add reaction func
      //---------------------------------------------------//
      return false;
    }
    //Appending li with the input value
    $ingredientsList.append("<li><text>" + $myInput.val() + "</text><button class='delete'>&#10006</button></li>");

    $list.push($myInput.val());

    //Cleaning input after add event
    $myInput.val("");
    //Display/Hide Notification
    displayNotification();

    //Attaching even handler to the delete button
    $(".delete").on("click", function() {

      //Assigning "this" to varible, as it doesn't
      //work correctly with setTimeout() function
      var $parent = $(this).parent();

      $list.splice($list.indexOf($parent.children().text().slice(0, -1)),1);
      //---------------------------------------------------//
      // add reaction func
      //---------------------------------------------------//

      //Displaying CSS animation
      $parent.css("animation", "fadeOut .3s linear");

      //Timeout on remove function
      setTimeout(function(){
        $parent.remove();
        displayNotification();
      }, 295);

    })
  });


  $("#myInput").keydown(function(key) {
    if (key.keyCode == 13) {
        //Returning false if the input is empty
        if(!$myInput.val() || !ingredients.includes($myInput.val())) {
          //---------------------------------------------------//
          // add reaction func
          //---------------------------------------------------//
          return false;
        }
        if($list.includes($myInput.val())){
          displayNotification();
          //---------------------------------------------------//
          // add reaction func
          //---------------------------------------------------//
          return false;
        }
        //Appending li with the input value
        $ingredientsList.append("<li><text>" + $myInput.val() + "</text><button class='delete'>&#10006</button></li>");

        $list.push($myInput.val());

        //Cleaning input after add event
        $myInput.val("");
      !
        //Display/Hide Notification
        displayNotification();

        //Attaching even handler to the delete button
        $(".delete").on("click", function() {

          //Assigning "this" to varible, as it doesn't
          //work correctly with setTimeout() function
          var $parent = $(this).parent();

          $list.splice($list.indexOf($parent.children().text().slice(0, -1)),1);
          //---------------------------------------------------//
          // add reaction func
          //---------------------------------------------------//

          //Displaying CSS animation
          $parent.css("animation", "fadeOut .3s linear");

          //Timeout on remove function
          setTimeout(function(){
            $parent.remove();
            displayNotification();
          }, 295);

        })

    }

  });

});
