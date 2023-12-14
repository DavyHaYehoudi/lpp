import { createLi } from "./utils.js";

const sections = {
  ingredients: "#ingredients_listBox > div.listbox-content > ul.options",
  appliance: "#appliance_listBox > div.listbox-content > ul.options",
  ustensils: "#ustensils_listBox > div.listbox-content > ul.options",
};

export const getOptionsList = (options) => {
<<<<<<< HEAD
  // console.log("options dans getOptionsList :",options);
=======
>>>>>>> cae5f08ed25878bb9b05316fe6facfb3bcb780e3
  for (const [key, selector] of Object.entries(sections)) {
    const $optionsList = document.querySelector(selector);
    const uniqueOptions = [...new Set(options[key])];

    $optionsList.innerHTML = "";
    const uniqueOptionsSorted = uniqueOptions.sort();
    uniqueOptionsSorted.forEach((option) => {
      const newLiOption = createLi(option, key + "_listBox");
      $optionsList.appendChild(newLiOption);
    });
  }
};
