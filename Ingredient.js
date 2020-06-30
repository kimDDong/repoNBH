var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/test2.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var foods = request.response;
  showHeroes(foods);
  bindIngredients(foods);
}




function showHeroes(jsonObj){
  var row = jsonObj["Grid_20150827000000000227_1"]['row']
  var myDiv = document.createElement('div');
  var input = [];
  var j =0;
  for (var i =0; i<row.length; i++){
    var check =1;
      for (var k = 0; k < input.length; k++) {
        if(input[k] == row[i].IRDNT_NM){
          check = 0;
        }
      }
      if (check == 1) {
        input[j] = row[i].IRDNT_NM;
        j++;
      }
  }
}


function bindIngredients(jsonObj){
  var row = jsonObj["Grid_20150827000000000227_1"]['row']
  var ingredientDiv = document.createElement('div');
  var j;
  for (var i = 0; i < row.length; i = j) {
    var myDiv = document.createElement('div');
    for (j = i; i < row.length; j++) {
      var input = document.createElement('p');
      if (row[j].RECIPE_ID == row[j+1].RECIPE_ID) {
        input.textContent = row[j].IRDNT_NM;
        myDiv.appendChild(input);
      } else{
        input.textContent = row[j].IRDNT_NM;
        myDiv.appendChild(input);
        break;
      }
    }
    ingredientDiv.appendChild(myDiv);
    section.appendChild(ingredientDiv);
    j = j+1;
  }
}
