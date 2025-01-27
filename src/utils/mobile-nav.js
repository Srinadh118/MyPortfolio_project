const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");
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
  // console.log(mobileLinks); returns NodeList similar ot an array, the forEach method works on the NodeLlst

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      IsMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
