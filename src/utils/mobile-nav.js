const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");

  //state methodology its how and where to we keep track of the state or status of a thing
  let IsMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    IsMobileNavOpen = !IsMobileNavOpen;
    if (IsMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });
};

export default mobileNav;
