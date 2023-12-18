const isRecipeMatching = (query, recipe, tagName) => {
  const { name, ingredients, description, appliance, ustensils } = recipe;
  const recipeLower = name.toLowerCase();
  const ingredientsLower = ingredients.map((ing) =>
    ing.ingredient.toLowerCase()
  );
  const descriptionLower = description.toLowerCase();
  const applianceLower = appliance.toLowerCase();
  const ustensilsLower = ustensils.map((ust) => ust.toLowerCase());

  return (
    (tagName &&
      (ingredientsLower.some((ing) => ing.includes(tagName.toLowerCase())) ||
        applianceLower === tagName.toLowerCase() ||
        ustensilsLower.some((ust) => ust.includes(tagName.toLowerCase())))) ||
    (!tagName &&
      (recipeLower.includes(query.toLowerCase()) ||
        ingredientsLower.some((ing) => ing.includes(query.toLowerCase())) ||
        descriptionLower.includes(query.toLowerCase())))
  );
};

export const functionalSearchRecipes = (query, recipes, tagName) => {
  return recipes.filter((recipe) => isRecipeMatching(query, recipe, tagName));
};
