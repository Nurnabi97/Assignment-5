function searchBtn() {
    const inputMeal = document.getElementById('input-meal').value;
    inputValue(inputMeal);
};


function inputValue(inputMeal) {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=' + inputMeal)
        .then(res => res.json())
        .then(data => allMeal(data.meals))

    function allMeal(data) {
        const mainDiv = document.getElementById('main-chart');
        data.forEach(meals => {
            console.log(meals);

            const menuDiv = document.createElement('div');
            const mealInfo = `<div onclick="menuDetail('${inputMeal}')" class="menu-layout">
        <img id='img' src="${meals.strMealThumb}">
        <h1>${meals.strMeal}</h1>
       </div> `;
            menuDiv.innerHTML = mealInfo;
            mainDiv.appendChild(menuDiv);


        });
    };
}

const menuDetail = (mealName => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        
        .then(data => displayDetails(data.meals))
        // console.log(data)
});

const displayDetails = (menu => {
    const menuDetails = document.getElementById('menu-details');
    // console.log(menu);
    menu.forEach(menus => {
        // console.log(menu);
   
        menuDetails.innerHTML = `<div class="details-view">
        <img id='img' src="${menus.strMealThumb}">
        <h1>Name: ${menus.strMeal}</h1>
        <h2>StrArea: ${menus.strArea}</h2>
        <h2>IdMeal: ${menus.idMeal}</h2>
       </div> `;   
    });
});