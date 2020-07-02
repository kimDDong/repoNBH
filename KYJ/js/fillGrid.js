$(function () { // Attaching DOM element to varibles
    $("#searchButton").on("click", function () {
    // var recommandDiv = document.querySelector('#container_body');
    // var recipeName = document.createElement('p');
    // recipeName.textContent = recipeInformationList[j][1][2];
    // recommandDiv.appendChild(recipeName);

    var cardsDiv = document.querySelector('.cards');
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


    var input = "<div class=\"card\"><div class=\"card__image-holder\"><img class=\"card__image\" src=\"https://source.unsplash.com/300x225/?wave\" alt=\"wave\" /></div><div class=\"card-title\"><a href=\"#\" class=\"toggle-info btn\"><span class=\"left\"></span><span class=\"right\"></span></a><h2>Card title<small>Image from unsplash.com</small></h2></div><div class=\"card-flap flap1\"><div class=\"card-description\">This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.</div><div class=\"card-flap flap2\"><div class=\"card-actions\"><a href=\"#\" class=\"btn\">Read more</a></div></div></div></div>";
    cardsDiv.innerHTML = input;

})});
