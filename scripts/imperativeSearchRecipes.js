export const imperativeSearchRecipes = (query, recipes, tagName) => {
  const results = [];

  for (let i = 0; i < recipes.length; i++) {
    const { name, ingredients, description, appliance, ustensils } = recipes[i];
    const recipeLower = name.toLowerCase();
    const ingredientsLower = ingredients.map(ing => ing.ingredient.toLowerCase());
    const descriptionLower = description.toLowerCase();
    const applianceLower = appliance.toLowerCase();
    const ustensilsLower = ustensils.map(ust => ust.toLowerCase());

    if (
      (tagName &&
        (ingredientsLower.some(ing => ing.includes(tagName.toLowerCase())) ||
          applianceLower === tagName.toLowerCase() ||
          ustensilsLower.some(ust => ust.includes(tagName.toLowerCase())))) ||
      (!tagName &&
        (recipeLower.includes(query.toLowerCase()) ||
          ingredientsLower.some(ing => ing.includes(query.toLowerCase())) ||
          descriptionLower.includes(query.toLowerCase())))
    ) {
      results.push(recipes[i]);
    }
  }

  return results;
};
