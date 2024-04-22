document.addEventListener("DOMContentLoaded", runAllFunction);

// Hamburg Menu Function
let HamburgMenuObject = {
  mobileMenu: document.querySelector(".mobile-menu"),
  menuButton: document.querySelector(".fa-bars"),

  showHamburgMenu: function () {
    this.menuButton.addEventListener("click", (e) => {
      if (e.target) {
        this.mobileMenu.classList.toggle("show-mobile-menu");
      }
    });
  },
};

// Output of all methods
function runAllFunction(e) {
  if (e.target) {
    HamburgMenuObject.showHamburgMenu();
  } else {
    throw new Error("There is an error occured when DOM Load");
  }
}
