var $inputIngredientList = [];
var recommandList = [];
$(function () { // Attaching DOM element to varibles
    var $ingredientsList = $("#ingredientsList");
    var $myInput = $("#myInput");
    var $notification = $("#notification");
    // Counting amount of items in the list
    // To display or hide notification
    var displayNotification = function () {
        if (! $ingredientsList.children().length) { // $notification.css("display", "block");
            $notification.fadeIn("fast");
        } else {
            $notification.css("display", "none")
        }
    }
    // Attaching event handler to the add button
    $("#ingredientAdd").on("click", function () { // Returning false if the input is empty
        if (! $myInput.val() || !totalIngredient.includes($myInput.val())) {
            // ---------------------------------------------------//
            // add reaction func
            // ---------------------------------------------------//
            return false;
        }
        if ($inputIngredientList.includes($myInput.val())) {
            displayNotification();
            // ---------------------------------------------------//
            // add reaction func
            // ---------------------------------------------------//
            return false;
        }
        // Appending li with the input value
        $ingredientsList.append("<li><text>" + $myInput.val() + "</text><button class='delete'>&#10006</button></li>");
        $inputIngredientList.push($myInput.val());
        // Cleaning input after add event
        $myInput.val("");
        // Display/Hide Notification
        displayNotification();
        // Attaching even handler to the delete button
        $(".delete").on("click", function () {
            // Assigning "this" to varible, as it doesn't
            // work correctly with setTimeout() function
            var $parent = $(this).parent();
            $inputIngredientList.splice($inputIngredientList.indexOf($parent
                .children()
                .text()
                .slice(0, -1)), 1);
            // ---------------------------------------------------//
            // add reaction func
            // ---------------------------------------------------//
            // Displaying CSS animation
            $parent.css("animation", "fadeOut .3s linear");
            // Timeout on remove function
            setTimeout(function () {
                $parent.remove();
                displayNotification();
            }, 295);
        })
    });
    $("#myInput").keydown(function (key) {
        if (key.keyCode == 13) { // Returning false if the input is empty
            if (! $myInput.val() || !totalIngredient.includes($myInput.val())) {
                // ---------------------------------------------------//
                // add reaction func
                // ---------------------------------------------------//
                return false;
            }
            if ($inputIngredientList.includes($myInput.val())) {
                displayNotification();
                // ---------------------------------------------------//
                // add reaction func
                // ---------------------------------------------------//
                return false;
            }
            // Appending li with the input value
            $ingredientsList.append("<li><text>" + $myInput.val() + "</text><button class='delete'>&#10006</button></li>");
            $inputIngredientList.push($myInput.val());
            // Cleaning input after add event
            $myInput.val("");
            // Display/Hide Notification
            displayNotification();
            // Attaching even handler to the delete button
            $(".delete").on("click", function () {
                // Assigning "this" to varible, as it doesn't
                // work correctly with setTimeout() function
                var $parent = $(this).parent();
                $inputIngredientList.splice($inputIngredientList.indexOf($parent
                    .children()
                    .text()
                    .slice(0, -1)), 1);
                // ---------------------------------------------------//
                // add reaction func
                // ---------------------------------------------------//
                // Displaying CSS animation
                $parent.css("animation", "fadeOut .3s linear");
                // Timeout on remove function
                setTimeout(function () {
                    $parent.remove();
                    displayNotification();
                }, 295);
            })
        }
    });
    $("#searchButton").on("click", function () { // Returning false if the input is empty
        if (! $inputIngredientList.length) {
            // ---------------------------------------------------//
            // add reaction func
            // ---------------------------------------------------//
            return false;
        }
        var k = 0;
        for (var i = 0; i < recipeIngredientList.length; i++) {
            var recipeIngredient = recipeIngredientList[i];
            for (var j = 0; j < $inputIngredientList.length; j++) {
                if (! recipeIngredient.includes($inputIngredientList[j])) {
                    break;
                }
                if (j == $inputIngredientList.length - 1) {
                    recommandList[k] = recipeIngredientList[i][0];
                    k = k + 1;
                }
            }
        }
        for (var i = 0; i < recommandList.length; i++) {
            var recommandRecipeID = recommandList[i];
            for (var j = 0; j < recipeList.length; j++) {
                if (recommandRecipeID == recipeList[j][0]) {
                    // ---------------------------------------------------//
                    // modify HTML code
                    // ---------------------------------------------------//
                    console.log(recipeList[j]);
                }
            }
        }
    });
});
