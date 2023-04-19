import './style.css';
import recipeData from './data/recipes.json';

const getRowOfRecipesHtml = (recipes) => {
	let html = '';
	for (const recipe of recipes) {
		const elem = `
<div class="card" style="width: 18rem;">
  <img src="${recipe.image}" class="img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${recipe.title}</h5>
	<h6>${recipe.author}</h6>
	<hr/>
    <p class="card-text">Ingredients: ${recipe.ingredients.join(', ')}</p>
  </div>
</div>
		`;
		html += elem;
	}
	return html;
};

const sections = Object.entries(recipeData);
for (const section of sections) {
	const sectionIdCode = section[0];
	const recipes = section[1];

	const sectionElem = document.querySelector(`#${sectionIdCode}`);

	sectionElem.innerHTML = getRowOfRecipesHtml(recipes);
}