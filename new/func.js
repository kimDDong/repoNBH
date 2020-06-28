// http://211.237.50.150:7080/openapi/ac3b64e99f683fbe430d99f9f35560e0280d00afa5571e77141c4bd95117e00c/json/Grid_20150827000000000228_1/1/1/

var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://raw.githubusercontent.com/kimDDong/repoNBH/master/recipe.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var foods = request.response;
  populateHeader(foods);
  showHeroes(foods);
}

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['Grid_20150827000000000228_1']['result']['message'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'totalCnt: ' + jsonObj['Grid_20150827000000000228_1']['totalCnt'] + ' // startRow: ' + jsonObj['Grid_20150827000000000228_1']['startRow'] + ' // endRow: ' + jsonObj['Grid_20150827000000000228_1']['endRow'];
  header.appendChild(myPara);
}

function showHeroes(jsonObj) {
  var foodss = jsonObj['Grid_20150827000000000228_1']['row'];

  for (var i = 0; i < foodss.length; i++) {
    var myDiv = document.createElement('div');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myPara6 = document.createElement('p');

    myH2.textContent = foodss[i].name;
    myPara1.textContent = 'ROW_NUM: ' + foodss[i].ROW_NUM;
    myPara2.textContent = 'RECIPE_ID: ' + foodss[i].RECIPE_ID;
    myPara3.textContent = 'COOKING_NO: ' + foodss[i].COOKING_NO;
    myPara4.textContent = 'COOKING_DC: ' + foodss[i].COOKING_DC;
    myPara5.textContent = 'STRE_STEP_IMAGE_URL: ' + foodss[i].STRE_STEP_IMAGE_URL;
    myPara6.textContent = 'STEP_TIP: ' + foodss[i].STEP_TIP;

    myDiv.appendChild(myH2);
    myDiv.appendChild(myPara1);
    myDiv.appendChild(myPara2);
    myDiv.appendChild(myPara3);
    myDiv.appendChild(myPara4);
    myDiv.appendChild(myPara5);
    myDiv.appendChild(myPara6);

    section.appendChild(myDiv);
  }
}
