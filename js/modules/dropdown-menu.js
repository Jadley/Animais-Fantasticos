import outsideClick from "./outsideClick.js";

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("active");
  outsideClick(this, event, () => {
    this.classList.remove("active");
  });
}

export default function initiDropdownMenu() {
  const event = ["touchstart", "click"];

  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    event.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
