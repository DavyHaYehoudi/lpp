import { getOptionsList } from "./optionsList.js";
import { processRecipe } from "./processRecipe.js";
import { customListOptions } from "./tags.js";
import { formatRecipeCount } from "./utils.js";

export const updateRecipes = (filteredRecipes, criteria) => {
  const $recipesNumberFind = document.querySelector("#recipesNumberFind");
  const options = {
    ingredients: [],
    appliance: [],
    ustensils: [],
  };
  const $cards = document.getElementById("cards");
  $cards.innerHTML = "";

  // Afficher les recettes filtrées
  filteredRecipes.forEach((recipe) => processRecipe(recipe, options));

  //Aucune trouvaille
  if (filteredRecipes.length === 0) {
    const newP = document.createElement("p");
    newP.classList.add("notFound");
    $cards.classList.add("notFound");
    if (criteria) {
      newP.innerText = `Aucune recette ne contient ${criteria}, vous pouvez chercher "tartes aux pommes", "poisson" etc.`;
    }
    $cards.appendChild(newP);
  }

  //Nombre de recettes trouvées
  $recipesNumberFind.textContent = `${formatRecipeCount(
    filteredRecipes.length
  )} recette${filteredRecipes.length > 1 ? "s" : ""}`;

    //listing des options compatibles
    getOptionsList(options);
    customListOptions();
};
