var recipeInformationList = [];
var requestURL5 = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/json/recipeInformation.json';
var request5 = new XMLHttpRequest();
request5.open('GET', requestURL5);
request5.responseType = 'json';
request5.send();
request5.onload = function () {
    var foods = request5.response;
    makeRecipeInformation(foods);
}
function makeRecipeInformation(jsonObj) {
    var n1 = 0;
    var foodss = jsonObj['Grid_20150827000000000226_1']['row'];
    var j;
    for (var i = 0; i < foodss.length; i = j) {
        var informationOrder = [];
        var n2 = 1;
        for (j = i; i < foodss.length; j++) {
            informationOrder[0] = foodss[j].RECIPE_ID;
            if (j < foodss.length - 1) {
                if (foodss[j].RECIPE_ID == foodss[j + 1].RECIPE_ID) {
                    var informationChapter = [];
                    if (foodss[j].ROW_NUM != "") {
                        informationChapter[0] = foodss[j].ROW_NUM;
                    }
                    if (foodss[j].RECIPE_ID != "") {
                        informationChapter[1] = foodss[j].RECIPE_ID;
                    }
                    if (foodss[j].RECIPE_NM_KO != "") {
                        informationChapter[2] = foodss[j].RECIPE_NM_KO;
                    }
                    if (foodss[j].SUMRY != "") {
                        informationChapter[3] = foodss[j].SUMRY;
                    }
                    if (foodss[j].NATION_CODE != "") {
                        informationChapter[4] = foodss[j].NATION_CODE;
                    }
                    if (foodss[j].NATION_NM != "") {
                        informationChapter[5] = foodss[j].NATION_NM;
                    }
                    if (foodss[j].TY_CODE != "") {
                        informationChapter[6] = foodss[j].TY_CODE;
                    }
                    if (foodss[j].TY_NM != "") {
                        informationChapter[7] = foodss[j].TY_NM;
                    }
                    if (foodss[j].COOKING_TIME != "") {
                        informationChapter[8] = foodss[j].COOKING_TIME;
                    }
                    if (foodss[j].CALORIE != "") {
                        informationChapter[9] = foodss[j].CALORIE;
                    }
                    if (foodss[j].QNT != "") {
                        informationChapter[10] = foodss[j].QNT;
                    }
                    if (foodss[j].LEVEL_NM != "") {
                        informationChapter[11] = foodss[j].LEVEL_NM;
                    }
                    if (foodss[j].IRDNT_CODE != "") {
                        informationChapter[12] = foodss[j].IRDNT_CODE;
                    }
                    if (foodss[j].PC_NM != "") {
                        informationChapter[13] = foodss[j].PC_NM;
                    }
                    if (foodss[j].IMG_URL != "") {
                        informationChapter[14] = foodss[j].IMG_URL;
                    }
                    if (foodss[j].DET_URL != "") {
                        informationChapter[15] = foodss[j].DET_URL;
                    }
                    informationOrder[n2] = informationChapter;
                    n2 = n2 + 1;
                } else {
                    var informationChapter = [];
                    if (foodss[j].ROW_NUM != "") {
                        informationChapter[0] = foodss[j].ROW_NUM;
                    }
                    if (foodss[j].RECIPE_ID != "") {
                        informationChapter[1] = foodss[j].RECIPE_ID;
                    }
                    if (foodss[j].RECIPE_NM_KO != "") {
                        informationChapter[2] = foodss[j].RECIPE_NM_KO;
                    }
                    if (foodss[j].SUMRY != "") {
                        informationChapter[3] = foodss[j].SUMRY;
                    }
                    if (foodss[j].NATION_CODE != "") {
                        informationChapter[4] = foodss[j].NATION_CODE;
                    }
                    if (foodss[j].NATION_NM != "") {
                        informationChapter[5] = foodss[j].NATION_NM;
                    }
                    if (foodss[j].TY_CODE != "") {
                        informationChapter[6] = foodss[j].TY_CODE;
                    }
                    if (foodss[j].TY_NM != "") {
                        informationChapter[7] = foodss[j].TY_NM;
                    }
                    if (foodss[j].COOKING_TIME != "") {
                        informationChapter[8] = foodss[j].COOKING_TIME;
                    }
                    if (foodss[j].CALORIE != "") {
                        informationChapter[9] = foodss[j].CALORIE;
                    }
                    if (foodss[j].QNT != "") {
                        informationChapter[10] = foodss[j].QNT;
                    }
                    if (foodss[j].LEVEL_NM != "") {
                        informationChapter[11] = foodss[j].LEVEL_NM;
                    }
                    if (foodss[j].IRDNT_CODE != "") {
                        informationChapter[12] = foodss[j].IRDNT_CODE;
                    }
                    if (foodss[j].PC_NM != "") {
                        informationChapter[13] = foodss[j].PC_NM;
                    }
                    if (foodss[j].IMG_URL != "") {
                        informationChapter[14] = foodss[j].IMG_URL;
                    }
                    if (foodss[j].DET_URL != "") {
                        informationChapter[15] = foodss[j].DET_URL;
                    }
                    informationOrder[n2] = informationChapter;
                    n2 = n2 + 1;
                    break;
                }
            } else {
                var informationChapter = [];
                if (foodss[j].ROW_NUM != "") {
                    informationChapter[0] = foodss[j].ROW_NUM;
                }
                if (foodss[j].RECIPE_ID != "") {
                    informationChapter[1] = foodss[j].RECIPE_ID;
                }
                if (foodss[j].RECIPE_NM_KO != "") {
                    informationChapter[2] = foodss[j].RECIPE_NM_KO;
                }
                if (foodss[j].SUMRY != "") {
                    informationChapter[3] = foodss[j].SUMRY;
                }
                if (foodss[j].NATION_CODE != "") {
                    informationChapter[4] = foodss[j].NATION_CODE;
                }
                if (foodss[j].NATION_NM != "") {
                    informationChapter[5] = foodss[j].NATION_NM;
                }
                if (foodss[j].TY_CODE != "") {
                    informationChapter[6] = foodss[j].TY_CODE;
                }
                if (foodss[j].TY_NM != "") {
                    informationChapter[7] = foodss[j].TY_NM;
                }
                if (foodss[j].COOKING_TIME != "") {
                    informationChapter[8] = foodss[j].COOKING_TIME;
                }
                if (foodss[j].CALORIE != "") {
                    informationChapter[9] = foodss[j].CALORIE;
                }
                if (foodss[j].QNT != "") {
                    informationChapter[10] = foodss[j].QNT;
                }
                if (foodss[j].LEVEL_NM != "") {
                    informationChapter[11] = foodss[j].LEVEL_NM;
                }
                if (foodss[j].IRDNT_CODE != "") {
                    informationChapter[12] = foodss[j].IRDNT_CODE;
                }
                if (foodss[j].PC_NM != "") {
                    informationChapter[13] = foodss[j].PC_NM;
                }
                if (foodss[j].IMG_URL != "") {
                    informationChapter[14] = foodss[j].IMG_URL;
                }
                if (foodss[j].DET_URL != "") {
                    informationChapter[15] = foodss[j].DET_URL;
                }
                informationOrder[n2] = informationChapter;
                n2 = n2 + 1;
                break;
            }
        }
        j = j + 1;
        recipeInformationList[n1] = informationOrder;
        n1 = n1 + 1;
    }
}
