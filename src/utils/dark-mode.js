const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle");

  //This is state variable
  const theme = localStorage.getItem("theme");
  //The getItem takes a string value, it takes the key  from a key value pair,
  // if it is given a key it returns the value of it and if the key is not
  // present in the local storage it returns NULL

  //On mount, means something that happens when a page finishes loading
  //i.e., when u first visit the page or reload the page based on the user preferences(i.e., last used), the theme is used
  theme && document.body.classList.add(theme);
  //This is called short circuting, the and operator asking whether the theme is truthee,
  //  if it is then it is allowed to run the next code, in this case it
  // checks if theme value is true applies the theme class in to the body

  //handlers
  //creating an arrow function
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    //The toggle() method either creates or removes the light-mode class to the body
    //depending on its current state

    //localStorage is an object we can use its methods, it creates Key-value pairs

    //The condition in the if specifies that if a body contains
    //a class name that is determined by using the contains() method
    //which take a string value and returns a boolean value
    //that can be used to determined the condition
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };

  //events
  //below loop runs twice
  //{} not required when we only have a single line of code
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;

//Previous Code for events
// themeToggleBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.body.classList.toggle("light-mode");
//     //The toggle() method either creates or removes the light-mode class to the body
//     //depending on its current state

//     //localStorage is an object we can use its methods, it creates Key-value pairs

//     //The condition in the if specifies that if a body contains
//     //a class name that is determined by using the contains() method
//     //which take a string value and returns a boolean value
//     //that can be used to determined the condition
//     if (document.body.classList.contains("light-mode")) {
//       localStorage.setItem("theme", "light-mode");
//     } else {
//       localStorage.removeItem("theme");
//     }
//   });
// });
