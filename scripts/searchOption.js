import { getOptionsList } from "./optionsList.js";
import { customListOptions } from "./tags.js";
import { escapeHtml } from "./utils.js";

const $searchOptionInput = document.querySelectorAll(".search-bar-select");
const sections = {
  ingredients: "#ingredients_listBox > div.listbox-content > ul.options li",
  appliance: "#appliance_listBox > div.listbox-content > ul.options li",
  ustensils: "#ustensils_listBox > div.listbox-content > ul.options li",
};

let options = {
  ingredients: [],
  appliance: [],
  ustensils: [],
};

$searchOptionInput.forEach((input) => {
  //Appliquer pour tous les inputs de la classe sélectionnée
  input.addEventListener("input", (event) => {
     //Neutralisation d'une éventuelle injection HTML
     const escapedSearchTerm = escapeHtml(event.target.value);
    //Attribuer un événement
    for (const [key, selector] of Object.entries(sections)) {
      const section = document.querySelectorAll(selector);

      section.forEach((el) => {
        const optionName = el.getAttribute("data-name");
        options = { ...options, [key]: [...options[key], optionName] }; //Alimenter l'objet options par ce qui est contenu dans les listes
      });
    }

    const optionsFilter = {
      //Modifier les valeurs en fonction du texte saisi dans l'input
      ...options,
      [event.target.name]: [
        ...new Set(
          options[event.target.name].filter((item) =>
            item.toLowerCase().includes(escapedSearchTerm.toLowerCase())
          )
        ),
      ],
    };

    getOptionsList(optionsFilter);
    customListOptions();
  });
});
