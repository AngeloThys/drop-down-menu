export function showDropdownOnHover(navItemClass, dropdownItemClass) {
  const navItems = document.querySelectorAll(`.${navItemClass}`);

  navItems.forEach((navItem) => {
    const dropdown = navItem.querySelector(`.${dropdownItemClass}`);

    console.log(dropdown);

    navItem.addEventListener("mouseover", () => {
      dropdown.classList.add("visible");
    });

    navItem.addEventListener("mouseout", () => {
      dropdown.classList.remove("visible");
    });
  });
}
