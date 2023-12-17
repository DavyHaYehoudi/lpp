import { recipes } from "../data/recipes.js";
import { searchRecipes } from "./searchRecipes.js";
import { updateRecipes } from "./utils.js";

export const searchByTag = (action, dataName) => {
  const articles = document.querySelectorAll("#cards > article");

  let recipesSelectedId = [];
  let filteredRecipes;
  const storedCriteria = localStorage.getItem("searchCriteria");

  articles.forEach((article) => {
    const id = article.getAttribute("data-id");
    recipesSelectedId.push(id);
  });

  if (action === "add") {
    const searchResults = searchRecipes("tag", recipes, dataName);
    filteredRecipes = searchResults.filter((item) =>
      recipesSelectedId.includes(String(item.id))
    );
    updateRecipes(filteredRecipes);
  } else if (action === "delete") {
    if (storedCriteria) {
      const searchMain = searchRecipes(storedCriteria, recipes);
      const activeRecipeDataNames = Array.from(
        document.querySelectorAll("#tags li")
      )
        .map((tag) => tag.getAttribute("data-name"))
        .filter((name) => name !== dataName);

      if (activeRecipeDataNames.length > 0) {
        const searchResults = activeRecipeDataNames.map((name) =>
          searchRecipes("tag", recipes, name)
        );

        const commonResults = searchResults.reduce((acc, currentArray) => {
          return acc.filter((recipe) =>
            currentArray.some((r) => r.id === recipe.id)
          );
        }, searchResults[0]);

        filteredRecipes = commonResults.filter((result) =>
          searchMain.some((sm) => sm.id === result.id)
        );
      } else if (storedCriteria) {
        //Une recherche générale est-elle à prendre en compte ?
        filteredRecipes = searchRecipes(storedCriteria, recipes);
      } else {
        //Uniquement recherche par tag
        filteredRecipes = [...recipes];
      }
    }
    updateRecipes(filteredRecipes);
  }
};
