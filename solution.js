const body = document.querySelector("body");
body.style.fontFamily = "sans-serif";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "space-between";
body.style.height = "100vh";
body.style.margin = "0";
document.querySelector(".title").style.textAlign = "center";

const main = document.querySelector(".main");
main.style.display = "flex";
main.style.flexDirection = "row";
main.style.flexWrap = "wrap";
main.style.justifyContent = "space-around";

const menuCategories = document.querySelectorAll(".category");
for (let menuCategory of menuCategories) {
  menuCategory.style.fontSize = "2rem";
  menuCategory.style.borderBottom = "1px solid black";
  menuCategory.style.fontStyle = "italic";
}

const colorGenerator = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

const foodCategories = document.querySelectorAll(".food-category");
for (let foodCategory of foodCategories) {
  foodCategory.style.backgroundColor = colorGenerator();
  foodCategory.style.padding = "2rem";
  foodCategory.style.width = "20vw";
  foodCategory.style.height = "15vh";
  foodCategory.style.display = "flex";
  foodCategory.style.flexDirection = "column";
  foodCategory.style.justifyContent = "space-between";
}

document.getElementById("warning").style.fontSize = "1.5rem";

const allergyWarning = document.querySelector(".allergy-warning");
allergyWarning.style.display = "flex";
allergyWarning.style.flexDirection = "column";
allergyWarning.style.alignItems = "center";
allergyWarning.style.justifyContent = "center";

const allergyInfos = document.querySelectorAll(".allergy-info");
allergyInfos.forEach((allergyInfo, index) => {
  if (index % 2 === 1) {
    allergyInfo.style.backgroundColor = "lightblue";
  }
  allergyInfo.style.listStyle = "none";
  allergyInfo.style.width = "20vw";
  allergyInfo.style.padding = "0.2rem";
});

const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexWrap = "wrap";
footer.style.justifyContent = "space-around";
footer.style.padding = "2rem";

const foodDesks = document.querySelectorAll(".food-desc");
for (let foodDesk of foodDesks) {
  foodDesk.style.display = "flex";
  foodDesk.style.justifyContent = "center";
  foodDesk.style.alignItems = "center";
  foodDesk.style.padding = "2rem";
  foodDesk.style.border = "5px solid yellow";
  foodDesk.style.borderRadius = "100%";
  foodDesk.style.width = "3rem";
  foodDesk.style.height = "3rem";
}
