import { searchByTag } from "./searchByTag.js";

export function createLi(dataName, sectionId, tag) {
  const newLi = document.createElement("li");
  newLi.textContent = dataName;
  newLi.setAttribute("data-name", dataName);
  newLi.setAttribute("data-section-id", sectionId);
  if (tag) {
    searchByTag("add", dataName);
  }
  return newLi;
}

export function createDeleteButton(liListbox, liTags, dataName) {
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteButton.addEventListener("click", () => {
    // Supprimer l'option sélectionnée
    liListbox.remove();
    // Supprimer le tag
    liTags.remove();

    searchByTag("delete", dataName);
  });

  return deleteButton;
}

export const formatRecipeCount = (count) => String(count).padStart(2, "0");

//Prévention injection HTML
export function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}
