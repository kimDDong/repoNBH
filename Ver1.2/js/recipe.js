// http://211.237.50.150:7080/openapi/ac3b64e99f683fbe430d99f9f35560e0280d00afa5571e77141c4bd95117e00c/json/Grid_20150827000000000228_1/1/1/  recipe
// http://211.237.50.150:7080/openapi/ac3b64e99f683fbe430d99f9f35560e0280d00afa5571e77141c4bd95117e00c/json/Grid_20150827000000000226_1/1/1/  name
// http://211.237.50.150:7080/openapi/ac3b64e99f683fbe430d99f9f35560e0280d00afa5571e77141c4bd95117e00c/json/Grid_20150827000000000227_1/1/1/  ingredient
var requestURL4 = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/json/recipe.json';
var request4 = new XMLHttpRequest();
request4.open('GET', requestURL4);
request4.responseType = 'json';
request4.send();
request4.onload = function () {
    var foods = request4.response;
    makeRecipeList(foods);
}
function makeRecipeList(jsonObj) {
    var n1 = 0;
    var foodss = jsonObj['Grid_20150827000000000228_1']['row'];
    var j;
    for (var i = 0; i < foodss.length; i = j) {
        var recipeOrder = [];
        var n2 = 1;
        for (j = i; i < foodss.length; j++) {
            recipeOrder[0] = foodss[j].RECIPE_ID;
            if (j < foodss.length - 1) {
                if (foodss[j].RECIPE_ID == foodss[j + 1].RECIPE_ID) {
                    var recipeChapter = [];
                    if (foodss[j].ROW_NUM != "") {
                        recipeChapter[0] = foodss[j].ROW_NUM;
                    }
                    if (foodss[j].RECIPE_ID != "") {
                        recipeChapter[1] = foodss[j].RECIPE_ID;
                    }
                    if (foodss[j].COOKING_NO != "") {
                        recipeChapter[2] = foodss[j].COOKING_NO;
                    }
                    if (foodss[j].COOKING_DC != "") {
                        recipeChapter[3] = foodss[j].COOKING_DC;
                    }
                    if (foodss[j].STRE_STEP_IMAGE_URL != "") {
                        recipeChapter[4] = foodss[j].STRE_STEP_IMAGE_URL;
                    }
                    if (foodss[j].STEP_TIP != "") {
                        recipeChapter[5] = foodss[j].STEP_TIP;
                    }
                    recipeOrder[n2] = recipeChapter;
                    n2 = n2 + 1;
                } else {
                    var recipeChapter = [];
                    if (foodss[j].ROW_NUM != "") {
                        recipeChapter[0] = foodss[j].ROW_NUM;
                    }
                    if (foodss[j].RECIPE_ID != "") {
                        recipeChapter[1] = foodss[j].RECIPE_ID;
                    }
                    if (foodss[j].COOKING_NO != "") {
                        recipeChapter[2] = foodss[j].COOKING_NO;
                    }
                    if (foodss[j].COOKING_DC != "") {
                        recipeChapter[3] = foodss[j].COOKING_DC;
                    }
                    if (foodss[j].STRE_STEP_IMAGE_URL != "") {
                        recipeChapter[4] = foodss[j].STRE_STEP_IMAGE_URL;
                    }
                    if (foodss[j].STEP_TIP != "") {
                        recipeChapter[5] = foodss[j].STEP_TIP;
                    }
                    recipeOrder[n2] = recipeChapter;
                    n2 = n2 + 1;
                    break;
                }
            } else {
                var recipeChapter = [];
                if (foodss[j].ROW_NUM != "") {
                    recipeChapter[0] = foodss[j].ROW_NUM;
                }
                if (foodss[j].RECIPE_ID != "") {
                    recipeChapter[1] = foodss[j].RECIPE_ID;
                }
                if (foodss[j].COOKING_NO != "") {
                    recipeChapter[2] = foodss[j].COOKING_NO;
                }
                if (foodss[j].COOKING_DC != "") {
                    recipeChapter[3] = foodss[j].COOKING_DC;
                }
                if (foodss[j].STRE_STEP_IMAGE_URL != "") {
                    recipeChapter[4] = foodss[j].STRE_STEP_IMAGE_URL;
                }
                if (foodss[j].STEP_TIP != "") {
                    recipeChapter[5] = foodss[j].STEP_TIP;
                }
                recipeOrder[n2] = recipeChapter;
                n2 = n2 + 1;
                break;
            }
        }
        j = j + 1;
        recipeList[n1] = recipeOrder;
        n1 = n1 + 1;
    }
}
