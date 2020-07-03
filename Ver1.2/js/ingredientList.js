var requestURL = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/json/ingredient.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var foods = request.response;
  makeTotalIngredient(foods);
}


function makeTotalIngredient(jsonObj){
  var row = jsonObj["Grid_20150827000000000227_1"]['row']
  var j =0;
  for (var i =0; i<row.length; i++){
    var check =1;
      for (var k = 0; k < totalIngredient.length; k++) {
        if(totalIngredient[k] == row[i].IRDNT_NM){
          check = 0;
        }
      }
      if (check == 1) {
        totalIngredient[j]= row[i].IRDNT_NM;
        j++;
      }
  }
}
