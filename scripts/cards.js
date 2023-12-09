import { recipes } from "../data/recipes.js";
import { card } from "./card.js";

const $cards = document.querySelector("#cards");

export const cardsList = (filterCriteria = {}, limit = 10) => {
  let filteredRecipes = [...recipes];

  if (filterCriteria && Object.keys(filterCriteria).length > 0) {
    filteredRecipes = filteredRecipes.filter((item) => {
      // Appliquer les critères de filtrage ici
      // Exemple: vérifier si chaque critère correspond à la propriété de la recette
      return Object.entries(filterCriteria).every(
        ([key, value]) => item[key] === value
      );
    });
  }

  $cards.innerHTML = "";

  filteredRecipes.slice(0, limit).forEach((item) => {
    const { image, name, time, description, ingredients } = item;
  
    const ingredientList = ingredients.map((el) => {
      const { ingredient, quantity = '', unit = '' } = el;
      return { ingredient, quantity, unit };
    });
  
    const ingredientsData = ingredientList.reduce((acc, el) => {
      acc.ingredients.push(el.ingredient);
      acc.quantities.push(el.quantity);
      acc.units.push(el.unit);
      return acc;
    }, { ingredients: [], quantities: [], units: [] });
  
  
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
