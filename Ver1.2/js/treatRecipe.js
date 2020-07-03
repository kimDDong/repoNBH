var recipeID = "";
$(document).ready(function () {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == "recipeID") {
            sval = temp[1];
        }
    }
    recipeID = sval;
    var requestURL6 = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/json/recipeInformation.json';
    var request6 = new XMLHttpRequest();
    request6.open('GET', requestURL6);
    request6.responseType = 'json';
    request6.send();
    request6.onload = function () {
        var foods = request6.response;
        makeRecipeCard(foods);
    }
    function makeRecipeCard(jsonObj) {
        var containerDiv = document.querySelector('#containerDiv');
        var receipeHeadlineDiv = document.querySelector('#receipe-headlineDiv');
        var receipeForDiv = document.querySelector('#receipe-forDiv');
        var input = "";
        var input2 = "";
        var input3 = "";
        for (var i = 0; i < recipeInformationList.length; i++) {
            if (recipeID == recipeInformationList[i][0]) {
                // ---------------------------------------------------//
                // modify HTML code
                // ---------------------------------------------------//
                var recipeIMG = recipeInformationList[i][1][14];
                input += "<div class=\"row\"><div class=\"col-12\"><div class=\"receipe-slider owl-carousel owl-loaded owl-drag\"><img src=\"" + recipeIMG + "\" width=\"320px\" height=\"100%\" alt=\"\"></div></div>";
                // <!-- @ IMG -->
                var receipeName = recipeInformationList[i][1][2];
                var receipeNation = recipeInformationList[i][1][5];
                var receipeType = recipeInformationList[i][1][7];
                var receipeTime = recipeInformationList[i][1][8];
                var receipeCal = recipeInformationList[i][1][9];
                var receipeQnt = recipeInformationList[i][1][10];
                var receipeIngredient = recipeInformationList[i][1][12];
                var receipePrice = recipeInformationList[i][1][13];
                var receipeSumry = recipeInformationList[i][1][3];
                var receipeHeadlineDivData = [
                    receipeName,
                    receipeNation,
                    receipeType,
                    receipeTime,
                    receipeCal,
                    receipeQnt,
                    receipeIngredient,
                    receipePrice,
                    receipeSumry
                ];
                input2 += "<h2>" + receipeHeadlineDivData[0] + "</h2><div class=\"receipe-duration\">";
                for (var j = 1; j < receipeHeadlineDivData.length; j++) {
                    input2 += "<h6>" + receipeHeadlineDivData[j] + "</h6>";
                }
                input2 += "</div>";
                // <!-- @ NAME NATION TYPE TIME CAL QNT INGREDIENT PRICE SUMRY -->
                var receipeLevel = recipeInformationList[i][1][11];
                input3 += "<a href=\"#\" class=\"btn delicious-btn\">" + receipeLevel + "</a>";
                // <!-- @ LEVEL -->
            }
        }
        containerDiv.innerHTML = input;
        receipeHeadlineDiv.innerHTML = input2;
        receipeForDiv.innerHTML = input3;
    }
    var requestURL7 = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/json/recipe.json';
    var request7 = new XMLHttpRequest();
    request7.open('GET', requestURL7);
    request7.responseType = 'json';
    request7.send();
    request7.onload = function () {
        var foods = request7.response;
        makeRecipeCard2(foods);
    }
    function makeRecipeCard2(jsonObj) {
        var receipeOrderDiv = document.querySelector('#receipeOrderDiv');
        var input4 = "";
        for (var i = 0; i < recipeList.length; i++) {
            if (recipeID == recipeList[i][0]) {
                // ---------------------------------------------------//
                // modify HTML code
                // ---------------------------------------------------//
                for (var j = 1; j < recipeList[i].length; j++) {
                    var receipeDC = recipeList[i][j][3];
                    var receipeStepImg = recipeList[i][j][4];
                    var receipeTip = recipeList[i][j][5];
                    var receipeOrderDivData = [receipeDC, receipeStepImg, receipeTip];
                    input4 += "<div class=\"single-preparation-step d-flex\"><h4>" + j + "</h4>";
                    for (var k = 0; k < receipeOrderDivData.length; k++) {
                        if (typeof(receipeOrderDivData[k]) != "undefined"){
                            if(k == 1){
                                input4 += "<img class=\"card__image\" src=\"" + receipeOrderDivData[k] + "\" width=\"300\" height=\"225\" alt=\"wave\" />";
                            }
                            else{
                                input4 += "<p>" + receipeOrderDivData[k] + "</p>";
                            }
                        }
                    }
                    input4 += "</div>";
                    // <!-- @ DC STEP_IMG TIP -->
                }
            }
        }
        receipeOrderDiv.innerHTML = input4;
    }
    var requestURL8 = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/json/ingredient.json';
    var request8 = new XMLHttpRequest();
    request8.open('GET', requestURL8);
    request8.responseType = 'json';
    request8.send();
    request8.onload = function () {
        var foods = request8.response;
        makeRecipeCard3(foods);
    }
    function makeRecipeCard3(jsonObj) {
        console.log(recipeIngredientList);
        var recipeIngredientsDiv = document.querySelector('#recipeIngredientsDiv');
        var input5 = "";
        input5 += "<h4>Ingredients</h4>";

        for (var i = 0; i < recipeIngredientList.length; i++) {
            if (recipeID == recipeIngredientList[i][0]) {
                // ---------------------------------------------------//
                // modify HTML code
                // ---------------------------------------------------//
                for(var j = 1; j < recipeIngredientList[i].length; j++){
                    input5 += "<div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck"+j+"\"><label class=\"custom-control-label\" for=\"customCheck"+j+"\">"+recipeIngredientList[i][j]+"</label></div>";
                }
                // <!-- @ recipeIngredientList[] -->
            }
        }
        recipeIngredientsDiv.innerHTML = input5;
    }
});
