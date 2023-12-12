import { cardsList } from "./cards.js";

export const handleSearchGeneralInput = () => {
  const searchTerm = document.getElementById("search-bar").value;
  cardsList({ searchGeneral: searchTerm });
};

export const setupSearchEvent = () => {
  const $searchForm = document.getElementById("searchGeneralForm");
  $searchForm.addEventListener("submit", function (event) {
    handleSearchGeneralInput();
  });
};

export const searchRecipes = (query, recipes) => {
  const results = [];

  // Convertir la requête en minuscules pour une recherche insensible à la casse
  const queryLower = query.toLowerCase();

  // Filtrer les recettes qui correspondent à la requête dans le titre, les ingrédients ou la description
  recipes.forEach((recipe) => {
    const { name, ingredients, description } = recipe;
    const recipeLower = name.toLowerCase();
    const ingredientsLower = ingredients.map((ing) =>
      ing.ingredient.toLowerCase()
    );
    const descriptionLower = description.toLowerCase();

    // Vérifier la correspondance dans le titre, les ingrédients ou la description
    if (
      recipeLower.includes(queryLower) ||
      ingredientsLower.some((ing) => ing.includes(queryLower)) ||
      descriptionLower.includes(queryLower)
    ) {
      results.push(recipe);
    }
  });

  return results;
};
