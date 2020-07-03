$(function () { // Attaching DOM element to varibles
    var $ingredientsList = $("#ingredientsList");
    var $inputIngredient = $("#myInput");
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
        if (! $inputIngredient.val() || !totalIngredient.includes($inputIngredient.val())) {
            // ---------------------------------------------------//
            // add reaction func
            // ---------------------------------------------------//
            return false;
        }
        if ($inputIngredientList.includes($inputIngredient.val())) {
            displayNotification();
            // ---------------------------------------------------//
            // add reaction func
            // ---------------------------------------------------//
            return false;
        }
        // Appending li with the input value
        $ingredientsList.append("<li><text>" + $inputIngredient.val() + "</text><button class='delete'>&#10006</button></li>");
        $inputIngredientList.push($inputIngredient.val());
        // Cleaning input after add event
        $inputIngredient.val("");
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
            if (! $inputIngredient.val() || !totalIngredient.includes($inputIngredient.val())) {
                // ---------------------------------------------------//
                // add reaction func
                // ---------------------------------------------------//
                return false;
            }
            if ($inputIngredientList.includes($inputIngredient.val())) {
                displayNotification();
                // ---------------------------------------------------//
                // add reaction func
                // ---------------------------------------------------//
                return false;
            }
            // Appending li with the input value
            $ingredientsList.append("<li><text>" + $inputIngredient.val() + "</text><button class='delete'>&#10006</button></li>");
            $inputIngredientList.push($inputIngredient.val());
            // Cleaning input after add event
            $inputIngredient.val("");
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
    $("#searchButtonId").on("click", function () { // Returning false if the input is empty
      console.log(recipeList);
      console.log(recipeList[0].length);
        var recommandList = [];
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
                }
            }
        }
        var input = "";
        var check = 0;
        for (var i = 0; i < recommandList.length; i++) {
            var recommandRecipeID = recommandList[i];
            for (var j = 0; j < recipeInformationList.length; j++) {
                if (recommandRecipeID == recipeInformationList[j][0]) {
                    // ---------------------------------------------------//
                    // modify HTML code
                    // ---------------------------------------------------//
                    var cardsDiv = document.querySelector('.cards');
                    var recommandURL= recipeInformationList[j][1][14];
                    var recommandName = recipeInformationList[j][1][2];
                    var recommandSum = recipeInformationList[j][1][3];
                    var recommandTime = recipeInformationList[j][1][8];
                    var recommandKcal = recipeInformationList[j][1][9];
                    var recommandPeople = recipeInformationList[j][1][10];
                    input += "<div class=\"card\"><div class=\"card__image-holder\"><img class=\"card__image\" src=\"" + recommandURL + "\" width=\"300\" height=\"225\" alt=\"wave\" /></div><div class=\"card-title\"><a href=\"#\" class=\"toggle-info btn\"><span class=\"left\"></span><span class=\"right\"></span></a><h2>"+recommandName+"<small>"+recommandSum+"</small></h2></div><div class=\"card-flap flap1\"><div class=\"card-description\">조리시간: "+recommandTime+"<br>칼로리: "+recommandKcal+"<br>음식량: "+recommandPeople+"</div><div class=\"card-flap flap2\"><div class=\"card-actions\"><button type=\"button\" class=\"readMoreButton\" onClick=\"location.href='receipe-post.html?recipeID="+recommandRecipeID+"&'\">더 보기</button></div></div></div></div>";
                    check = 1;
                }
            }
        }
        cardsDiv.innerHTML = input;
        // var recommandDiv = document.querySelector('#container_body');
        // var recipeName = document.createElement('p');
        // recipeName.textContent = recipeInformationList[j][1][2];
        // recommandDiv.appendChild(recipeName);


        // var cardDiv = document.createElement('div');
        // var cardImageHolderDiv = document.createElement('div');
        // var cardImageImg = document.createElement('img');
        // var cardTitleDiv = document.createElement('div');
        // var toggleInfoBtnA = document.createElement('a');
        // var leftSpan = document.createElement('span');
        // var rightSpan = document.createElement('span');
        // var cardTitleH2 = document.createElement('h2');
        // var infoCardTitleSmall = document.createElement('small');
        // var cardFlap_Flap1Div = document.createElement('div');
        // var cardDescriptionDiv = document.createElement('div');
        // var cardFlap_Flap2Div = document.createElement('div');
        // var cardActionDiv = document.createElement('div');
        // var btnA = document.createElement('a');



    });
});
