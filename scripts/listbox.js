// Ouverture de la listbox
function toggleListbox(sectionId) {
  const $target = document.querySelector(
    `#${sectionId} > div.listbox-content `
  );
  const $arrow = document.querySelector(
    `#${sectionId} > div.listbox-header > i `
  );
  const $listbox = document.querySelector(`#${sectionId}`);
  if ($target && $arrow && $listbox) {
    $target.classList.toggle("display-block");
    $arrow.classList.toggle("open");
    $listbox.classList.toggle("open");
  }
}

const listboxHeaders = document.querySelectorAll(".listbox-header");

listboxHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const sectionId = header.dataset.sectionId;
    toggleListbox(sectionId);
  });
});

// Fermeture de la listbox au clic extérieur à elle-même
document.addEventListener("click", (event) => {
    const listboxContainers = document.querySelectorAll(".custom-listbox");
    
    // Vérifier si l'élément cliqué est à l'intérieur d'une listbox
    const isClickInsideListbox = Array.from(listboxContainers).some((container) =>
      container.contains(event.target)
    );
  
    // Fermer toutes les listbox si le clic est en dehors
    if (!isClickInsideListbox) {
      listboxContainers.forEach((container) => {
        container.querySelector(".listbox-content").classList.remove("display-block");
        container.querySelector(".listbox-header i").classList.remove("open");
        container.classList.remove("open");
      });
    }
  });
  



