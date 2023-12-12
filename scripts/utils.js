import { customListOptions } from "./tags.js";

export function createLi(dataName, sectionId) {
  const newLi = document.createElement("li");
  newLi.textContent = dataName;
  newLi.setAttribute("data-name", dataName);
  newLi.setAttribute("data-section-id", sectionId);
  // customListOptions()
  return newLi;
}

export function createDeleteButton(liListbox, liTags, $options) {
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteButton.addEventListener("click", () => {
    // Supprimer le li parent dans la listbox
    liListbox.remove();
    // Supprimer le li parent dans les tags
    liTags.remove();

    //Rajout dans la liste des options
    $options.appendChild(liListbox);
    customListOptions();
  });

  return deleteButton;
}

export const formatRecipeCount = (count) => String(count).padStart(2, "0");
