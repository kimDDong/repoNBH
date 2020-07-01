var ingredients2 = [];
var requestURL3 = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/Ingredients.json';
var request3 = new XMLHttpRequest();
request3.open('GET', requestURL3);
request3.responseType = 'json';
request3.send();
request3.onload = function() {
  var foods = request3.response;
  getIngredients2(foods);
}


function getIngredients2(jsonObj){
  var row = jsonObj["Grid_20150827000000000227_1"]['row'];
  var j =0;
  for (var i =0; i<row.length; i++){
    var check =1;
      for (var k = 0; k < ingredients2.length; k++) {
        if(ingredients2[k] == row[i].IRDNT_NM){
          check = 0;
        }
      }
      if (check == 1) {
        ingredients2[j]= row[i].IRDNT_NM;
        j++;
      }
  }
}
