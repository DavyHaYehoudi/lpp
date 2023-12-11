export function createLi(dataName, sectionId) {
  const newLi = document.createElement("li");
  newLi.textContent = dataName;
  newLi.setAttribute("data-name", dataName);
  newLi.setAttribute("data-section-id", sectionId);
  return newLi;
}

export function createDeleteButton(liListbox, liTags) {
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteButton.addEventListener("click", () => {
    // Supprimer le li parent dans la listbox
    liListbox.remove();
    // Supprimer le li parent dans les tags
    liTags.remove();
  });

  return deleteButton;
}

export const formatRecipeCount = (count) => String(count).padStart(2, "0");
