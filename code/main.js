/* These lines of code are selecting elements from the HTML document using their class or ID names and
storing them in variables using the `const` keyword. */
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const links = document.querySelectorAll(".dropdown a");

/**
 * The function sets the "aria-expanded" attribute of all dropdown buttons to "false".
 */
function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

/**
 * The function removes the "active" class from all dropdown menus and prevents the click event from
 * propagating.
 */
function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

/**
 * The function toggles the "show" class on the element with the ID "navMenu".
 */
function toggleHamburger() {
  navMenu.classList.toggle("show");
}

/* This code block is adding a click event listener to each element in the `dropdownBtn` array. When a
dropdown button is clicked, it retrieves the value of the `data-dropdown` attribute from the clicked
button using `e.currentTarget.dataset.dropdown`. It then uses this value to get the corresponding
dropdown element using `document.getElementById(dropdownIndex)`. */
dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
    btn.setAttribute(
      "aria-expanded",
      btn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
  });
});

/* This code block is adding a click event listener to each link element in the `links` array. When a
link is clicked, it calls three functions: `closeDropdownMenu()`, `setAriaExpandedFalse()`, and
`toggleHamburger()`. These functions are responsible for closing any open dropdown menus, setting
the `aria-expanded` attribute of all dropdown buttons to "false", and toggling the visibility of the
hamburger menu, respectively. */
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

/* This code block is adding an event listener to the entire document that listens for a click event.
When the user clicks anywhere on the document, the `closeDropdownMenu()` and
`setAriaExpandedFalse()` functions are called. These functions are responsible for closing any open
dropdown menus and setting the `aria-expanded` attribute of all dropdown buttons to "false",
respectively. This allows the user to close any open dropdown menus by clicking anywhere outside of
the dropdown menu. */
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

/* This code block is adding an event listener to the entire document that listens for a keydown event.
If the key that is pressed is the "Escape" key, it calls the `closeDropdownMenu()` and
`setAriaExpandedFalse()` functions, which are responsible for closing any open dropdown menus and
setting the `aria-expanded` attribute of all dropdown buttons to "false", respectively. This allows
the user to close any open dropdown menus by pressing the "Escape" key. */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

/* This line of code is adding a click event listener to the element with the ID "hamburgerBtn". When
the element is clicked, it calls the `toggleHamburger()` function, which toggles the visibility of
the element with the class "menu". This allows the user to toggle the visibility of the hamburger
menu by clicking on the hamburger button. */
hamburgerBtn.addEventListener("click", toggleHamburger);
