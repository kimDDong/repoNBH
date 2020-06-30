var ingredients = [];
var requestURL = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/test2.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var foods = request.response;
  showHeroes(foods);
}


function showHeroes(jsonObj){
  var row = jsonObj["Grid_20150827000000000227_1"]['row']
  var j =0;
  for (var i =0; i<row.length; i++){
    var check =1;
      for (var k = 0; k < ingredients.length; k++) {
        if(ingredients[k] == row[i].IRDNT_NM){
          check = 0;
        }
      }
      if (check == 1) {
        ingredients[j]= row[i].IRDNT_NM;
        j++;
      }
  }
}
