var recipeIngredientList = [];
var requestURL2 = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/Ingredients.json';
var request2 = new XMLHttpRequest();
request2.open('GET', requestURL2);
request2.responseType = 'json';
request2.send();
request2.onload = function () {
    var foods = request2.response;
    bindIngredients(foods);
}

function bindIngredients(jsonObj) {
    var row = jsonObj["Grid_20150827000000000227_1"]['row'];
    var j;
    var n1 = 0;
    var n2 = 0;
    for (var i = 0; i < row.length; i = j) {
        var n2 = 1;
        var recipeIngredient = [];
        for (j = i; i < row.length; j++) {
            recipeIngredient[0] = row[j].RECIPE_ID;
            if (j < row.length - 1) {
                var input = row[j].IRDNT_NM;
                if (row[j].RECIPE_ID == row[j + 1].RECIPE_ID) {
                    recipeIngredient[n2] = input;
                    n2 = n2 + 1;
                } else {
                    recipeIngredient[n2] = input;
                    n2 = n2 + 1;
                    break;
                }
            } else {
                recipeIngredient[n2] = input;
                n2 = n2 + 1;
                break;
            }
        }
        recipeIngredientList[n1] = recipeIngredient;
        j = j + 1;
        n1 = n1 + 1;
    }
}
