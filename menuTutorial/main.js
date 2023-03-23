const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });
// const menu = document.getElementById("menu");
// const menuItems = Array.from(document.getElementsByClassName("menu-item"));

// menuItems.forEach((item, index) => {
//   item.addEventListener("mouseover", () => {
//     menu.dataset.activeIndex = index;
//     updateBackgroundPattern();
//   });
// });

// function updateBackgroundPattern() {
//   const activeIndex = menu.dataset.activeIndex;
//   const backgroundPattern = document.getElementById("menu-background-pattern");
  
//   if (activeIndex === "0") {
//     backgroundPattern.style.backgroundPosition = "0% -25%";
//     backgroundPattern.style.opacity = "0.7";
//   } else if (activeIndex === "1") {
//     backgroundPattern.style.backgroundPosition = "0% -50%";
//     backgroundPattern.style.opacity = "0.6";
//   } else if (activeIndex === "2") {
//     backgroundPattern.style.backgroundPosition = "0% -75%";
//     backgroundPattern.style.opacity = "0.5";
//   } else if (activeIndex === "3") {
//     backgroundPattern.style.backgroundPosition = "0% -100%";
//     backgroundPattern.style.opacity = "0.4";
//   }
// }