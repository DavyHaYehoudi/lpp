import { recipes } from "../data/recipes.js";
import { card } from "./card.js";
import { searchRecipes } from "./searchGeneral.js";

const $cards = document.querySelector("#cards");
const $recipesNumberFind = document.querySelector("#recipesNumberFind");

export const cardsList = (filterCriteria = {}, limit = 10) => {
  let filteredRecipes;
  const formatRecipeCount = (count) => String(count).padStart(2, '0');
  if (
    filterCriteria?.searchGeneral &&
    filterCriteria.searchGeneral.length >= 3
  ) {
    // Utiliser la fonction de recherche si une requête de recherche générale est présente
    filteredRecipes = searchRecipes(filterCriteria.searchGeneral, recipes);
    $recipesNumberFind.textContent = `${formatRecipeCount(filteredRecipes.length)} recette${
      filteredRecipes.length > 1 ? "s" : ""
    }`;
  } else {
    // Utiliser la logique de filtrage par défaut si aucune recherche générale
    filteredRecipes = [...recipes];
    $recipesNumberFind.textContent = `${limit} recettes`;
  }

  $cards.innerHTML = "";
  const slicedRecipes = filterCriteria.searchGeneral
    ? filteredRecipes
    : filteredRecipes.slice(0, limit);
  slicedRecipes.forEach((item) => {
    const { image, name, time, description, ingredients } = item;

    const ingredientList = ingredients.map((el) => {
      const { ingredient, quantity = "", unit = "" } = el;
      return { ingredient, quantity, unit };
    });

    const ingredientsData = ingredientList.reduce(
      (acc, el) => {
        acc.ingredients.push(el.ingredient);
        acc.quantities.push(el.quantity);
        acc.units.push(el.unit);
        return acc;
      },
      { ingredients: [], quantities: [], units: [] }
    );

    $cards.innerHTML += card(
      image,
      name,
      time,
      description,
      ingredientsData.ingredients,
      ingredientsData.quantities,
      ingredientsData.units
    );
  });
};
